import type { HTMLAttributes, VNode, Slots, PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type {
    MenuOption as NMenuOption,
    MenuGroupOption as NMenuGroupOption,
    MenuDividerOption as NMenuDividerOption,
    MenuInst as NMenuInst
} from 'naive-ui';
import { defineComponent, ref, computed } from 'vue';
import { NMenu, menuProps as defaultNMenuProps } from 'naive-ui';

import { isEmptyVNode, flattenVNodeChildren } from '../_utils/v-node';
import { getVPropAsBoolean, normalizeVProps } from '../_utils/v-prop';
import { getVSlot, resolveVSlot, mergeVSlots } from '../_utils/v-slot';
import { isVShowFalse } from '../_utils/v-dir';
import { objectOmitter } from '../_utils/internal';
import * as logger from '../_utils/logger';
import ComponentMenuDivider from './MenuDivider';
import ComponentMenuItem from './MenuItem';
import ComponentMenuItemGroup from './MenuItemGroup';

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
export type MenuInstance = NMenuInst;
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

function convertVNodesToOptions(vnodes: VNode[]): NMenuOption[] {
    const temp = [] as NMenuOption[];

    vnodes = flattenVNodeChildren(vnodes) as VNode[];
    vnodes.forEach((vnode, index) => {
        const vKey = vnode.key;
        const vProps = vnode.props || {};
        const vSlots = (vnode.children || {}) as Slots;
        const restProps = objectOmitter(vProps, 'type', 'label', 'icon', 'extra', 'show', 'disabled', 'children');

        if (vnode.type === ComponentMenuItem) {
            // 菜单项
            temp.push({
                ...normalizeVProps(restProps),
                key: vKey ?? `__X_MENU_ITEM_${index}`,
                props: restProps as HTMLAttributes,
                show: !isVShowFalse(vnode),
                disabled: getVPropAsBoolean(vProps, 'disabled'),
                label: resolveVSlot(vSlots['default']) || vProps.label,
                icon: resolveVSlot(vSlots['icon']),
                extra: resolveVSlot(vSlots['extra']) || vProps.extra,
                children: vSlots['submenu'] ? convertVNodesToOptions(vSlots['submenu']()) : undefined
            } as NMenuOption);
        } else if (vnode.type === ComponentMenuItemGroup) {
            // 菜单分组
            temp.push({
                ...normalizeVProps(restProps),
                type: 'group',
                key: vKey ?? `__X_MENU_GROUP_${index}`,
                props: restProps as HTMLAttributes,
                show: !isVShowFalse(vnode),
                label: resolveVSlot(vSlots['label']) || vProps.label,
                icon: resolveVSlot(vSlots['icon']),
                children: vSlots['default'] ? convertVNodesToOptions(vSlots['default']()) : undefined
            } as NMenuGroupOption);
        } else if (vnode.type === ComponentMenuDivider) {
            // 分割线
            temp.push({
                ...normalizeVProps(restProps),
                type: 'divider',
                key: vnode.key ?? `__X_MENU_DIVIDER_${index}`,
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

        const nOptions = computed<NMenuOption[]>(() => {
            const vnodes = slots['default']?.({});
            if (isEmptyVNode(vnodes)) {
                return [];
            }

            const temp = convertVNodesToOptions(vnodes);
            return temp;
        });

        const nRenderLabel = computed(() => {
            const slot = getVSlot(slots, 'render-label');
            if (!slot) {
                return props.renderLabel;
            }

            return (option: NMenuOption) => {
                return slot({
                    option: option,
                    label: getNOptionLabel(option),
                    key: getNOptionKey(option)
                });
            };
        });

        const nRenderExtra = computed(() => {
            const slot = getVSlot(slots, 'render-extra');
            if (!slot) {
                return props.renderExtra;
            }

            return (option: NMenuOption) => {
                return slot({
                    option: option
                });
            };
        });

        const nRenderIcon = computed(() => {
            const slot = getVSlot(slots, 'render-icon');
            if (!slot) {
                return props.renderIcon;
            }

            return (option: NMenuOption) => {
                return slot({
                    option: option
                });
            };
        });

        const nRenderExpandIcon = computed(() => {
            const slot = getVSlot(slots, 'render-expand-icon');
            if (!slot) {
                return props.expandIcon;
            }

            return (option: NMenuOption) => {
                return slot({
                    option: option
                });
            };
        });

        const nSlots = computed(() =>
            mergeVSlots(slots, {
                'default': undefined,
                'render-label': undefined,
                'render-extra': undefined,
                'render-icon': undefined,
                'render-expand-icon': undefined
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
                options={nOptions.value}
                renderLabel={nRenderLabel.value}
                renderExtra={nRenderExtra.value}
                renderIcon={nRenderIcon.value}
                expandIcon={nRenderExpandIcon.value}
                v-slots={nSlots.value}
            />
        );
    }
});

export default ComponentMenu;
