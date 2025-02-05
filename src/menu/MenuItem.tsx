/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { PropType, SlotsType, ExtractPropTypes } from 'vue';
import { defineComponent } from 'vue';

const _props = {
    label: {
        type: String as PropType<string>
    },
    extra: {
        type: String as PropType<string>
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    }
} as const;

export type MenuItemProps = ExtractPropTypes<typeof _props>;

export default defineComponent({
    name: 'XNMenuItem',

    props: _props,

    slots: Object as SlotsType<{
        default: NonNullable<unknown>;
        extra: NonNullable<unknown>;
        icon: NonNullable<unknown>;
        submenu: NonNullable<unknown>;
    }>,

    render() {
        return null;
    }
});
