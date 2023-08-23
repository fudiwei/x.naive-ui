import type { App } from 'vue';

import ComponentDataTable from './DataTable';

export type {
    DataTableProps,
    DataTableRowData,
    DataTableColumn,
    DataTableColumns,
    DataTableRenderColumnParams,
    DataTableRenderCellParams,
    DataTableRenderExpandParams
} from './DataTable';
export const XNDataTable = Object.assign(ComponentDataTable, {
    install: (app: App) => {
        app.component(ComponentDataTable.name, ComponentDataTable);
    }
});
export default XNDataTable;
