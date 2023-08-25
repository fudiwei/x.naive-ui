## XNMenu

This component is based on the `NMenu` component of Naive-UI.

---

### Usage

For more details, please refer to the Demo.

#### Template Style:

> Notes: Since this is just a syntax sugar for the `options` property (there will be a certain performance loss), so that you can't compose `XNMenuItem`, `XNMenuItemGroup` and `XNMenuDivider` with other elements.

```html
<template>
    <x-n-menu>
        <x-n-menu-item key="1">Menu 1</x-n-menu-item>
        <x-n-menu-item key="1">Menu 2</x-n-menu-item>
        <x-n-menu-divider />
        <x-n-menu-item key="3" label="Menu 3">
            <template #submenu>
                <x-n-menu-item key="3-1">Sub Menu 1</x-n-menu-item>
                <x-n-menu-item key="3-2">Sub Menu 2</x-n-menu-item>
            </template>
        </x-n-menu-item>
    </x-n-menu>
</template>
```

---

### API

#### `XNMenu` Props:

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/menu#Menu-Props). Note that `children-field`, `disabled-field`, `expand-icon`, `key-field`, `label-field`, `options`, `render-extra`, `render-icon`, `render-label` are not available.

#### `XNMenu` Slots:

| Name    | Type | Description | Version |
| :------ | :--- | :---------- | :------ |
| default | `()` | Menu.       |         |

#### `XNMenu` Methods:

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/menu#Menu-Methods).

#### `XNMenuItem` Props:

| Name     | Type      | Default | Description                       | Version |
| :------- | :-------- | :------ | :-------------------------------- | :------ |
| label    | `string`  |         | Label.                            |         |
| extra    | `string`  |         | Extra parts.                      |         |
| disabled | `boolean` | `false` | Whether to disable the menu item. |         |

#### `XNMenuItem` Slots:

| Name    | Type | Description             | Version |
| :------ | :--- | :---------------------- | :------ |
| default | `()` | Custom displayed label. |         |
| extra   | `()` | Custom extra parts.     |         |
| icon    | `()` | Custom icon.            |         |
| submenu | `()` | Sub menu.               |         |

#### `XNMenuItemGroup` Props:

| Name  | Type     | Default | Description | Version |
| :---- | :------- | :------ | :---------- | :------ |
| label | `string` |         | Label.      |         |

#### `XNMenuItemGroup` Slots:

| Name    | Type | Description             | Version |
| :------ | :--- | :---------------------- | :------ |
| default | `()` | Sub menu.               |         |
| label   | `()` | Custom displayed label. |         |
