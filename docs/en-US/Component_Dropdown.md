## XNDropdown

This component is based on the `NDropdown` component of Naive-UI.

---

### Usage

For more details, please refer to the Demo.

#### Template Style:

> Notes: Since this is just a syntax sugar for the `options` property (there will be a certain performance loss), so that you can't compose `XNDropdownItem` and `XNDropdownDivider` with other elements.

```html
<template>
    <x-n-dropdown>
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
        <template #render-label="{ option }">
            <div>{{ 'Menu ' + option.label }}</div>
        </template>
    </x-n-dropdown>
</template>
```

---

### API

#### `XNDropdown` Props:

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/dropdown#Dropdown-Props).

#### `XNDropdown` Slots:

| Name          | Type                     | Description                                      | Version |
| :------------ | :----------------------- | :----------------------------------------------- | :------ |
| default       |                          | The content inside dropdown.                     |         |
| trigger       |                          | The element or component that triggers dropdown. |         |
| render-label  | `{ option, label, key }` | Custom menu item label.                          |         |
| render-option | `{ vnode, option }`      | Custom menu item node.                           |         |
| render-icon   | `{ option }`             | Custom menu item icon.                           |         |

#### `XNDropdownItem` Props:

| Name     | Type      | Default | Description                    | Version |
| :------- | :-------- | :------ | :----------------------------- | :------ |
| label    | `string`  |         | Label.                         |         |
| disabled | `boolean` | `false` | Whether to disable the option. |         |

#### `XNDropdownItem` Slots:

| Name    | Type | Description             | Version |
| :------ | :--- | :---------------------- | :------ |
| default |      | Custom displayed label. |         |
| icon    |      | Custom icon.            |         |
| submenu |      | Sub menu.               |         |

#### `XNDropdownItemGroup` Props:

| Name  | Type     | Default | Description | Version |
| :---- | :------- | :------ | :---------- | :------ |
| label | `string` |         | Label.      |         |

#### `XNDropdownItemGroup` Slots:

| Name    | Type | Description             | Version |
| :------ | :--- | :---------------------- | :------ |
| default |      | Sub menu.               |         |
| label   |      | Custom displayed label. |         |
