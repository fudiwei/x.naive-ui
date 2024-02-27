## 选择器 XNPopselect

本组件是基于 Naive-UI 的 `NPopselect` 组件二次封装的。

---

### 使用方式

更多用法请见 Demo。

#### Template Style：

> 注意：这只是个用于定义 `options` 属性的语法糖（会带来一定的性能损失），所以你不能用其他组件去包裹 `XNSelectOption` 和 `XNSelectOptionGroup`。

```html
<template>
    <x-n-popselect>
        <template #trigger>
            <n-button>Popselect</n-button>
        </template>

        <x-n-select-option value="1">Option A</x-n-select-option>
        <x-n-select-option value="2">Option B</x-n-select-option>
        <x-n-select-option value="3">Option C</x-n-select-option>
    </x-n-popselect>
</template>
```

#### Scoped Slots：

```html
<script setup>
    const options = [
        { value: '1', label: 'A' },
        { value: '2', label: 'B' },
        { value: '3', label: 'C' }
    ];
</script>
<template>
    <x-n-popselect :options="options">
        <template #trigger>
            <n-button>Popselect</n-button>
        </template>

        <template #render-label="{ option }">
            <div>{{ 'Option ' + option.label }}</div>
        </template>
    </x-n-popselect>
</template>
```

---

### API

#### `XNPopselect` Props：

| 名称       | 类型     | 默认值    | 说明                | 版本   |
| :--------- | :------- | :-------- | :------------------ | :----- |
| labelField | `string` | `'label'` | 选项 label 的字段名 | 0.13.0 |
| valueField | `string` | `'value'` | 选项 value 的字段名 | 0.13.0 |

其他 Props 略，与 `NPopselect` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/popselect#Popselect-Props)。

#### `XNPopselect` Slots：

| 名称         | 参数                       | 说明                     | 版本   |
| :----------- | :------------------------- | :----------------------- | :----- |
| default      |                            | 弹出的内容               | 0.13.0 |
| render-label | `{ option, label, value }` | 自定义选项的内容         | 0.13.0 |
| trigger      |                            | 触发弹出信息的组件或元素 | 0.13.0 |

其他 Slots 略，与 `NPopselect` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/popselect#Popselect-Slots)。

#### `XNPopselect` Methods：

其他 Methods 略，与 `NPopselect` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/popselect#Popselect-Methods)。
