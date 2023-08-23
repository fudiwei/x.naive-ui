import type { PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type { CascaderOption as NCascaderOption, CascaderInst as NCascaderInst } from 'naive-ui';
import { defineComponent, ref, computed } from 'vue';
import { NCascader, cascaderProps as defaultNCascaderProps } from 'naive-ui';

import ComponentEmpty from '../empty/Empty';

export type CascaderOption = NCascaderOption;
export type CascaderOptions = CascaderOption[];

const _props = (() => {
    const {
        options: __1, // dropped
        ...rest
    } = defaultNCascaderProps;
    return {
        ...rest,
        options: {
            type: Array as PropType<CascaderOption[]>,
            default: () => []
        },
        emptyText: {
            type: String as PropType<string>
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
        NCascader,
        XNEmpty: ComponentEmpty
    },

    props: _props,

    slots: Object as SlotsType<{
        action: NonNullable<unknown>;
        arrow: NonNullable<unknown>;
        empty: NonNullable<unknown>;
        renderLabel: CascaderRenderLabelParams;
    }>,

    setup(props, { attrs, slots, expose }) {
        function getNOptionLabel(option: NCascaderOption): string {
            return (props.labelField != null ? option[props.labelField] : option.label) as string;
        }

        function getNOptionValue(option: NCascaderOption): string | number {
            return (props.valueField != null ? option[props.valueField] : option.value) as string | number;
        }

        const nRenderLabel = computed(() => {
            if (!slots['renderLabel']) {
                return props.renderLabel;
            }

            return (option: NCascaderOption, checked: boolean) => {
                return slots.renderLabel!({
                    option: option,
                    label: getNOptionLabel(option),
                    value: getNOptionValue(option),
                    checked: checked
                });
            };
        });

        const nSlots = computed(() => {
            const temp = {
                ...slots,
                'empty': slots['empty'] || (() => <ComponentEmpty description={props.emptyText} />),
                'not-found': slots['empty'] || (() => <ComponentEmpty description={props.emptyText} />),
                'notFound': undefined,
                'renderLabel': undefined
            };
            delete temp['notFound'];
            delete temp['renderLabel'];
            return temp;
        });

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
