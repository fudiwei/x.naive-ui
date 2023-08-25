﻿import type { HTMLAttributes, VNode, Slots, SlotsType, ExtractPublicPropTypes } from 'vue';
import type {
    MenuOption as NMenuOption,
    MenuGroupOption as NMenuGroupOption,
    MenuDividerOption as NMenuDividerOption,
    MenuInst as NMenuInst
} from 'naive-ui';
import { defineComponent, ref, computed, getCurrentInstance } from 'vue';
import { NMenu, menuProps as defaultNMenuProps } from 'naive-ui';

import { isVNode, isEmptyVNode, isEmptyVNodes, flattenVNodeChildren, mergeVSlots } from '../_utils/vue';
import { getSlotRender } from '../_utils/render';
import * as logger from '../_utils/logger';
import { getRestProps } from '../_utils/internal';
import ComponentMenuDivider from './MenuDivider';
import ComponentMenuItem from './MenuItem';
import ComponentMenuItemGroup from './MenuItemGroup';

const _props = (() => {
    const rest = getRestProps(
        defaultNMenuProps,
        'childrenField',
        'disabledField',
        'expandIcon',
        'keyField',
        'labelField',
        'options',
        'renderExtra',
        'renderIcon',
        'renderLabel'
    );
    return {
        ...rest
    } as const;
})();

export type MenuProps = ExtractPublicPropTypes<typeof _props>;
export type MenuInstance = NMenuInst;

function convertVNodesToOptions(vnodes: VNode[]): NMenuOption[] {
    const temp = [] as NMenuOption[];

    flattenVNodeChildren(vnodes)
        .filter((vnode) => {
            if (Array.isArray(vnode) && vnode.length === 1) {
                vnode = vnode[0];
            }

            return isVNode(vnode) && !!vnode.type && typeof vnode.type !== 'symbol';
        })
        .map((vnode) => vnode as VNode)
        .forEach((vnode, index) => {
            const vKey = vnode.key;
            const vProps = vnode.props || {};
            const vSlots = (vnode.children || {}) as Slots;
            const restProps = getRestProps(vProps, 'key', 'type', 'label', 'icon', 'extra', 'disabled', 'children');

            if (vnode.type === ComponentMenuItem) {
                // 菜单项
                temp.push({
                    ...vProps,
                    key: vKey ?? `__X_MENU_ITEM_${index}`,
                    props: restProps as HTMLAttributes,
                    disabled: !!vProps.disabled || vProps.disabled === '',
                    label: getSlotRender(vSlots['default']) || vProps.label,
                    icon: getSlotRender(vSlots['icon']),
                    extra: getSlotRender(vSlots['extra']) || vProps.extra,
                    children: vSlots['submenu'] ? convertVNodesToOptions(vSlots['submenu']()) : undefined
                } as NMenuOption);
            } else if (vnode.type === ComponentMenuItemGroup) {
                // 菜单分组
                temp.push({
                    ...vProps,
                    type: 'group',
                    key: vKey ?? `__X_MENU_GROUP_${index}`,
                    props: restProps as HTMLAttributes,
                    label: getSlotRender(vSlots['label']) || vProps.label,
                    icon: getSlotRender(vSlots['icon']),
                    children: vSlots['default'] ? convertVNodesToOptions(vSlots['default']()) : undefined
                } as NMenuGroupOption);
            } else if (vnode.type === ComponentMenuDivider) {
                // 分割线
                temp.push({
                    ...vProps,
                    type: 'divider',
                    key: vnode.key ?? `__X_MENU_DIVIDER_${index}`,
                    props: restProps as HTMLAttributes
                } as NMenuDividerOption);
            } else if (!isEmptyVNode(vnode)) {
                logger.warning(
                    'Each child component should be "{0}", "{1}" or "{2}" in "{3}".',
                    ComponentMenuItem.name,
                    ComponentMenuItemGroup.name,
                    ComponentMenuDivider.name,
                    getCurrentInstance()?.type?.name
                );
            }
        });

    return temp;
}

export default defineComponent({
    name: 'XNMenu',

    components: {
        NMenu
    },

    props: _props,

    slots: Object as SlotsType<{
        default: NonNullable<unknown>;
    }>,

    setup(props, { attrs, slots, expose }) {
        const nOptions = computed<NMenuOption[]>(() => {
            const vnodes = slots['default']?.({});
            if (isEmptyVNodes(vnodes)) {
                return [];
            }

            const temp = convertVNodesToOptions(vnodes);
            return temp;
        });

        const nSlots = computed(() =>
            mergeVSlots(slots, {
                default: undefined
            })
        );

        const nRef = ref<NMenuInst>();
        expose({
            showOption: (key) => nRef.value?.showOption(key)
        } as MenuInstance);

        return () => (
            <NMenu
                ref={nRef}
                {...attrs}
                {...props}
                childrenField={undefined}
                disabledField={undefined}
                keyField={undefined}
                labelField={undefined}
                options={nOptions.value}
                renderExtra={undefined}
                renderIcon={undefined}
                renderLabel={undefined}
                v-slots={nSlots.value}
            />
        );
    }
});