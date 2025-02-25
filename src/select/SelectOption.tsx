﻿/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { ExtractPropTypes, PropType, SlotsType, VNode } from 'vue';
import { defineComponent } from 'vue';

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
  name: 'XNSelectOption',

  props: _props,

  slots: Object as SlotsType<{
    default: () => VNode[];
  }>,

  render() {
    return null;
  }
});
