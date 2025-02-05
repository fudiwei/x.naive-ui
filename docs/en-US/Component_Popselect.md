## XNPopselect

This component is based on the `NPopselect` component of Naive-UI.

---

### Usage

For more details, please refer to the Demo.

#### Template Style：

> Notes: Since this is just a syntax sugar for the `options` property (there will be a certain performance loss), so that you can't compose `XNSelectOption` and `XNSelectOptionGroup` with other elements.

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

#### `XNPopselect` Props:

| Name       | Type     | Default   | Description                 | Version |
| :--------- | :------- | :-------- | :-------------------------- | :------ |
| labelField | `string` | `'label'` | Field name of option label. | 0.13.0  |
| valueField | `string` | `'value'` | Field name of option value. | 0.13.0  |

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/popselect#Popselect-Props).

#### `XNPopselect` Slots:

| Name         | Type                       | Description                                     | Version |
| :----------- | :------------------------- | :---------------------------------------------- | :------ |
| default      |                            | The content inside select.                      | 0.13.0  |
| render-label | `{ option, label, value }` | Custom option label.                            | 0.13.0  |
| trigger      |                            | The element or component that triggers popover. | 0.13.0  |

For other slots, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/popselect#Popselect-Slots)。

#### `XNPopselect` Methods:

For other methods, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/popselect#Popselect-Methods).
