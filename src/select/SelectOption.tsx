import type { PropType, SlotsType, ExtractPropTypes } from 'vue';
import { defineComponent } from 'vue';

import { COMLIB_PREFIX } from '../_utils/const';

const _props = {
    label: {
        type: String as PropType<string>
    },
    value: {
        type: [String, Number] as PropType<string | number>
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    }
} as const;

export type SelectOptionProps = ExtractPropTypes<typeof _props>;

export default defineComponent({
    name: `${COMLIB_PREFIX}SelectOption`,

    props: _props,

    slots: Object as SlotsType<{
        default: NonNullable<unknown>;
    }>,

    render() {
        return null;
    }
});
