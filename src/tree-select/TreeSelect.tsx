/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { ExtractPublicPropTypes, PropType, SlotsType, VNode } from 'vue';
import { computed, defineComponent, ref } from 'vue';
import type {
  TreeSelectInst as NTreeSelectInst,
  TreeSelectOption as NTreeSelectOption,
  TreeSelectRenderLabel as NTreeSelectRenderLabel,
  TreeSelectRenderPrefix as NTreeSelectRenderPrefix,
  TreeSelectRenderSuffix as NTreeSelectRenderSuffix,
  TreeSelectRenderTag as NTreeSelectRenderTag
} from 'naive-ui';
import { NTreeSelect, treeSelectProps as defaultNTreeSelectProps } from 'naive-ui';
import type { RenderSwitcherIcon as NTreeSelectRenderSwitcherIcon } from 'naive-ui/es/tree/src/interface';

import { objectOmitter } from '../_utils/internal';
import { getVSlot, mergeVSlots } from '../_utils/v-slot';

export type TreeSelectOption = {
  children?: TreeSelectOption[];
} & Partial<Omit<NTreeSelectOption, 'children'>>;
export type TreeSelectOptions = TreeSelectOption[];
export type TreeSelectRenderLabelParams = {
  option: TreeSelectOption;
  label: string;
  key?: string | number;
  checked: boolean;
  selected: boolean;
};
export type TreeSelectRenderPrefixParams = {
  option: TreeSelectOption;
  checked: boolean;
  selected: boolean;
};
export type TreeSelectRenderSuffixParams = {
  option: TreeSelectOption;
  checked: boolean;
  selected: boolean;
};
export type TreeSelectRenderSwitcherIconParams = {
  expanded: boolean;
  selected: boolean;
};
export type TreeSelectRenderTagParams = {
  option: TreeSelectOption;
  close: () => void;
};

const _props = (() => {
  const restProps = objectOmitter(defaultNTreeSelectProps, 'options');
  return {
    ...restProps,
    options: {
      type: Array as PropType<TreeSelectOption[]>,
      default: () => []
    }
  } as const;
})();

export type TreeSelectProps = ExtractPublicPropTypes<typeof _props>;
export type TreeSelectInstance = NTreeSelectInst & {
  $forwardComponent: NTreeSelectInst;
};

export default defineComponent({
  name: 'XNTreeSelect',

  components: {
    NTreeSelect
  },

  props: _props,

  slots: Object as SlotsType<{
    'action': () => VNode[];
    'arrow': () => VNode[];
    'empty': () => VNode[];
    'header': () => VNode[];
    'render-label': (params: TreeSelectRenderLabelParams) => VNode[];
    'render-prefix': (params: TreeSelectRenderPrefixParams) => VNode[];
    'render-suffix': (params: TreeSelectRenderSuffixParams) => VNode[];
    'render-tag': (params: TreeSelectRenderTagParams) => VNode[];
    'render-switcher-icon': (params: TreeSelectRenderSwitcherIconParams) => VNode[];
  }>,

  setup(props, { attrs, slots, expose }) {
    function getNOptionLabel(option: NTreeSelectOption): string {
      return (props.labelField != null ? option[props.labelField] : option.label) as string;
    }

    function getNOptionKey(option: NTreeSelectOption): string | number {
      return (props.keyField != null ? option[props.keyField] : option.key) as string | number;
    }

    const nRef = ref<NTreeSelectInst>();
    const nRefExposed: TreeSelectInstance = {
      blur: (...args) => nRef.value!.blur(...args),
      blurInput: (...args) => nRef.value!.blurInput(...args),
      focus: (...args) => nRef.value!.focus(...args),
      focusInput: (...args) => nRef.value!.focusInput(...args),
      getCheckedData: (...args) => nRef.value!.getCheckedData(...args),
      getIndeterminateData: (...args) => nRef.value!.getIndeterminateData(...args),
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

        return ({ option, checked, selected }: Parameters<NTreeSelectRenderLabel>[0]) => {
          return slot({
            option,
            label: getNOptionLabel(option),
            key: getNOptionKey(option),
            checked,
            selected
          });
        };
      });

      const mergedRenderPrefix = computed(() => {
        const slot = getVSlot(slots, 'render-prefix');
        if (!slot) {
          return props.renderPrefix;
        }

        return ({ option, checked, selected }: Parameters<NTreeSelectRenderPrefix>[0]) => {
          return slot({
            option,
            checked,
            selected
          });
        };
      });

      const mergedRenderSuffix = computed(() => {
        const slot = getVSlot(slots, 'render-suffix');
        if (!slot) {
          return props.renderSuffix;
        }

        return ({ option, checked, selected }: Parameters<NTreeSelectRenderSuffix>[0]) => {
          return slot({
            option,
            checked,
            selected
          });
        };
      });

      const mergedRenderSwitcherIcon = computed(() => {
        const slot = getVSlot(slots, 'render-switcher-icon');
        if (!slot) {
          return props.renderSwitcherIcon;
        }

        return ({ expanded, selected }: Parameters<NTreeSelectRenderSwitcherIcon>[0]) => {
          return slot({
            expanded,
            selected
          });
        };
      });

      const mergedRenderTag = computed(() => {
        const slot = getVSlot(slots, 'render-tag');
        if (!slot) {
          return props.renderTag;
        }

        return ({ option, handleClose }: Parameters<NTreeSelectRenderTag>[0]) => {
          return slot({
            option,
            close: handleClose
          });
        };
      });

      const mergedSlots = mergeVSlots(slots, {
        'render-prefix': undefined,
        'render-suffix': undefined,
        'render-label': undefined,
        'render-switcher-icon': undefined
      });

      return (
        <NTreeSelect
          ref={nRef}
          {...attrs}
          {...props}
          renderLabel={mergedRenderLabel.value}
          renderPrefix={mergedRenderPrefix.value}
          renderSuffix={mergedRenderSuffix.value}
          renderSwitcherIcon={mergedRenderSwitcherIcon.value}
          renderTag={mergedRenderTag.value}
          v-slots={mergedSlots}
        />
      );
    };
  }
});
