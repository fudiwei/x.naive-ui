## 树型选择 XNTreeSelect

本组件是基于 Naive-UI 的 `NTreeSelect` 组件二次封装的。

---

### 使用方式

更多用法请见 Demo。

#### Scoped Slots：

```html
<script setup>
    const options = [
        {
            key: 1,
            label: '1',
            children: [
                { key: 11, label: '1-1' },
                { key: 12, label: '1-2' }
            ]
        },
        { key: 2, label: '2' },
        { key: 3, label: '3' }
    ];
</script>
<template>
    <x-n-tree-select :options="options">
        <template #render-label="{ option }">
            <div>{{ 'Option ' + option.label }}</div>
        </template>
    </x-n-tree-select>
</template>
```

---

### API

#### `XNTreeSelect` Props：

| 名称       | 类型     | 默认值       | 说明                                                      | 版本 |
| :--------- | :------- | :----------- | :-------------------------------------------------------- | :--- |
| empty-text | `string` | `'暂无数据'` | 选项数据为空时的展示文案。当使用 `empty` 插槽时该属性无效 |      |

其他 Props 略，与 `NTreeSelect` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/tree-select#TreeSelect-Props)。

#### `XNTreeSelect` Slots：

| 名称                 | 参数                                        | 说明                 | 版本 |
| :------------------- | :------------------------------------------ | :------------------- | :--- |
| render-label         | `{ option, label, key, checked, selected }` | 自定义节点的内容     |      |
| render-prefix        | `{ option, checked, selected }`             | 自定义节点的前缀     |      |
| render-suffix        | `{ option, checked, selected }`             | 自定义节点的后缀     |      |
| render-switcher-icon | `{ expanded, selected }`                    | 自定义节点的开关图标 |      |
| render-tag           | `{ option, label, key, close }`             | 自定义标签的内容     |      |

其他 Slots 略，与 `NTreeSelect` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/tree-select#TreeSelect-Slots)。

#### `XNTreeSelect` Methods：

其他 Methods 略，与 `NTreeSelect` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/tree-select#TreeSelect-Methods)。
