## 选择器 XNSelect

本组件是基于 Naive-UI 的 `NSelect` 组件二次封装的。

---

### 使用方式

更多用法请见 Demo。

#### Template Style：

> 注意：这只是个用于定义 `options` 属性的语法糖（会带来一定的性能损失），所以你不能用其他组件去包裹 `XNSelectOption` 和 `XNSelectOptionGroup`。

```html
<template>
    <x-n-select>
        <x-n-select-option value="1">Option A</x-n-select-option>
        <x-n-select-option value="2">Option B</x-n-select-option>
        <x-n-select-option value="3">Option C</x-n-select-option>
    </x-n-select>
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
    <x-n-select :options="options">
        <template #render-label="{ option }">
            <div>{{ 'Option ' + option.label }}</div>
        </template>
    </x-n-select>
</template>
```

---

### API

#### `XNSelect` Props：

其他 Props 略，与 `NSelect` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/select#Select-Props)。

#### `XNSelect` Slots：

| 名称          | 参数                                 | 说明             | 版本 |
| :------------ | :----------------------------------- | :--------------- | :--- |
| default       |                                      | 弹出的内容       |      |
| render-label  | `{ option, label, value, selected }` | 自定义选项的内容 |      |
| render-option | `{ vnode, option, selected }`        | 自定义选项的内容 |      |
| render-tag    | `{ option, close }`                  | 自定义标签的内容 |      |

其他 Slots 略，与 `NSelect` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/select#Select-Slots)。

#### `XNSelect` Methods：

其他 Methods 略，与 `NSelect` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/select#Select-Methods)。

#### `XNSelectOption` Props：

| 名称     | 类型               | 默认值  | 说明                                          | 版本 |
| :------- | :----------------- | :------ | :-------------------------------------------- | :--- |
| label    | `string`           |         | 选项的文本。当使用 `default` 插槽时该属性无效 |      |
| value    | `string \| number` |         | 选项的值。在所有选项中应该是唯一的            |      |
| disabled | `boolean`          | `false` | 是否禁用                                      |      |

#### `XNSelectOption` Slots：

| 名称    | 参数 | 说明           | 版本 |
| :------ | :--- | :------------- | :--- |
| default |      | 自定义文本内容 |      |

#### `XNSelectOptionGroup` Props：

| 名称  | 类型     | 默认值 | 说明                                        | 版本 |
| :---- | :------- | :----- | :------------------------------------------ | :--- |
| label | `string` |        | 选项的文本。当使用 `label` 插槽时该属性无效 |      |

#### `XNSelectOptionGroup` Slots：

| 名称    | 参数 | 说明                                       | 版本 |
| :------ | :--- | :----------------------------------------- | :--- |
| default |      | 选项组。仅支持 `XNSelectOption` 作为子组件 |      |
| label   |      | 自定义文本内容                             |      |
