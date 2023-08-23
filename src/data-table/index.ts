import type { App } from 'vue';

import XNDataTable from './DataTable';

export type {
    DataTableProps,
    DataTableRowData,
    DataTableColumn,
    DataTableColumns,
    DataTableRenderColumnParams,
    DataTableRenderCellParams,
    DataTableRenderExpandParams
} from './DataTable';
export { XNDataTable };
export default Object.assign(XNDataTable, {
    install: (app: App) => {
        app.component(XNDataTable.name, XNDataTable);
    }
});
