import type { SlotsType } from 'vue';
import { defineComponent } from 'vue';

import type { DataTableRowData, DataTableRenderSummaryParams } from './DataTable';

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
