## XNDataTable

This component is based on the NDataTable component of Naive-UI.

---

### Usage

Please refer to the Demo.

---

### API

#### `XNDataTable` Props

| Name      | Type     | Default     | Description                              | Version |
| :-------- | :------- | :---------- | :--------------------------------------- | :------ |
| emptyText | `string` | `'No Data'` | Description when data of table is empty. |         |

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/data-table#DataTable-Props).

#### `XNDataTable` Slots

| Name         | Type                          | Description            | Version |
| :----------- | :---------------------------- | :--------------------- | :------ |
| renderColumn | `(column)`                    | Custom column.         |         |
| renderCell   | `(column, rowData, rowIndex)` | Custom cell.           |         |
| renderExpand | `(rowData, rowIndex)`         | Custom expandable row. |         |

For other slots, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/data-table#DataTable-Slots).

#### `XNDataTable` Methods

For other methods, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/data-table#DataTable-Methods).
