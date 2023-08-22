import type { HTMLAttributes, VNode, SlotsType, ExtractPublicPropTypes } from 'vue';
import type {
    DropdownOption as NDropdownOption,
    DropdownDividerOption as NDropdownDividerOption,
    DropdownRenderOption as NDropdownRenderOption
} from 'naive-ui';
import { defineComponent, computed, h } from 'vue';
import { NDropdown, dropdownProps as defaultNDropdownProps } from 'naive-ui';
import type {} from 'treemate';

import { COMLIB_PREFIX } from '../_utils/const';
import { isEmptyVNode, isEmptyVNodes } from '../_utils/vue';
import ComponentDropdownDivider from './DropdownDivider';
import ComponentDropdownItem from './DropdownItem';

const _props = (() => {
    const {
        keyField: __1, // dropped
        labelField: __2, // dropped
        options: __3, // dropped
        ...rest
    } = defaultNDropdownProps;
    return {
        ...rest
    } as const;
})();

export type DropdownProps = ExtractPublicPropTypes<typeof _props>;

export default defineComponent({
    name: `${COMLIB_PREFIX}Dropdown`,

    components: {
        NDropdown
    },

    props: _props,

    slots: Object as SlotsType<{
        default: any;
        trigger: any;
    }>,

    setup(props, { attrs, slots }) {
        const nOptions = computed<NDropdownOption[]>(() => {
            const vnodes: VNode[] = slots['default']?.();
            if (isEmptyVNodes(vnodes)) {
                return [];
            }

            const temp = [] as NDropdownOption[];
            vnodes.forEach((vnode, index) => {
                const vnodeProps = (vnode.props as Record<string, unknown>) || {};
                const vnodeSlots = (vnode.children as Record<string, VNode>) || {};

                if (vnode.type === ComponentDropdownItem) {
                    // 菜单项
                    temp.push({
                        key: vnode.key ?? `__X_DROPDOWN_ITEM_${index}`,
                        props: vnodeProps as HTMLAttributes,
                        disabled: !!vnodeProps.disabled || vnodeProps.disabled === '',
                        label: vnodeSlots['default'] ? () => h(vnodeSlots['default']) : vnodeProps.label,
                        icon: vnodeSlots['icon'] ? () => h(vnodeSlots['icon']) : undefined
                    } as NDropdownOption);
                } else if (vnode.type === ComponentDropdownDivider) {
                    // 分割线
                    temp.push({
                        type: 'divider',
                        key: vnode.key ?? `__X_DROPDOWN_DIVIDER_${index}`,
                        props: vnodeProps as HTMLAttributes
                    } as NDropdownDividerOption);
                } else if (!isEmptyVNode(vnode)) {
                    // 纯渲染的内容
                    temp.push({
                        type: 'render',
                        key: vnode.key ?? `__X_DROPDOWN_RENDER_${index}`,
                        props: vnodeProps as HTMLAttributes,
                        render: () => <>{vnode}</>
                    } as NDropdownRenderOption);
                }
            });

            return temp;
        });

        const nSlots = computed(() => ({
            ...slots,

            default: slots['trigger']
        }));

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
