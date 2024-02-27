import type { PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
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

            const mergedSlots = mergeVSlots(slots, {
                'not-found': slots['empty'],
                'render-label': undefined
            });

            return (
                <NCascader
                    ref={nRef}
                    {...attrs}
                    {...props}
                    renderLabel={mergedRenderLabel.value}
                    v-slots={mergedSlots}
                />
            );
        };
    }
});
