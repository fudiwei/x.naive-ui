import type { PropType, SlotsType, ExtractPropTypes } from 'vue';
import { defineComponent } from 'vue';

import { COMLIB_PREFIX } from '../_utils/const';

const _props = {
    label: {
        type: String as PropType<string>
    }
} as const;

export type SelectOptionGroupProps = ExtractPropTypes<typeof _props>;

export default defineComponent({
    name: `${COMLIB_PREFIX}SelectOptionGroup`,

    props: _props,

    slots: Object as SlotsType<{
        default: NonNullable<unknown>;
        label: NonNullable<unknown>;
    }>,

    render() {
        return null;
    }
});
