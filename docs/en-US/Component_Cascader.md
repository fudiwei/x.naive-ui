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
        <template #renderLabel="{ option }">
            <div>{{ 'Option' + option.label }}</div>
        </template>
    </x-n-cascader>
</template>
```

---

### API

#### `XNCascader` Props:

| Name      | Type     | Default     | Description                                 | Version |
| :-------- | :------- | :---------- | :------------------------------------------ | :------ |
| emptyText | `string` | `'No Data'` | Description when data of cascader is empty. |         |

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/cascader#Cascader-Props).

#### `XNCascader` Slots:

| Name        | Type                                | Description          | Version |
| :---------- | :---------------------------------- | :------------------- | :------ |
| renderLabel | `{ option, label, value, checked }` | Custom option label. |         |

For other slots, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/cascader#Cascader-Slots)。

#### `XNCascader` Methods:

For other methods, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/cascader#Cascader-Methods).
