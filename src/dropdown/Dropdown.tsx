/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { HTMLAttributes, VNode, Slots, PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type {} from 'treemate';
import type {
  DropdownOption as NDropdownOption,
  DropdownGroupOption as NDropdownGroupOption,
  DropdownDividerOption as NDropdownDividerOption,
  DropdownRenderOption as NDropdownRenderOption
} from 'naive-ui';
import { defineComponent, computed } from 'vue';
import { NDropdown, dropdownProps as defaultNDropdownProps } from 'naive-ui';

import { isEmptyVNode, flattenVNodeChildren } from '../_utils/v-node';
import { getVPropAsBoolean, normalizeVProps } from '../_utils/v-prop';
import { getVSlot, resolveVSlot, mergeVSlots } from '../_utils/v-slot';
import { isVShowFalse } from '../_utils/v-dir';
import { objectOmitter } from '../_utils/internal';
import ComponentDropdownDivider from './DropdownDivider';
import ComponentDropdownItem from './DropdownItem';
import ComponentDropdownItemGroup from './DropdownItemGroup';

export type DropdownOption = {
  type?: 'group' | 'divider' | 'render';
  children?: DropdownOption[];
} & Partial<NDropdownOption> &
  Partial<Omit<NDropdownGroupOption, 'type' | 'children'>> &
  Partial<Omit<NDropdownDividerOption, 'type'>> &
  Partial<Omit<NDropdownRenderOption, 'type'>>;
export type DropdownOptions = DropdownOption[];

const _props = (() => {
  const restProps = objectOmitter(defaultNDropdownProps, 'options');
  return {
    ...restProps,
    options: {
      type: Array as PropType<DropdownOption[]>,
      default: () => []
    }
  } as const;
})();

export type DropdownProps = ExtractPublicPropTypes<typeof _props>;
export type DropdownRenderLabelParams = {
  option: DropdownOption;
  label: string;
  key?: string | number;
};
export type DropdownRenderOptionParams = {
  node: VNode;
  option: DropdownOption;
};
export type DropdownRenderIconParams = {
  option: DropdownOption;
};

function convertVNodesToOptions(vnodes: VNode[], depth: number = 1): NDropdownOption[] {
  const temp = [] as NDropdownOption[];

  vnodes = flattenVNodeChildren(vnodes) as VNode[];
  vnodes.forEach((vnode, index) => {
    const vKey = vnode.key;
    const vProps = vnode.props || {};
    const vSlots = (vnode.children || {}) as Slots;
    const restProps = objectOmitter(vProps, 'type', 'label', 'icon', 'show', 'disabled', 'children');

    if (vnode.type === ComponentDropdownItem) {
      // 菜单项
      temp.push({
        ...normalizeVProps(restProps),
        key: vKey ?? `__X_DROPDOWN_ITEM_${depth}_${index}`,
        props: restProps as HTMLAttributes,
        show: !isVShowFalse(vnode),
        disabled: getVPropAsBoolean(vProps, 'disabled'),
        label: resolveVSlot(vSlots.default) || (vProps.label as string),
        icon: resolveVSlot(vSlots.icon),
        children: vSlots.submenu ? convertVNodesToOptions(vSlots.submenu(), depth + 1) : undefined
      } as NDropdownOption);
    } else if (vnode.type === ComponentDropdownItemGroup) {
      // 菜单分组
      temp.push({
        ...normalizeVProps(restProps),
        type: 'group',
        key: vKey ?? `__X_DROPDOWN_GROUP_${depth}_${index}`,
        props: restProps as HTMLAttributes,
        show: !isVShowFalse(vnode),
        label: resolveVSlot(vSlots.label) || (vProps.label as string),
        icon: resolveVSlot(vSlots.icon),
        children: vSlots.default ? convertVNodesToOptions(vSlots.default(), depth + 1) : undefined
      } as NDropdownGroupOption);
    } else if (vnode.type === ComponentDropdownDivider) {
      // 分割线
      temp.push({
        ...normalizeVProps(restProps),
        type: 'divider',
        key: vKey ?? `__X_DROPDOWN_DIVIDER_${depth}_${index}`,
        props: restProps as HTMLAttributes
      } as NDropdownDividerOption);
    } else if (!isEmptyVNode(vnode)) {
      // 纯渲染的内容
      temp.push({
        ...vProps,
        ...normalizeVProps(restProps),
        type: 'render',
        key: vKey ?? `__X_DROPDOWN_RENDER_${depth}_${index}`,
        props: restProps as HTMLAttributes,
        render: () => <>{vnode}</>
      } as NDropdownRenderOption);
    }
  });

  return temp;
}

export default defineComponent({
  name: 'XNDropdown',

  components: {
    NDropdown
  },

  props: _props,

  slots: Object as SlotsType<{
    'default': NonNullable<unknown>;
    'render-label': DropdownRenderLabelParams;
    'render-option': DropdownRenderOptionParams;
    'render-icon': DropdownRenderIconParams;
    'trigger': NonNullable<unknown>;
  }>,

  setup(props, { attrs, slots, expose }) {
    function getNOptionLabel(option: NDropdownOption): string {
      return (props.labelField != null ? option[props.labelField] : option.label) as string;
    }

    function getNOptionKey(option: NDropdownOption): string | number {
      return (props.keyField != null ? option[props.keyField] : option.key) as string | number;
    }

    expose({});

    return () => {
      const mergedOptions = computed<NDropdownOption[]>(() => {
        const vnodes = slots.default?.({});
        if (isEmptyVNode(vnodes)) {
          return props.options;
        }

        const temp = convertVNodesToOptions(vnodes);
        return temp;
      });

      const mergedRenderLabel = computed(() => {
        const slot = getVSlot(slots, 'render-label');
        if (!slot) {
          return props.renderLabel;
        }

        return (option: NDropdownOption) => {
          return slot({
            option,
            label: getNOptionLabel(option),
            key: getNOptionKey(option)
          });
        };
      });

      const mergedRenderOption = computed(() => {
        const slot = getVSlot(slots, 'render-option');
        if (!slot) {
          return props.renderOption;
        }

        return ({ node, option }: { node: VNode; option: NDropdownOption }) => {
          return slot({
            node,
            option
          });
        };
      });

      const mergedRenderIcon = computed(() => {
        const slot = getVSlot(slots, 'render-icon');
        if (!slot) {
          return props.renderIcon;
        }

        return (option: NDropdownOption) => {
          const vnode = slot({
            option
          });
          return isEmptyVNode(vnode) ? false : vnode;
        };
      });

      const mergedSlots = mergeVSlots(slots, {
        'default': slots.trigger,
        'render-label': undefined,
        'render-option': undefined,
        'render-icon': undefined,
        'trigger': undefined
      });

      return (
        <NDropdown
          {...attrs}
          {...props}
          options={mergedOptions.value}
          renderLabel={mergedRenderLabel.value}
          renderOption={mergedRenderOption.value}
          renderIcon={mergedRenderIcon.value}
          v-slots={mergedSlots}
        />
      );
    };
  }
});
