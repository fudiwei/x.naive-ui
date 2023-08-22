import type { VNode, Slots, PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type { SelectOption as NSelectOption, SelectInst as NSelectInst } from 'naive-ui';
import { defineComponent, ref, computed, getCurrentInstance } from 'vue';
import { NSelect, selectProps as defaultNSelectProps } from 'naive-ui';

import { COMLIB_PREFIX } from '../_utils/const';
import { isVNode, isEmptyVNodes, flattenVNodeChildren } from '../_utils/vue';
import { renderSlot } from '../_utils/render';
import * as logger from '../_utils/log';
import ComponentEmpty from '../empty/Empty';
import ComponentSelectOption from './SelectOption';
import ComponentSelectOptionGroup from './SelectOptionGroup';

export type SelectOption = Omit<NSelectOption, 'render'>;
export type SelectOptions = SelectOption[];

const _props = (() => {
    const {
        options: __1, // dropped
        ...rest
    } = defaultNSelectProps;
    return {
        ...rest,
        options: {
            type: Array as PropType<SelectOption[]>,
            default: () => []
        },
        emptyText: {
            type: String as PropType<string>
        }
    } as const;
})();

export type SelectProps = ExtractPublicPropTypes<typeof _props>;
export type SelectInstance = NSelectInst;

function convertVNodesToOptions(vnodes: VNode[]): NSelectOption[] {
    const temp = [] as NSelectOption[];

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

            if (vnode.type === ComponentSelectOption) {
                // 选项
                const label = renderSlot(vSlots['default']) || vProps.label;
                const value = vProps.value;
                const disabled = !!vProps.disabled || vProps.disabled === '';
                temp.push({
                    ...vProps,
                    label,
                    value,
                    disabled
                } as SelectOption);
            } else if (vnode.type === ComponentSelectOptionGroup) {
                // 选项组
                const key = vKey ?? `__X_SELECT_GROUP_${index}`;
                const label = renderSlot(vSlots['label']) || vProps.label;
                const children = convertVNodesToOptions(vSlots['default']?.() || []);
                temp.push({
                    ...vProps,
                    type: 'group',
                    key,
                    label,
                    children
                } as SelectOption);
            } else {
                logger.warning(
                    'Each child component should be "{0}" or "{1}" in "{2}".',
                    ComponentSelectOption.name,
                    ComponentSelectOptionGroup.name,
                    getCurrentInstance()?.type?.name
                );
            }
        });

    return temp;
}

export default defineComponent({
    name: `${COMLIB_PREFIX}Select`,

    components: {
        NSelect
    },

    props: _props,

    slots: Object as SlotsType<{
        default: NonNullable<unknown>;
        action: NonNullable<unknown>;
        arrow: NonNullable<unknown>;
        empty: NonNullable<unknown>;
    }>,

    setup(props, { attrs, slots, expose }) {
        const nRef = ref<NSelectInst>();

        const nOptions = computed<NSelectOption[]>(() => {
            const vnodes = slots['default']?.({});
            if (isEmptyVNodes(vnodes)) {
                return Array.isArray(props.options) ? (props.options as NSelectOption[]) : [];
            }

            const temp = convertVNodesToOptions(vnodes);
            return temp;
        });

        const nSlots = computed(() => {
            const temp = {
                ...slots,
                empty: slots['empty'] || (() => <ComponentEmpty description={props.emptyText} />),
                default: undefined,
                renderLabel: undefined,
                renderOption: undefined,
                renderTag: undefined
            };
            delete temp['default'];
            delete temp['renderLabel'];
            delete temp['renderOption'];
            delete temp['renderTag'];
            return temp;
        });

        expose({
            focus: () => nRef.value?.focus(),
            blur: () => nRef.value?.blur()
        } as SelectInstance);

        return () => <NSelect ref={nRef} {...attrs} {...props} options={nOptions.value} v-slots={nSlots.value} />;
    }
});
