## XNDataTable

This component is based on the `NDataTable` component of Naive-UI.

---

### Usage

For more details, please refer to the Demo.

#### Scoped Slots：

```html
<script setup>
    const columns = [
        { key: 'no', title: 'NO.' },
        { key: 'name', title: 'Name' },
        { key: 'age', title: 'Age' },
        { key: 'actions', title: 'Actions' }
    ];
    const data = [
        { name: 'Athos', age: 20 },
        { name: 'Porthos', age: 19 },
        { name: 'Aramis', age: 18 }
    ];
</script>
<template>
    <x-n-data-table :columns="columns" :data="data">
        <template #renderColumn="{ column }">
            <div>{{ 'Column ' + column.title }}</div>
        </template>
        <template #renderCell="{ column, rowData, rowIndex }">
            <template v-if="column.key === 'no'">
                <div>{{ rowIndex + 1 }}</div>
            </template>
            <template v-else-if="column.key === 'actions'">
                <button>{{ 'Say hello to ' + rowData.name }}</button>
            </template>
        </template>
    </x-n-data-table>
</template>
```

---

### API

#### `XNDataTable` Props:

| Name      | Type     | Default     | Description                              | Version |
| :-------- | :------- | :---------- | :--------------------------------------- | :------ |
| emptyText | `string` | `'No Data'` | Description when data of table is empty. |         |

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/data-table#DataTable-Props).

#### `XNDataTable` Slots:

| Name         | Type                          | Description            | Version |
| :----------- | :---------------------------- | :--------------------- | :------ |
| renderColumn | `(column)`                    | Custom column.         |         |
| renderCell   | `(column, rowData, rowIndex)` | Custom cell.           |         |
| renderExpand | `(rowData, rowIndex)`         | Custom expandable row. |         |

For other slots, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/data-table#DataTable-Slots).

#### `XNDataTable` Methods:

For other methods, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/data-table#DataTable-Methods).
