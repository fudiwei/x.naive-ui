## XNDataTable

This component is based on the `NDataTable` component of Naive-UI.

---

### Usage

For more details, please refer to the Demo.

#### Template Style:

> Notes: Since this is just a syntax sugar for the `columns` property (there will be a certain performance loss), so that you can't compose `XNDataTableColumn` with other elements.

```html
<template>
    <x-n-data-table :data="data">
        <x-n-data-table-column type="selection" />
        <x-n-data-table-column key="no" title="Title">
            <template #renderCell="{ rowIndex }">
                <div>{{ rowIndex + 1 }}</div>
            </template>
        </x-n-data-table-column>
        <x-n-data-table-column key="name" title="Name" />
        <x-n-data-table-column key="age" title="Age" />
        <x-n-data-table-column key="actions" title="Actions">
            <template #renderCell="{ column, rowData, rowIndex }">
                <button>{{ 'Say hello to ' + rowData.name }}</button>
            </template>
        </x-n-data-table-column>
    </x-n-data-table>
</template>
```

#### Scoped Slots：

```html
<script setup>
    const columns = [
        { type: 'selection' },
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

| Name         | Type                                   | Description            | Version |
| :----------- | :------------------------------------- | :--------------------- | :------ |
| renderColumn | `{ column }`                           | Custom column title.   |         |
| renderCell   | `{ column, rowData, rowIndex, value }` | Custom cell content.   |         |
| renderExpand | `{ rowData, rowIndex }`                | Custom expandable row. |         |

For other slots, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/data-table#DataTable-Slots).

#### `XNDataTable` Methods:

For other methods, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/data-table#DataTable-Methods).

#### `XNDataTableColumn` Props:

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/data-table#DataTableColumn-Properties). Note that `children`, `render`, `renderExpand` are not available.

#### `XNDataTableColumn` Slots：

| 名称         | 参数                                   | 说明                   | 版本 |
| :----------- | :------------------------------------- | :--------------------- | :--- |
| title        |                                        | Custom column title.   |      |
| renderCell   | `{ column, rowData, rowIndex, value }` | Custom cell content.   |      |
| renderExpand | `{ rowData, rowIndex }`                | Custom expandable row. |      |
