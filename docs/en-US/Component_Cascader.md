## XNCascader

This component is based on the `NCascader` component of Naive-UI.

---

### Usage

For more details, please refer to the Demo.

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

#### `XNCascader` Props:

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/cascader#Cascader-Props).

#### `XNCascader` Slots:

| Name          | Type                                | Description          | Version |
| :------------ | :---------------------------------- | :------------------- | :------ |
| render-label  | `{ option, label, value, checked }` | Custom option label. | 0.3.0   |
| render-prefix | `{ node, option, checked }`         | Custom option prefix | 0.17.0  |
| render-suffix | `{ node, option, checked }`         | Custom option suffix | 0.17.0  |

For other slots, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/cascader#Cascader-Slots)。

#### `XNCascader` Methods:

For other methods, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/cascader#Cascader-Methods).
