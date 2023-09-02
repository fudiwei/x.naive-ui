## 下拉菜单 XNMenu

本组件是基于 Naive-UI 的 `NMenu` 组件二次封装的。

---

### 使用方式

更多用法请见 Demo。

#### Template Style：

> 注意：这只是个用于定义 `options` 属性的语法糖（会带来一定的性能损失），所以你不能用其他组件去包裹 `XNMenuItem`、`XNMenuItemGroup` 和 `XNMenuDivider`。

```html
<template>
    <x-n-menu>
        <x-n-menu-item key="1">Menu A</x-n-menu-item>
        <x-n-menu-item key="1">Menu B</x-n-menu-item>
        <x-n-menu-divider />
        <x-n-menu-item key="3" label="Menu C">
            <template #submenu>
                <x-n-menu-item key="3-1">Menu C1</x-n-menu-item>
                <x-n-menu-item key="3-2">Menu C2</x-n-menu-item>
            </template>
        </x-n-menu-item>
    </x-n-menu>
</template>
```

#### Scoped Slots：

```html
<script setup>
    const options = [
        { key: '1', label: 'A' },
        { key: '2', label: 'B' },
        {
            value: '3',
            label: 'C',
            children: [
                { key: '3-1', label: 'C1' },
                { key: '3-2', label: 'C2' }
            ]
        }
    ];
</script>
<template>
    <x-n-menu :options="options">
        <template #render-label="{ option }">
            <div>{{ 'Menu ' + option.label }}</div>
        </template>
    </x-n-menu>
</template>
```

---

### API

#### `XNMenu` Props：

其他 Props 略，与 `NMenu` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/menu#Menu-Props)。

#### `XNMenu` Slots：

| 名称         | 参数                     | 说明                                                                     | 版本 |
| :----------- | :----------------------- | :----------------------------------------------------------------------- | :--- |
| default      |                          | 菜单。仅支持 `XNMenuItem`、`XNMenuItemGroup`、`XNMenuDivider` 作为子组件 |      |
| render-label | `{ option, label, key }` | 自定义菜单项的内容                                                       |      |
| render-extra | `{ option }`             | 自定义菜单项的额外内容                                                   |      |
| render-icon  | `{ option }`             | 自定义菜单项的图标                                                       |      |

#### `XNMenu` Methods：

其他 Methods 略，与 `NMenu` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/menu#Menu-Methods)。

#### `XNMenuItem` Props：

| 名称     | 类型      | 默认值  | 说明                                        | 版本 |
| :------- | :-------- | :------ | :------------------------------------------ | :--- |
| label    | `string`  |         | 文本内容。当使用 `default` 插槽时该属性无效 |      |
| extra    | `string`  |         | 额外内容。当使用 `extra` 插槽时该属性无效   |      |
| disabled | `boolean` | `false` | 是否禁用                                    |      |

#### `XNMenuItem` Slots：

| 名称    | 参数 | 说明           | 版本 |
| :------ | :--- | :------------- | :--- |
| default |      | 自定义文本内容 |      |
| extra   |      | 自定义额外内容 |      |
| icon    |      | 自定义图标     |      |
| submenu |      | 子菜单         |      |

#### `XNMenuItemGroup` Props：

| 名称  | 类型     | 默认值 | 说明                                      | 版本 |
| :---- | :------- | :----- | :---------------------------------------- | :--- |
| label | `string` |        | 文本内容。当使用 `label` 插槽时该属性无效 |      |

#### `XNMenuItemGroup` Slots：

| 名称    | 参数 | 说明           | 版本 |
| :------ | :--- | :------------- | :--- |
| default |      | 子菜单         |      |
| label   |      | 自定义文本内容 |      |
