/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { PropType, SlotsType, ExtractPropTypes } from 'vue';
import { defineComponent } from 'vue';

const _props = {
    label: {
        type: String as PropType<string>
    }
} as const;

export type DropdownItemGroupProps = ExtractPropTypes<typeof _props>;

export default defineComponent({
    name: 'XNDropdownItemGroup',

    props: _props,

    slots: Object as SlotsType<{
        default: NonNullable<unknown>;
        label: NonNullable<unknown>;
    }>,

    render() {
        return null;
    }
});
