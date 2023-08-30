## 级联选择 XNCascader

本组件是基于 Naive-UI 的 `NCascader` 组件二次封装的。

---

### 使用方式

更多用法请见 Demo。

#### Scoped Slots：

```html
<script setup>
    const options = [
        {
            value: 1,
            label: '1',
            children: [
                { value: 11, label: '1-1' },
                { value: 12, label: '1-2' }
            ]
        },
        { value: 2, label: '2' },
        { value: 3, label: '3' }
    ];
</script>
<template>
    <x-n-cascader :options="options">
        <template #render-label="{ option }">
            <div>{{ 'Option' + option.label }}</div>
        </template>
    </x-n-cascader>
</template>
```

---

### API

#### `XNCascader` Props：

其他 Props 略，与 `NCascader` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/cascader#Cascader-Props)。

#### `XNCascader` Slots：

| 名称         | 参数                                | 说明             | 版本 |
| :----------- | :---------------------------------- | :--------------- | :--- |
| render-label | `{ option, label, value, checked }` | 自定义选项的内容 |      |

其他 Slots 略，与 `NCascader` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/dropdown#Cascader-Slots)。

#### `XNCascader` Methods：

其他 Methods 略，与 `NCascader` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/cascader#Cascader-Methods)。
