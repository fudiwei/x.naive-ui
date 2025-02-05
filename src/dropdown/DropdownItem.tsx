/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { PropType, SlotsType, ExtractPropTypes } from 'vue';
import { defineComponent } from 'vue';

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
  name: 'XNDropdownItem',

  props: _props,

  slots: Object as SlotsType<{
    default: NonNullable<unknown>;
    icon: NonNullable<unknown>;
    submenu: NonNullable<unknown>;
  }>,

  render() {
    return null;
  }
});
