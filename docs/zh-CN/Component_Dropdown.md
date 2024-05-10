## 下拉菜单 XNDropdown

本组件是基于 Naive-UI 的 `NDropdown` 组件二次封装的。

---

### 使用方式

更多用法请见 Demo。

#### Template Style：

> 注意：这只是个用于定义 `options` 属性的语法糖（会带来一定的性能损失），所以你不能用其他组件去包裹 `XNDropdownItem` 和 `XNDropdownDivider`。

```html
<template>
    <x-n-dropdown>
        <template #trigger>
            <n-button>Dropdown</n-button>
        </template>

        <x-n-dropdown-item key="1">Menu A</x-n-dropdown-item>
        <x-n-dropdown-item key="2">Menu B</x-n-dropdown-item>
        <x-n-dropdown-divider />
        <x-n-dropdown-item key="3">Menu C</x-n-dropdown-item>
    </x-n-dropdown>
</template>
```

#### Scoped Slots：

```html
<script setup>
    const options = [
        { key: '1', label: 'A' },
        { key: '2', label: 'B' },
        { key: '3', label: 'C' }
    ];
</script>
<template>
    <x-n-dropdown :options="options">
        <template #trigger>
            <n-button>Dropdown</n-button>
        </template>

        <template #render-label="{ option }">
            <div>{{ 'Menu ' + option.label }}</div>
        </template>
    </x-n-dropdown>
</template>
```

---

### API

#### `XNDropdown` Props：

其他 Props 略，与 `NDropdown` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/dropdown#Dropdown-Props)。

#### `XNDropdown` Slots：

| 名称          | 参数                     | 说明                     | 版本  |
| :------------ | :----------------------- | :----------------------- | :---- |
| default       |                          | 弹出的内容               |       |
| render-label  | `{ option, label, key }` | 自定义菜单项的内容       | 0.9.0 |
| render-option | `{ node, option }`       | 自定义菜单项的内容       | 0.9.0 |
| render-icon   | `{ option }`             | 自定义菜单项的图标       | 0.9.0 |
| trigger       |                          | 触发弹出信息的组件或元素 |       |

#### `XNDropdownItem` Props：

| 名称     | 类型      | 默认值  | 说明                                        | 版本 |
| :------- | :-------- | :------ | :------------------------------------------ | :--- |
| label    | `string`  |         | 文本内容。当使用 `default` 插槽时该属性无效 |      |
| disabled | `boolean` | `false` | 是否禁用                                    |      |

#### `XNDropdownItem` Slots：

| 名称    | 参数 | 说明           | 版本  |
| :------ | :--- | :------------- | :---- |
| default |      | 自定义文本内容 |       |
| icon    |      | 自定义图标     |       |
| submenu |      | 子菜单         | 0.3.0 |

#### `XNDropdownItemGroup` Props：

| 名称  | 类型     | 默认值 | 说明                                      | 版本 |
| :---- | :------- | :----- | :---------------------------------------- | :--- |
| label | `string` |        | 文本内容。当使用 `label` 插槽时该属性无效 |      |

#### `XNDropdownItemGroup` Slots：

| 名称    | 参数 | 说明           | 版本 |
| :------ | :--- | :------------- | :--- |
| default |      | 子菜单         |      |
| label   |      | 自定义文本内容 |      |
