import type { PropType, ExtractPropTypes } from 'vue';
import { defineComponent } from 'vue';

const _props = {
    show: {
        type: Boolean as PropType<boolean>,
        default: true
    }
} as const;

export type DropdownDividerProps = ExtractPropTypes<typeof _props>;

export default defineComponent({
    name: 'DropdownDivider',

    props: _props,

    render() {
        return null;
    }
});
