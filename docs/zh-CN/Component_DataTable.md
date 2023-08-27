## 数据表格 XNDataTable

本组件是基于 Naive-UI 的 `NDataTable` 组件二次封装的。

---

### 使用方式

更多用法请见 Demo。

#### Template Style:

> 注意：这只是个用于定义 `columns` 属性的语法糖（会带来一定的性能损失），所以你不能用其他组件去包裹 `XNDataTableColumn`。

```html
<template>
    <x-n-data-table :data="data">
        <x-n-data-table-column type="selection" />
        <x-n-data-table-column key="no" title="NO.">
            <template #render-cell="{ rowIndex }">
                <div>{{ rowIndex + 1 }}</div>
            </template>
        </x-n-data-table-column>
        <x-n-data-table-column key="name" title="Name" />
        <x-n-data-table-column key="age" title="Age" />
        <x-n-data-table-column key="actions" title="Actions">
            <template #render-cell="{ column, rowData, rowIndex }">
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
        <template #render-column="{ column }">
            <div>{{ 'Column ' + column.title }}</div>
        </template>
        <template #render-cell="{ column, rowData, rowIndex }">
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

#### `XNDataTable` Props：

| 名称       | 类型     | 默认值       | 说明                                                      | 版本 |
| :--------- | :------- | :----------- | :-------------------------------------------------------- | :--- |
| empty-text | `string` | `'暂无数据'` | 表格数据为空时的展示文案。当使用 `empty` 插槽时该属性无效 |      |

其他 Props 略，与 `NDataTable` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/data-table#DataTable-Props)。

#### `XNDataTable` Slots：

| 名称          | 参数                                   | 说明               | 版本 |
| :------------ | :------------------------------------- | :----------------- | :--- |
| default       |                                        | 表格的内容         |      |
| summary       |                                        | 总结栏行           |      |
| render-column | `{ column }`                           | 自定义列头的内容   |      |
| render-cell   | `{ column, rowData, rowIndex, value }` | 自定义单元格的内容 |      |
| render-expand | `{ rowData, rowIndex }`                | 自定义展开行的内容 |      |

其他 Slots 略，与 `NDataTable` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/data-table#DataTable-Slots)。

#### `XNDataTable` Methods：

其他 Methods 略，与 `NDataTable` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/data-table#DataTable-Methods)。

#### `XNDataTableColumn` Props：

其他 Props 略，与 `NDataTableColumn` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/data-table#DataTableColumn-Properties)。注意 `children`、`render`、`render-expand` 属性不可用。

#### `XNDataTableColumn` Slots：

| 名称          | 参数                           | 说明               | 版本 |
| :------------ | :----------------------------- | :----------------- | :--- |
| title         |                                | 自定义列头的内容   |      |
| render-cell   | `{ rowData, rowIndex, value }` | 自定义单元格的内容 |      |
| render-expand | `{ rowData, rowIndex }`        | 自定义展开行的内容 |      |

#### `XNDataTableSummaryRow` Slots：

| 名称    | 参数           | 说明         | 版本 |
| :------ | :------------- | :----------- | :--- |
| default | `{ pageData }` | 总结栏单元格 |      |

#### `XNDataTableSummaryCell` Props：

| 名称     | 类型              | 默认值 | 说明                                    | 版本 |
| :------- | :---------------- | :----- | :-------------------------------------- | :--- |
| key      | `string \|number` |        | 与列属性对应的唯一 Key 值               |      |
| row-span | `number`          |        | 行合并                                  |      |
| col-span | `number`          |        | 列合并                                  |      |
| value    | `string`          |        | 内容。当使用 `default` 插槽时该属性无效 |      |

#### `XNDataTableSummaryCell` Slots：

| 名称    | 参数           | 说明             | 版本 |
| :------ | :------------- | :--------------- | :--- |
| default | `{ pageData }` | 自定义总结栏内容 |      |
