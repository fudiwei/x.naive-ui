import type { App } from 'vue';

import ComponentDataTable from './DataTable';
import ComponentDataTableColumn from './DataTableColumn';
import ComponentDataTableSummaryRow from './DataTableSummaryRow';
import ComponentDataTableSummaryCell from './DataTableSummaryCell';

export type {
    DataTableProps,
    DataTableInstance,
    DataTableRowData,
    DataTableColumn,
    DataTableColumns,
    DataTableRenderColumnParams,
    DataTableRenderCellParams,
    DataTableRenderExpandParams,
    DataTableRenderExpandIconParams,
    DataTableRenderFilterParams,
    DataTableRenderFilterIconParams,
    DataTableRenderFilterMenuParams,
    DataTableRenderSorterParams,
    DataTableRenderSorterIconParams,
    DataTableRenderSummaryParams
} from './DataTable';
export type { DataTableColumnProps } from './DataTableColumn';
export type { DataTableSummaryCellProps } from './DataTableSummaryCell';
export const XNDataTable = Object.assign(ComponentDataTable, {
    Column: ComponentDataTableColumn,
    SummaryRow: ComponentDataTableSummaryRow,
    SummaryCell: ComponentDataTableSummaryCell,
    install: (app: App) => {
        app.component(ComponentDataTable.name, ComponentDataTable);
        app.component(ComponentDataTableColumn.name, ComponentDataTableColumn);
        app.component(ComponentDataTableSummaryRow.name, ComponentDataTableSummaryRow);
        app.component(ComponentDataTableSummaryCell.name, ComponentDataTableSummaryCell);
    }
});
export const XNDataTableColumn = ComponentDataTableColumn;
export const XNDataTableSummaryRow = ComponentDataTableSummaryRow;
export const XNDataTableSummaryCell = ComponentDataTableSummaryCell;
export default XNDataTable;
