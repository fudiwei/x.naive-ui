/* @jsxImportSource vue */
import type { PropType, SlotsType, ExtractPropTypes } from 'vue';
import { defineComponent } from 'vue';

const _props = {
    label: {
        type: String as PropType<string>
    }
} as const;

export type MenuItemGroupProps = ExtractPropTypes<typeof _props>;

export default defineComponent({
    name: 'XNMenuItemGroup',

    props: _props,

    slots: Object as SlotsType<{
        default: NonNullable<unknown>;
        label: NonNullable<unknown>;
    }>,

    render() {
        return null;
    }
});
