import type { App } from 'vue';

import DataTable from './DataTable';

export type {
    DataTableProps,
    DataTableRowData,
    DataTableColumn,
    DataTableColumns,
    DataTableRenderColumnParams,
    DataTableRenderCellParams,
    DataTableRenderExpandParams
} from './DataTable';
export { DataTable };
export default Object.assign(DataTable, {
    install: (app: App) => {
        app.component(DataTable.name, DataTable);
    }
});
