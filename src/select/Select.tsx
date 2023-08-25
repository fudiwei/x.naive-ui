import type { VNode, Slots, PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type {
    SelectOption as NSelectOption,
    SelectGroupOption as NSelectGroupOption,
    SelectInst as NSelectInst,
    SelectRenderOption as NSelectRenderOption,
    SelectRenderTag as NSelectRenderTag
} from 'naive-ui';
import { defineComponent, ref, computed, getCurrentInstance } from 'vue';
import { NSelect, selectProps as defaultNSelectProps } from 'naive-ui';

import { isVNode, isEmptyVNode, isEmptyVNodes, flattenVNodeChildren, mergeVSlots } from '../_utils/vue';
import { getSlotRender } from '../_utils/render';
import * as logger from '../_utils/logger';
import { getRestProps } from '../_utils/internal';
import ComponentEmpty from '../empty/Empty';
import ComponentSelectOption from './SelectOption';
import ComponentSelectOptionGroup from './SelectOptionGroup';

export type SelectOption = NSelectOption;
export type SelectOptions = SelectOption[];

const _props = (() => {
    const rest = getRestProps(defaultNSelectProps, 'options');
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
export type SelectRenderLabelParams = {
    option: SelectOption;
    label: string;
    value?: string | number;
    selected?: boolean;
};
export type SelectRenderOptionParams = {
    optionVNode: VNode;
    option: SelectOption;
    label: string;
    value?: string | number;
    selected?: boolean;
};
export type SelectRenderTagParams = {
    option: SelectOption;
    label: string;
    value?: string | number;
    close: () => void;
};

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
                const label = getSlotRender(vSlots['default']) || vProps.label;
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
                const label = getSlotRender(vSlots['label']) || vProps.label;
                const children = convertVNodesToOptions(vSlots['default']?.() || []);
                temp.push({
                    ...vProps,
                    type: 'group',
                    key,
                    label,
                    children
                } as SelectOption);
            } else if (!isEmptyVNode(vnode)) {
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
    name: 'XNSelect',

    components: {
        NSelect,
        XNEmpty: ComponentEmpty
    },

    props: _props,

    slots: Object as SlotsType<{
        default: NonNullable<unknown>;
        action: NonNullable<unknown>;
        arrow: NonNullable<unknown>;
        empty: NonNullable<unknown>;
        renderLabel: SelectRenderLabelParams;
        renderOption: SelectRenderOptionParams;
        renderTag: SelectRenderTagParams;
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
            const vnodes = slots['default']?.({});
            if (isEmptyVNodes(vnodes)) {
                return props.options;
            }

            const temp = convertVNodesToOptions(vnodes);
            return temp;
        });

        const nRenderLabel = computed(() => {
            if (!slots['renderLabel']) {
                return props.renderLabel;
            }

            return (option: NSelectOption, selected: boolean) => {
                return slots.renderLabel!({
                    option: option,
                    label: getNOptionLabel(option),
                    value: getNOptionValue(option),
                    selected: selected
                });
            };
        });

        const nRenderOption = computed(() => {
            if (!slots['renderOption']) {
                return props.renderOption;
            }

            return ({ node, option, selected }: Parameters<NSelectRenderOption>[0]) => {
                return slots.renderOption!({
                    optionVNode: node,
                    option: option as NSelectOption,
                    label: getNOptionLabel(option as NSelectOption),
                    value: getNOptionValue(option as NSelectOption),
                    selected: selected
                });
            };
        });

        const nRenderTag = computed(() => {
            if (!slots['renderTag']) {
                return props.renderTag;
            }

            return ({ option, handleClose }: Parameters<NSelectRenderTag>[0]) => {
                return slots.renderTag!({
                    option: option,
                    label: getNOptionLabel(option),
                    value: getNOptionValue(option),
                    close: handleClose
                });
            };
        });

        const nSlots = computed(() =>
            mergeVSlots(slots, {
                empty: slots['empty'] || (() => <ComponentEmpty description={props.emptyText} />),
                default: undefined,
                renderLabel: undefined,
                renderOption: undefined,
                renderTag: undefined
            })
        );

        const nRef = ref<NSelectInst>();
        expose({
            focus: () => nRef.value?.focus(),
            blur: () => nRef.value?.blur()
        } as SelectInstance);

        return () => (
            <NSelect
                ref={nRef}
                {...attrs}
                {...props}
                renderLabel={nRenderLabel.value}
                renderOption={nRenderOption.value}
                renderTag={nRenderTag.value}
                options={nOptions.value}
                v-slots={nSlots.value}
            />
        );
    }
});
