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
            key: '3',
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

#### `XNMenu` Props:

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/menu#Menu-Props).

#### `XNMenu` Slots:

| Name               | Type                     | Description                     | Version |
| :----------------- | :----------------------- | :------------------------------ | :------ |
| default            |                          | Menu.                           | 0.4.0   |
| render-label       | `{ option, label, key }` | Custom menu item label.         | 0.9.0   |
| render-expand-icon | `{ option }`             | Custom menu expand icon.        | 0.9.0   |
| render-extra       | `{ option }`             | Custom menu item extra content. | 0.9.0   |
| render-icon        | `{ option }`             | Custom menu item icon.          | 0.9.0   |

#### `XNMenu` Methods:

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/menu#Menu-Methods).

#### `XNMenuItem` Props:

| Name     | Type      | Default | Description                       | Version |
| :------- | :-------- | :------ | :-------------------------------- | :------ |
| label    | `string`  |         | Label.                            | 0.4.0   |
| extra    | `string`  |         | Extra parts.                      | 0.4.0   |
| disabled | `boolean` | `false` | Whether to disable the menu item. | 0.4.0   |

#### `XNMenuItem` Slots:

| Name    | Type | Description             | Version |
| :------ | :--- | :---------------------- | :------ |
| default |      | Custom displayed label. | 0.4.0   |
| extra   |      | Custom extra parts.     | 0.4.0   |
| icon    |      | Custom icon.            | 0.4.0   |
| submenu |      | Sub menu.               | 0.7.0   |

#### `XNMenuItemGroup` Props:

| Name  | Type     | Default | Description | Version |
| :---- | :------- | :------ | :---------- | :------ |
| label | `string` |         | Label.      | 0.9.0   |

#### `XNMenuItemGroup` Slots:

| Name    | Type | Description             | Version |
| :------ | :--- | :---------------------- | :------ |
| default |      | Sub menu.               | 0.9.0   |
| label   |      | Custom displayed label. | 0.9.0   |
