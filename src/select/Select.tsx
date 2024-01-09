import type { VNode, Slots, PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type {
    SelectOption as NSelectOption,
    SelectGroupOption as NSelectGroupOption,
    SelectInst as NSelectInst,
    SelectRenderOption as NSelectRenderOption,
    SelectRenderTag as NSelectRenderTag
} from 'naive-ui';
import { defineComponent, ref, computed } from 'vue';
import { NSelect, selectProps as defaultNSelectProps } from 'naive-ui';

import { isEmptyVNode, flattenVNodeChildren } from '../_utils/v-node';
import { getVPropAsBoolean, normalizeVProps } from '../_utils/v-prop';
import { getVSlot, resolveVSlot, mergeVSlots } from '../_utils/v-slot';
import { objectOmitter } from '../_utils/internal';
import * as logger from '../_utils/logger';
import ComponentSelectOption from './SelectOption';
import ComponentSelectOptionGroup from './SelectOptionGroup';

export type SelectOption = {
    type?: 'group';
    children?: SelectOption[];
} & Partial<NSelectOption> &
    Partial<Omit<NSelectGroupOption, 'type' | 'children'>>;
export type SelectOptions = SelectOption[];

const _props = (() => {
    const restProps = objectOmitter(defaultNSelectProps, 'options');
    return {
        ...restProps,
        options: {
            type: Array as PropType<SelectOption[]>,
            default: () => []
        }
    } as const;
})();

export type SelectProps = ExtractPublicPropTypes<typeof _props>;
export type SelectInstance = Pick<NSelectInst, 'blur' | 'blurInput' | 'focus' | 'focusInput'> & {
    getData: () => { options: SelectOptions };
};
export type SelectRenderLabelParams = {
    option: SelectOption;
    label: string;
    value?: string | number;
    selected?: boolean;
};
export type SelectRenderOptionParams = {
    vnode: VNode;
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
        const restProps = objectOmitter(vProps, 'type', 'label', 'disabled', 'children');

        if (vnode.type === ComponentSelectOption) {
            // 选项
            temp.push({
                ...normalizeVProps(restProps),
                label: resolveVSlot(vSlots['default']) || vProps.label,
                value: vProps.value,
                disabled: getVPropAsBoolean(vProps, 'disabled')
            } as SelectOption);
        } else if (vnode.type === ComponentSelectOptionGroup) {
            // 选项组
            temp.push({
                ...normalizeVProps(restProps),
                type: 'group',
                key: vKey ?? `__X_SELECT_GROUP_${index}`,
                label: resolveVSlot(vSlots['label']) || vProps.label,
                children: convertVNodesToOptions(vSlots['default']?.() || [])
            } as SelectOption);
        } else if (__DEV__ && !isEmptyVNode(vnode)) {
            logger.warning(
                'Each child component in {0} should be {1}.',
                ComponentSelect.name,
                [ComponentSelectOption.name, ComponentSelectOptionGroup.name].join(', ')
            );
        }
    });

    return temp;
}

const ComponentSelect = defineComponent({
    name: 'XNSelect',

    components: {
        NSelect
    },

    props: _props,

    slots: Object as SlotsType<{
        'default': NonNullable<unknown>;
        'action': NonNullable<unknown>;
        'arrow': NonNullable<unknown>;
        'empty': NonNullable<unknown>;
        'header': NonNullable<unknown>;
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
                return props.options.map((option) => {
                    if (typeof option === 'string' || typeof option === 'number') {
                        return {
                            [props.labelField ?? 'label']: '' + option,
                            [props.valueField ?? 'value']: option
                        };
                    }

                    return option;
                });
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
                    vnode: node,
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
                'default': undefined,
                'render-label': undefined,
                'render-option': undefined,
                'render-tag': undefined
            })
        );

        const nRef = ref<NSelectInst>();
        expose({
            blur: () => nRef.value?.blur(),
            blurInput: () => nRef.value?.blurInput(),
            focus: () => nRef.value?.focus(),
            focusInput: () => nRef.value?.focusInput(),
            getData: () => ({ options: [...nOptions.value] })
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

export default ComponentSelect;
