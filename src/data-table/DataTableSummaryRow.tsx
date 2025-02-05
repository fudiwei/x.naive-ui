/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { SlotsType } from 'vue';
import { defineComponent } from 'vue';

import type { DataTableRenderSummaryParams, DataTableRowData } from './DataTable';

export default (<T extends DataTableRowData = any>() => {
  return defineComponent({
    name: 'XNDataTableSummaryRow',

    slots: Object as SlotsType<{
      default: NonNullable<DataTableRenderSummaryParams<T>>;
    }>,

    render() {
      return null;
    }
  });
})();
