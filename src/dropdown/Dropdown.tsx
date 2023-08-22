import type { HTMLAttributes, VNode, SlotsType, ExtractPublicPropTypes } from 'vue';
import type {
    DropdownOption as NDropdownOption,
    DropdownDividerOption as NDropdownDividerOption,
    DropdownRenderOption as NDropdownRenderOption
} from 'naive-ui';
import { defineComponent, computed, h } from 'vue';
import { NDropdown, dropdownProps as defaultNDropdownProps } from 'naive-ui';
import type {} from 'treemate';

import { COMLIB_PREFIX } from '../_utils';
import { isEmptyVNode } from '../_utils';
import ComponentDropdownDivider from './DropdownDivider';
import ComponentDropdownItem from './DropdownItem';

const _props = (() => {
    const {
        options: __1, // dropped
        keyField: __2, // dropped
        labelField: __3, // dropped
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
            const vnodes = slots['default']?.();
            if (!vnodes) {
                return [];
            }

            const temp = [] as NDropdownOption[];
            vnodes.forEach((vnode: VNode) => {
                const vnodeProps = (vnode.props as Record<string, unknown>) || {};
                const vnodeSlots = (vnode.children as Record<string, VNode>) || {};

                if (vnode.type === ComponentDropdownItem) {
                    // 菜单项
                    temp.push({
                        key: vnode.key ?? `_item_${temp.length}`,
                        props: vnodeProps as HTMLAttributes,
                        disabled: !!vnodeProps.disabled || vnodeProps.disabled === '',
                        label: vnodeSlots['default'] ? () => h(vnodeSlots['default']) : vnodeProps.label,
                        icon: vnodeSlots['icon'] ? () => h(vnodeSlots['icon']) : undefined
                    } as NDropdownOption);
                } else if (vnode.type === ComponentDropdownDivider) {
                    // 分割线
                    temp.push({
                        type: 'divider',
                        key: vnode.key ?? `_item_${temp.length}`,
                        props: vnodeProps as HTMLAttributes
                    } as NDropdownDividerOption);
                } else if (!isEmptyVNode(vnode)) {
                    // 纯渲染的内容
                    temp.push({
                        type: 'render',
                        key: vnode.key ?? `_item_${temp.length}`,
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
                options={nOptions.value}
                keyField={undefined}
                labelField={undefined}
                v-slots={nSlots.value}
            />
        );
    }
});
