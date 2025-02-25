﻿/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { ExtractPublicPropTypes, PropType, Slots, SlotsType, VNode } from 'vue';
import { computed, defineComponent, ref } from 'vue';
import type {
  SelectGroupOption as NSelectGroupOption,
  SelectInst as NSelectInst,
  SelectOption as NSelectOption,
  SelectRenderOption as NSelectRenderOption,
  SelectRenderTag as NSelectRenderTag
} from 'naive-ui';
import { NSelect, selectProps as defaultNSelectProps } from 'naive-ui';

import ComponentSelectOption from './SelectOption';
import ComponentSelectOptionGroup from './SelectOptionGroup';
import { objectOmitter } from '../_utils/internal';
import * as logger from '../_utils/logger';
import { flattenVNodeChildren, isEmptyVNode } from '../_utils/v-node';
import { getVPropAsBoolean, normalizeVProps } from '../_utils/v-prop';
import { getVSlot, mergeVSlots, resolveVSlot } from '../_utils/v-slot';

export type SelectOption = {
  type?: 'group';
  children?: SelectOption[];
} & Partial<NSelectOption> &
  Partial<Omit<NSelectGroupOption, 'type' | 'children'>>;
export type SelectOptions = SelectOption[];

const _props = (() => {
  const restProps = objectOmitter(defaultNSelectProps, 'options');
  return {
    ...restProps,
    options: {
      type: Array as PropType<SelectOption[]>,
      default: () => []
    }
  } as const;
})();

export type SelectProps = ExtractPublicPropTypes<typeof _props>;
export type SelectInstance = NSelectInst & {
  getData: () => { options: SelectOptions };
  $forwardComponent: NSelectInst;
};
export type SelectRenderLabelParams = {
  option: SelectOption;
  label: string;
  value?: string | number;
  selected?: boolean;
};
export type SelectRenderOptionParams = {
  node: VNode;
  option: SelectOption;
  selected?: boolean;
};
export type SelectRenderTagParams = {
  option: SelectOption;
  close: () => void;
};

function convertVNodesToOptions(vnodes: VNode[], depth: number = 1): NSelectOption[] {
  const temp = [] as NSelectOption[];

  vnodes = flattenVNodeChildren(vnodes) as VNode[];
  vnodes.forEach((vnode, index) => {
    const vKey = vnode.key;
    const vProps = vnode.props || {};
    const vSlots = (vnode.children || {}) as Slots;
    const restProps = objectOmitter(vProps, 'type', 'label', 'disabled', 'children');

    if (vnode.type === ComponentSelectOption) {
      // 选项
      temp.push({
        ...normalizeVProps(restProps),
        label: resolveVSlot(vSlots.default) || vProps.label,
        value: vProps.value,
        disabled: getVPropAsBoolean(vProps, 'disabled')
      } as SelectOption);
    } else if (vnode.type === ComponentSelectOptionGroup) {
      // 选项组
      temp.push({
        ...normalizeVProps(restProps),
        type: 'group',
        key: vKey ?? `__X_SELECT_GROUP_${depth}_${index}`,
        label: resolveVSlot(vSlots.label) || vProps.label,
        children: convertVNodesToOptions(vSlots.default?.() || [], depth + 1)
      } as SelectOption);
    } else if (__DEV__ && !isEmptyVNode(vnode)) {
      logger.warning(
        'Each child component in {0} should be {1}.',
        ComponentSelect.name,
        [ComponentSelectOption.name, ComponentSelectOptionGroup.name].join(', ')
      );
    }
  });

  return temp;
}

const ComponentSelect = defineComponent({
  name: 'XNSelect',

  components: {
    NSelect
  },

  props: _props,

  slots: Object as SlotsType<{
    'default': () => VNode[];
    'action': () => VNode[];
    'arrow': () => VNode[];
    'empty': () => VNode[];
    'header': () => VNode[];
    'render-label': (params: SelectRenderLabelParams) => VNode[];
    'render-option': (params: SelectRenderOptionParams) => VNode[];
    'render-tag': (params: SelectRenderTagParams) => VNode[];
  }>,

  setup(props, { attrs, slots, expose }) {
    function getNOptionLabel(option: NSelectOption): string {
      return (props.labelField != null ? option[props.labelField] : option.label) as string;
    }

    function getNOptionValue(option: NSelectOption): string | number | undefined {
      if (isNOptionGroup(option)) {
        return;
      }

      return (props.valueField != null ? option[props.valueField] : option.value) as string | number;
    }

    function isNOptionGroup(option: NSelectOption): boolean {
      return (option as NSelectGroupOption).type === 'group';
    }

    const nOptions = computed(() => {
      const vnodes = slots.default?.();
      if (isEmptyVNode(vnodes)) {
        return (props.options ?? []).map((option) => {
          if (typeof option === 'string' || typeof option === 'number') {
            return {
              [props.labelField ?? 'label']: '' + option,
              [props.valueField ?? 'value']: option
            };
          }

          return option;
        });
      }

      const temp = convertVNodesToOptions(vnodes);
      return temp;
    });

    const nRef = ref<NSelectInst>();
    const nRefExposed: SelectInstance = {
      blur: (...args) => nRef.value?.blur(...args),
      blurInput: (...args) => nRef.value?.blurInput(...args),
      focus: (...args) => nRef.value?.focus(...args),
      focusInput: (...args) => nRef.value?.focusInput(...args),
      getData: () => ({ options: [...nOptions.value] }),
      get $forwardComponent() {
        return nRef.value!;
      }
    };
    expose(nRefExposed);

    return () => {
      const mergedRenderLabel = computed(() => {
        const slot = getVSlot(slots, 'render-label');
        if (!slot) {
          return props.renderLabel;
        }

        return (option: NSelectOption, selected: boolean) => {
          return slot({
            option,
            label: getNOptionLabel(option),
            value: getNOptionValue(option),
            selected
          });
        };
      });

      const mergedRenderOption = computed(() => {
        const slot = getVSlot(slots, 'render-option');
        if (!slot) {
          return props.renderOption;
        }

        return ({ node, option, selected }: Parameters<NSelectRenderOption>[0]) => {
          return slot({
            node,
            option: option as NSelectOption,
            selected
          });
        };
      });

      const mergedRenderTag = computed(() => {
        const slot = getVSlot(slots, 'render-tag');
        if (!slot) {
          return props.renderTag;
        }

        return ({ option, handleClose }: Parameters<NSelectRenderTag>[0]) => {
          return slot({
            option,
            close: handleClose
          });
        };
      });

      const mergedOptions = computed(() => nOptions.value);

      const mergedSlots = mergeVSlots(slots, {
        'default': undefined,
        'render-label': undefined,
        'render-option': undefined,
        'render-tag': undefined
      });

      return (
        <NSelect
          ref={nRef}
          {...attrs}
          {...props}
          renderLabel={mergedRenderLabel.value}
          renderOption={mergedRenderOption.value}
          renderTag={mergedRenderTag.value}
          options={mergedOptions.value}
          v-slots={mergedSlots}
        />
      );
    };
  }
});

export default ComponentSelect;
