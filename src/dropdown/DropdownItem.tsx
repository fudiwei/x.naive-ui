/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { ExtractPropTypes, PropType, SlotsType, VNode } from 'vue';
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
    default: () => VNode[];
    icon: () => VNode[];
    submenu: () => VNode[];
  }>,

  render() {
    return null;
  }
});
