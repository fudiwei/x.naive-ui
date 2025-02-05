/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { ExtractPropTypes, PropType, SlotsType, VNode } from 'vue';
import { defineComponent } from 'vue';

import type { DataTableRenderSummaryParams, DataTableRowData } from './DataTable';

const _props = {
  rowSpan: {
    type: [String, Number] as PropType<string | number>
  },
  colSpan: {
    type: [String, Number] as PropType<string | number>
  },
  value: {
    type: String as PropType<string>
  }
} as const;

export type DataTableSummaryCellProps = ExtractPropTypes<typeof _props>;

export default (<T extends DataTableRowData = any>() => {
  return defineComponent({
    name: 'XNDataTableSummaryCell',

    props: _props,

    slots: Object as SlotsType<{
      default: (params: DataTableRenderSummaryParams<T>) => VNode[];
    }>,

    render() {
      return null;
    }
  });
})();
