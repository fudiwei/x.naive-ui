/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { ExtractPropTypes, PropType, SlotsType, VNode } from 'vue';
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
    default: () => VNode[];
    extra: () => VNode[];
    icon: () => VNode[];
    submenu: () => VNode[];
  }>,

  render() {
    return null;
  }
});
