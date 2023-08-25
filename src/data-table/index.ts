import type { App } from 'vue';

import ComponentDataTable from './DataTable';
import ComponentDataTableColumn from './DataTableColumn';

export type {
    DataTableProps,
    DataTableInstance,
    DataTableRowData,
    DataTableColumn,
    DataTableColumns,
    DataTableRenderColumnParams,
    DataTableRenderCellParams,
    DataTableRenderExpandParams
} from './DataTable';
export type { DataTableColumnProps } from './DataTableColumn';
export const XNDataTable = Object.assign(ComponentDataTable, {
    Column: ComponentDataTableColumn,
    install: (app: App) => {
        app.component(ComponentDataTable.name, ComponentDataTable);
        app.component(ComponentDataTableColumn.name, ComponentDataTableColumn);
    }
});
export const XNDataTableColumn = ComponentDataTableColumn;
export default XNDataTable;
