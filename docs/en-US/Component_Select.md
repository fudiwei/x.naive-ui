## XNSelect

This component is based on the `NSelect` component of Naive-UI.

---

### Usage

For more details, please refer to the Demo.

#### Template Style：

> Notes: Since this is just a syntax sugar for the `options` property (there will be a certain performance loss), so that you can't compose `XNSelectOption` and `XNSelectOptionGroup` with other elements.

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

#### `XNSelect` Props:

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/select#Select-Props).

#### `XNSelect` Slots:

| Name          | Type                                 | Description                | Version |
| :------------ | :----------------------------------- | :------------------------- | :------ |
| default       |                                      | The content inside select. |         |
| render-label  | `{ option, label, value, selected }` | Custom option label.       |         |
| render-option | `{ vnode, option, selected }`        | Custom option node.        |         |
| render-tag    | `{ option, close }`                  | Custom tag.                |         |

For other slots, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/select#Select-Slots)。

#### `XNSelect` Methods:

| Name    | Type                                   | Description | Version |
| :------ | :------------------------------------- | :---------- | :------ |
| getData | () => { options: Array<SelectOption> } | Get data.   |         |

For other methods, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/select#Select-Methods).

#### `XNSelectOption` Props:

| Name     | Type               | Default | Description                    | Version |
| :------- | :----------------- | :------ | :----------------------------- | :------ |
| label    | `string`           |         | Label of the option.           |         |
| value    | `string \| number` |         | Value of the option.           |         |
| disabled | `boolean`          | `false` | Whether to disable the option. |         |

#### `XNSelectOption` Slots:

| Name    | Type | Description             | Version |
| :------ | :--- | :---------------------- | :------ |
| default |      | Custom displayed label. |         |

#### `XNSelectOptionGroup` Props:

| Name  | Type     | Default | Description         | Version |
| :---- | :------- | :------ | :------------------ | :------ |
| label | `string` |         | Label of the group. |         |

#### `XNSelectOptionGroup` Slots:

| Name    | Type | Description               | Version |
| :------ | :--- | :------------------------ | :------ |
| default |      | The content inside group. |         |
| label   |      | Custom displayed label.   |         |
