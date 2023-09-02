import type { HTMLAttributes, VNode, Slots, SlotsType, ExtractPublicPropTypes } from 'vue';
import type {
    DropdownOption as NDropdownOption,
    DropdownDividerOption as NDropdownDividerOption,
    DropdownRenderOption as NDropdownRenderOption
} from 'naive-ui';
import { defineComponent, computed } from 'vue';
import { NDropdown, dropdownProps as defaultNDropdownProps } from 'naive-ui';
import type {} from 'treemate';

import { isEmptyVNode, flattenVNodeChildren } from '../_utils/v-node';
import { getVPropAsBoolean, normalizeVProps } from '../_utils/v-prop';
import { resolveVSlot, mergeVSlots } from '../_utils/v-slot';
import { objectOmitter } from '../_utils/internal';
import ComponentDropdownDivider from './DropdownDivider';
import ComponentDropdownItem from './DropdownItem';

const _props = (() => {
    const restProps = objectOmitter(defaultNDropdownProps, 'keyField', 'labelField', 'options');
    return {
        ...restProps
    } as const;
})();

export type DropdownProps = ExtractPublicPropTypes<typeof _props>;

function convertVNodesToOptions(vnodes: VNode[]): NDropdownOption[] {
    const temp = [] as NDropdownOption[];

    vnodes = flattenVNodeChildren(vnodes) as VNode[];
    vnodes.forEach((vnode, index) => {
        const vKey = vnode.key;
        const vProps = vnode.props || {};
        const vSlots = (vnode.children || {}) as Slots;
        const restProps = objectOmitter(vProps, 'type', 'label', 'icon', 'disabled', 'children');

        if (vnode.type === ComponentDropdownItem) {
            // 菜单项
            temp.push({
                ...normalizeVProps(restProps),
                key: vKey ?? `__X_DROPDOWN_ITEM_${index}`,
                props: restProps as HTMLAttributes,
                disabled: getVPropAsBoolean(vProps, 'disabled'),
                label: resolveVSlot(vSlots['default']) || vProps.label,
                icon: resolveVSlot(vSlots['icon']),
                children: vSlots['submenu'] ? convertVNodesToOptions(vSlots['submenu']()) : undefined
            } as NDropdownOption);
        } else if (vnode.type === ComponentDropdownDivider) {
            // 分割线
            temp.push({
                ...normalizeVProps(restProps),
                type: 'divider',
                key: vnode.key ?? `__X_DROPDOWN_DIVIDER_${index}`,
                props: restProps as HTMLAttributes
            } as NDropdownDividerOption);
        } else if (!isEmptyVNode(vnode)) {
            // 纯渲染的内容
            temp.push({
                ...vProps,
                ...normalizeVProps(restProps),
                type: 'render',
                key: vnode.key ?? `__X_DROPDOWN_RENDER_${index}`,
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
        default: NonNullable<unknown>;
        trigger: NonNullable<unknown>;
    }>,

    setup(props, { attrs, slots, expose }) {
        const nOptions = computed<NDropdownOption[]>(() => {
            const vnodes = slots['default']?.({});
            if (isEmptyVNode(vnodes)) {
                return [];
            }

            const temp = convertVNodesToOptions(vnodes);
            return temp;
        });

        const nSlots = computed(() =>
            mergeVSlots(slots, {
                default: slots['trigger'],
                trigger: undefined
            })
        );

        expose({});

        return () => (
            <NDropdown
                {...attrs}
                {...props}
                keyField={undefined}
                labelField={undefined}
                options={nOptions.value}
                v-slots={nSlots.value}
            />
        );
    }
});
