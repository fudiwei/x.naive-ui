/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { ExtractPropTypes, PropType, SlotsType, VNode } from 'vue';
import { defineComponent } from 'vue';

const _props = {
  label: {
    type: String as PropType<string>
  }
} as const;

export type SelectOptionGroupProps = ExtractPropTypes<typeof _props>;

export default defineComponent({
  name: 'XNSelectOptionGroup',

  props: _props,

  slots: Object as SlotsType<{
    default: () => VNode[];
    label: () => VNode[];
  }>,

  render() {
    return null;
  }
});
