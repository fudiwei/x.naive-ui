﻿/* @jsxImportSource vue */
import type { VNode, PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type { CascaderOption as NCascaderOption, CascaderInst as NCascaderInst } from 'naive-ui';
import { defineComponent, ref, computed } from 'vue';
import { NCascader, cascaderProps as defaultNCascaderProps } from 'naive-ui';

import { getVSlot, mergeVSlots } from '../_utils/v-slot';
import { objectOmitter } from '../_utils/internal';

export type CascaderOption = {
    children?: CascaderOption[];
} & Partial<Omit<NCascaderOption, 'children'>>;
export type CascaderOptions = CascaderOption[];

const _props = (() => {
    const restProps = objectOmitter(defaultNCascaderProps, 'options');
    return {
        ...restProps,
        options: {
            type: Array as PropType<CascaderOption[]>,
            default: () => []
        }
    } as const;
})();

export type CascaderProps = ExtractPublicPropTypes<typeof _props>;
export type CascaderInstance = NCascaderInst & {
    $forwardComponent: NCascaderInst;
};
export type CascaderRenderLabelParams = {
    option: CascaderOption;
    label: string;
    value: string | number;
    checked: boolean;
};
export type CascaderRenderPrefixParams = {
    node: VNode | null;
    option: CascaderOption;
    checked: boolean;
};
export type CascaderRenderSuffixParams = {
    node: VNode | null;
    option: CascaderOption;
    checked: boolean;
};

export default defineComponent({
    name: 'XNCascader',

    components: {
        NCascader
    },

    props: _props,

    slots: Object as SlotsType<{
        'action': NonNullable<unknown>;
        'arrow': NonNullable<unknown>;
        'empty': NonNullable<unknown>;
        'render-label': CascaderRenderLabelParams;
        'render-prefix': CascaderRenderPrefixParams;
        'render-suffix': CascaderRenderSuffixParams;
    }>,

    setup(props, { attrs, slots, expose }) {
        function getNOptionLabel(option: NCascaderOption): string {
            return (props.labelField != null ? option[props.labelField] : option.label) as string;
        }

        function getNOptionValue(option: NCascaderOption): string | number {
            return (props.valueField != null ? option[props.valueField] : option.value) as string | number;
        }

        const nRef = ref<NCascaderInst>();
        const nRefExposed: CascaderInstance = {
            blur: (...args) => nRef.value!.blur(...args),
            focus: (...args) => nRef.value!.focus(...args),
            getCheckedData: (...args) => nRef.value!.getCheckedData(...args),
            getIndeterminateData: (...args) => nRef.value!.getIndeterminateData(...args),
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

                return (option: NCascaderOption, checked: boolean) => {
                    return slot({
                        option: option,
                        label: getNOptionLabel(option),
                        value: getNOptionValue(option),
                        checked: checked
                    });
                };
            });

            const mergedRenderPrefix = computed(() => {
                const slot = getVSlot(slots, 'render-prefix');
                if (!slot) {
                    return props.renderPrefix;
                }

                return (info: { node: VNode | null; option: NCascaderOption; checked: boolean }) => {
                    return slot({
                        node: info.node,
                        option: info.option,
                        checked: info.checked
                    });
                };
            });

            const mergedRenderSuffix = computed(() => {
                const slot = getVSlot(slots, 'render-suffix');
                if (!slot) {
                    return props.renderSuffix;
                }

                return (info: { node: VNode | null; option: NCascaderOption; checked: boolean }) => {
                    return slot({
                        node: info.node,
                        option: info.option,
                        checked: info.checked
                    });
                };
            });

            const mergedSlots = mergeVSlots(slots, {
                'not-found': slots['empty'],
                'render-label': undefined,
                'render-prefix': undefined,
                'render-suffix': undefined
            });

            return (
                <NCascader
                    ref={nRef}
                    {...attrs}
                    {...props}
                    renderLabel={mergedRenderLabel.value}
                    renderPrefix={mergedRenderPrefix.value}
                    renderSuffix={mergedRenderSuffix.value}
                    v-slots={mergedSlots}
                />
            );
        };
    }
});
