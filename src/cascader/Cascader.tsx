import type { PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type { CascaderOption as NCascaderOption, CascaderInst as NCascaderInst } from 'naive-ui';
import { defineComponent, ref, computed } from 'vue';
import { NCascader, cascaderProps as defaultNCascaderProps } from 'naive-ui';

import { getVSlot, mergeVSlots } from '../_utils/v-slot';
import { objectOmitter } from '../_utils/internal';

export type CascaderOption = NCascaderOption;
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
export type CascaderInstance = NCascaderInst;
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

        const nRenderLabel = computed(() => {
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

        const nSlots = computed(() =>
            mergeVSlots(slots, {
                'not-found': slots['empty'],
                'render-label': undefined
            })
        );

        const nRef = ref<NCascaderInst>();
        expose({
            focus: () => nRef.value?.focus(),
            blur: () => nRef.value?.blur(),
            getCheckedData: () => nRef.value?.getCheckedData(),
            getIndeterminateData: () => nRef.value?.getIndeterminateData()
        } as CascaderInstance);

        return () => (
            <NCascader ref={nRef} {...attrs} {...props} renderLabel={nRenderLabel.value} v-slots={nSlots.value} />
        );
    }
});
