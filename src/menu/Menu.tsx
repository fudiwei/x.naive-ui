/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { ExtractPublicPropTypes, HTMLAttributes, PropType, Slots, SlotsType, VNode } from 'vue';
import { computed, defineComponent, ref } from 'vue';
import type { MenuDividerOption as NMenuDividerOption, MenuGroupOption as NMenuGroupOption, MenuInst as NMenuInst, MenuOption as NMenuOption } from 'naive-ui';
import { NMenu, menuProps as defaultNMenuProps } from 'naive-ui';

import ComponentMenuDivider from './MenuDivider';
import ComponentMenuItem from './MenuItem';
import ComponentMenuItemGroup from './MenuItemGroup';
import { objectOmitter } from '../_utils/internal';
import * as logger from '../_utils/logger';
import { isVShowFalse } from '../_utils/v-dir';
import { flattenVNodeChildren, isEmptyVNode } from '../_utils/v-node';
import { getVPropAsBoolean, normalizeVProps } from '../_utils/v-prop';
import { getVSlot, mergeVSlots, resolveVSlot } from '../_utils/v-slot';

export type MenuOption = {
  type?: 'group' | 'divider';
  children?: MenuOption[];
} & Partial<NMenuOption> &
  Partial<Omit<NMenuGroupOption, 'type' | 'children'>> &
  Partial<Omit<NMenuDividerOption, 'type'>>;
export type MenuOptions = MenuOptions[];

const _props = (() => {
  const restProps = objectOmitter(defaultNMenuProps, 'options');
  return {
    ...restProps,
    options: {
      type: Array as PropType<MenuOption[]>,
      default: () => []
    }
  } as const;
})();

export type MenuProps = ExtractPublicPropTypes<typeof _props>;
export type MenuInstance = NMenuInst & {
  $forwardComponent: NMenuInst;
};
export type MenuRenderLabelParams = {
  option: MenuOption;
  label: string;
  key?: string | number;
};
export type MenuRenderExtraParams = {
  option: MenuOption;
};
export type MenuRenderIconParams = {
  option: MenuOption;
};
export type MenuRenderExpandIconParams = MenuRenderIconParams;

function convertVNodesToOptions(vnodes: VNode[], depth: number = 1): NMenuOption[] {
  const temp = [] as NMenuOption[];

  vnodes = flattenVNodeChildren(vnodes) as VNode[];
  vnodes.forEach((vnode, index) => {
    const vKey = vnode.key;
    const vProps = vnode.props || {};
    const vSlots = (vnode.children || {}) as Slots;
    const restProps = objectOmitter(vProps, 'type', 'label', 'icon', 'extra', 'show', 'disabled', 'children');

    if (vnode.type === ComponentMenuItem) {
      // 菜单项
      const item = {
        ...normalizeVProps(restProps),
        key: vKey ?? `__X_MENU_ITEM_${depth}_${index}`,
        props: restProps as HTMLAttributes,
        show: !isVShowFalse(vnode),
        disabled: getVPropAsBoolean(vProps, 'disabled'),
        label: resolveVSlot(vSlots.default) || vProps.label,
        icon: resolveVSlot(vSlots.icon),
        extra: resolveVSlot(vSlots.extra) || vProps.extra,
        children: vSlots.submenu ? convertVNodesToOptions(vSlots.submenu(), depth + 1) : undefined
      } as NMenuOption;

      if ('children' in item) {
        // If there's no children, the prop must be unset, not be `null` or `undefined`.
        if (item.children == null) {
          delete item.children;
        }
      }

      temp.push(item);
    } else if (vnode.type === ComponentMenuItemGroup) {
      // 菜单分组
      temp.push({
        ...normalizeVProps(restProps),
        type: 'group',
        key: vKey ?? `__X_MENU_GROUP_${depth}_${index}`,
        props: restProps as HTMLAttributes,
        show: !isVShowFalse(vnode),
        label: resolveVSlot(vSlots.label) || vProps.label,
        icon: resolveVSlot(vSlots.icon),
        children: vSlots.default ? convertVNodesToOptions(vSlots.default(), depth + 1) : undefined
      } as NMenuGroupOption);
    } else if (vnode.type === ComponentMenuDivider) {
      // 分割线
      temp.push({
        ...normalizeVProps(restProps),
        type: 'divider',
        key: vKey ?? `__X_MENU_DIVIDER_${depth}_${index}`,
        props: restProps as HTMLAttributes,
        show: !isVShowFalse(vnode)
      } as NMenuDividerOption);
    } else if (__DEV__ && !isEmptyVNode(vnode)) {
      logger.warning(
        'Each child component in {0} should be {1}.',
        ComponentMenu.name,
        [ComponentMenuItem.name, ComponentMenuItemGroup.name, ComponentMenuDivider.name].join(', ')
      );
    }
  });

  return temp;
}

const ComponentMenu = defineComponent({
  name: 'XNMenu',

  components: {
    NMenu
  },

  props: _props,

  slots: Object as SlotsType<{
    'default': NonNullable<unknown>;
    'render-label': MenuRenderLabelParams;
    'render-extra': MenuRenderExtraParams;
    'render-icon': MenuRenderIconParams;
    'render-expand-icon': MenuRenderExpandIconParams;
  }>,

  setup(props, { attrs, slots, expose }) {
    function getNOptionLabel(option: NMenuOption): string {
      return (props.labelField != null ? option[props.labelField] : option.label) as string;
    }

    function getNOptionKey(option: NMenuOption): string | number {
      return (props.keyField != null ? option[props.keyField] : option.key) as string | number;
    }

    const nRef = ref<NMenuInst>();
    const nRefExposed: MenuInstance = {
      deriveResponsiveState: (...args) => nRef.value?.deriveResponsiveState(...args),
      showOption: (...args) => nRef.value?.showOption(...args),
      get $forwardComponent() {
        return nRef.value!;
      }
    };
    expose(nRefExposed);

    return () => {
      const mergedOptions = computed<NMenuOption[]>(() => {
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

        return (option: NMenuOption) => {
          return slot({
            option,
            label: getNOptionLabel(option),
            key: getNOptionKey(option)
          });
        };
      });

      const mergedRenderExtra = computed(() => {
        const slot = getVSlot(slots, 'render-extra');
        if (!slot) {
          return props.renderExtra;
        }

        return (option: NMenuOption) => {
          return slot({
            option
          });
        };
      });

      const mergedRenderIcon = computed(() => {
        const slot = getVSlot(slots, 'render-icon');
        if (!slot) {
          return props.renderIcon;
        }

        return (option: NMenuOption) => {
          const vnode = slot({
            option
          });
          return isEmptyVNode(vnode) ? false : vnode;
        };
      });

      const mergedRenderExpandIcon = computed(() => {
        const slot = getVSlot(slots, 'render-expand-icon');
        if (!slot) {
          return props.expandIcon;
        }

        return (option: NMenuOption) => {
          return slot({
            option
          });
        };
      });

      const mergedSlots = mergeVSlots(slots, {
        'default': undefined,
        'render-label': undefined,
        'render-extra': undefined,
        'render-icon': undefined,
        'render-expand-icon': undefined
      });

      return (
        <NMenu
          ref={nRef}
          {...attrs}
          {...props}
          options={mergedOptions.value}
          renderLabel={mergedRenderLabel.value}
          renderExtra={mergedRenderExtra.value}
          renderIcon={mergedRenderIcon.value}
          expandIcon={mergedRenderExpandIcon.value}
          v-slots={mergedSlots}
        />
      );
    };
  }
});

export default ComponentMenu;
