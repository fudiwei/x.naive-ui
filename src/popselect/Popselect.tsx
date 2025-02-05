/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { VNode, Slots, PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type {
    PopselectInst as NPopselectInst,
    SelectOption as NSelectOption,
    SelectGroupOption as NSelectGroupOption
} from 'naive-ui';
import { defineComponent, ref, computed } from 'vue';
import { NPopselect, popselectProps as defaultNPopselectProps } from 'naive-ui';

import { isEmptyVNode, flattenVNodeChildren } from '../_utils/v-node';
import { getVPropAsBoolean, normalizeVProps } from '../_utils/v-prop';
import { getVSlot, resolveVSlot, mergeVSlots } from '../_utils/v-slot';
import { objectOmitter } from '../_utils/internal';
import * as logger from '../_utils/logger';
import ComponentSelectOption from '../select/SelectOption';
import ComponentSelectOptionGroup from '../select/SelectOptionGroup';

export type SelectOption = {
    type?: 'group';
    children?: SelectOption[];
} & Partial<NSelectOption> &
    Partial<Omit<NSelectGroupOption, 'type' | 'children'>>;
export type SelectOptions = SelectOption[];

const _props = (() => {
    const restProps = objectOmitter(defaultNPopselectProps, 'options');
    return {
        ...restProps,
        labelField: {
            type: String
        },
        valueField: {
            type: String
        },
        options: {
            type: Array as PropType<SelectOption[]>,
            default: () => []
        }
    } as const;
})();

export type PopselectProps = ExtractPublicPropTypes<typeof _props>;
export type PopselectInstance = NPopselectInst & {
    getData: () => { options: SelectOptions };
    $forwardComponent: NPopselectInst;
};
export type PopselectRenderLabelParams = {
    option: SelectOption;
    label: string;
    value?: string | number;
};

function convertVNodesToOptions(vnodes: VNode[], depth: number = 1): NSelectOption[] {
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
                key: vKey ?? `__X_SELECT_GROUP_${depth}_${index}`,
                label: resolveVSlot(vSlots['label']) || vProps.label,
                children: convertVNodesToOptions(vSlots['default']?.() || [], depth + 1)
            } as SelectOption);
        } else if (__DEV__ && !isEmptyVNode(vnode)) {
            logger.warning(
                'Each child component in {0} should be {1}.',
                ComponentPopselect.name,
                [ComponentSelectOption.name, ComponentSelectOptionGroup.name].join(', ')
            );
        }
    });

    return temp;
}

const ComponentPopselect = defineComponent({
    name: 'XNPopselect',

    components: {
        NPopselect
    },

    props: _props,

    slots: Object as SlotsType<{
        'default': NonNullable<unknown>;
        'action': NonNullable<unknown>;
        'empty': NonNullable<unknown>;
        'header': NonNullable<unknown>;
        'render-label': PopselectRenderLabelParams;
        'trigger': NonNullable<unknown>;
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
                return (props.options ?? []).map((option) => {
                    if (typeof option === 'string' || typeof option === 'number') {
                        return {
                            label: '' + option,
                            value: option
                        } as NSelectOption;
                    }

                    return {
                        ...option,
                        label: getNOptionLabel(option),
                        value: getNOptionValue(option)
                    } as NSelectOption;
                });
            }

            const temp = convertVNodesToOptions(vnodes);
            return temp;
        });

        const nRef = ref<NPopselectInst>();
        const nRefExposed: PopselectInstance = {
            getData: () => ({ options: [...nOptions.value] }),
            setShow: (...args) => nRef.value!.setShow(...args),
            syncPosition: (...args) => nRef.value!.syncPosition(...args),
            get $forwardComponent() {
                return nRef.value!;
            }
        };
        expose(nRefExposed);

        return () => {
            const mergedRenderLabel = computed(() => {
                const slot = getVSlot(slots, 'render-label');
                if (!slot) {
                    return props.renderLabel;
                }

                return (option: NSelectOption) => {
                    return slot({
                        option: option,
                        label: getNOptionLabel(option),
                        value: getNOptionValue(option)
                    });
                };
            });

            const mergedOptions = computed(() => nOptions.value);

            const mergedSlots = mergeVSlots(slots, {
                'default': slots['trigger'],
                'render-label': undefined,
                'trigger': undefined
            });

            return (
                <NPopselect
                    ref={nRef}
                    {...attrs}
                    {...props}
                    renderLabel={mergedRenderLabel.value}
                    options={mergedOptions.value}
                    v-slots={mergedSlots}
                />
            );
        };
    }
});

export default ComponentPopselect;
