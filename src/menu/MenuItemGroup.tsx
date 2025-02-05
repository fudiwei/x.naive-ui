/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { ExtractPropTypes, PropType, SlotsType, VNode } from 'vue';
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
    default: () => VNode[];
    label: () => VNode[];
  }>,

  render() {
    return null;
  }
});
