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

import { isEmptyVNode, flattenVNodeChildren } from '../_utils/v-node';
import { getVSlot, getVSlotRender, mergeVSlots } from '../_utils/v-slot';
import { getRestProps } from '../_utils/internal';
import * as logger from '../_utils/logger';
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
    selected?: boolean;
};
export type SelectRenderTagParams = {
    option: SelectOption;
    close: () => void;
};

function convertVNodesToOptions(vnodes: VNode[]): NSelectOption[] {
    const temp = [] as NSelectOption[];

    vnodes = flattenVNodeChildren(vnodes) as VNode[];
    vnodes.forEach((vnode, index) => {
        const vKey = vnode.key;
        const vProps = vnode.props || {};
        const vSlots = (vnode.children || {}) as Slots;

        if (vnode.type === ComponentSelectOption) {
            // 选项
            const label = getVSlotRender(vSlots['default']) || vProps.label;
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
            const label = getVSlotRender(vSlots['label']) || vProps.label;
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
                'Each child component in {0} should be {1}.',
                getCurrentInstance()?.type?.name,
                [ComponentSelectOption.name, ComponentSelectOptionGroup.name].join(', ')
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
        'default': NonNullable<unknown>;
        'action': NonNullable<unknown>;
        'arrow': NonNullable<unknown>;
        'empty': NonNullable<unknown>;
        'render-label': SelectRenderLabelParams;
        'render-option': SelectRenderOptionParams;
        'render-tag': SelectRenderTagParams;
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
            if (isEmptyVNode(vnodes)) {
                return props.options;
            }

            const temp = convertVNodesToOptions(vnodes);
            return temp;
        });

        const nRenderLabel = computed(() => {
            const slot = getVSlot(slots, 'render-label');
            if (!slot) {
                return props.renderLabel;
            }

            return (option: NSelectOption, selected: boolean) => {
                return slot({
                    option: option,
                    label: getNOptionLabel(option),
                    value: getNOptionValue(option),
                    selected: selected
                });
            };
        });

        const nRenderOption = computed(() => {
            const slot = getVSlot(slots, 'render-option');
            if (!slot) {
                return props.renderOption;
            }

            return ({ node, option, selected }: Parameters<NSelectRenderOption>[0]) => {
                return slot({
                    optionVNode: node,
                    option: option as NSelectOption,
                    selected: selected
                });
            };
        });

        const nRenderTag = computed(() => {
            const slot = getVSlot(slots, 'render-tag');
            if (!slot) {
                return props.renderTag;
            }

            return ({ option, handleClose }: Parameters<NSelectRenderTag>[0]) => {
                return slot({
                    option: option,
                    close: handleClose
                });
            };
        });

        const nSlots = computed(() =>
            mergeVSlots(slots, {
                'empty': slots['empty'] || (() => <ComponentEmpty description={props.emptyText} />),
                'default': undefined,
                'render-label': undefined,
                'render-option': undefined,
                'render-tag': undefined
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
