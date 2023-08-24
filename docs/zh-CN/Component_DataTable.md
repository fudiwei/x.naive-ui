## 数据表格 XNDataTable

本组件是基于 Naive-UI 的 NDataTable 组件二次封装的。

---

### 使用方式

更多用法请见 Demo。

#### Slots：

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

#### `XNDataTable` Props：

| 名称      | 类型     | 默认值       | 说明                                                      | 版本 |
| :-------- | :------- | :----------- | :-------------------------------------------------------- | :--- |
| emptyText | `string` | `'暂无数据'` | 表格数据为空时的展示文案。当使用 `empty` 插槽时该属性无效 |      |

其他 Props 略，与 `NDataTable` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/data-table#DataTable-Props)。

#### `XNDataTable` Slots：

| 名称         | 参数                          | 说明               | 版本 |
| :----------- | :---------------------------- | :----------------- | :--- |
| renderColumn | `(column)`                    | 自定义列头的内容   |      |
| renderCell   | `(column, rowData, rowIndex)` | 自定义单元格的内容 |      |
| renderExpand | `(rowData, rowIndex)`         | 自定义展开行的内容 |      |

其他 Slots 略，与 `NDataTable` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/data-table#DataTable-Slots)。

#### `XNDataTable` Methods：

其他 Methods 略，与 `NDataTable` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/data-table#DataTable-Methods)。
