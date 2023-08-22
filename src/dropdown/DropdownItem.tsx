import type { PropType, SlotsType, ExtractPropTypes } from 'vue';
import { defineComponent } from 'vue';

import { COMLIB_PREFIX } from '../_utils';

const _props = {
    label: {
        type: String as PropType<string>
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    }
} as const;

export type DropdownItemProps = ExtractPropTypes<typeof _props>;

export default defineComponent({
    name: `${COMLIB_PREFIX}DropdownItem`,

    props: _props,

    slots: Object as SlotsType<{
        default: any;
        icon: any;
    }>,

    render() {
        return null;
    }
});
