## XNTreeSelect

This component is based on the `XNTreeSelect` component of Naive-UI.

---

### Usage

For more details, please refer to the Demo.

#### Scoped Slots：

```html
<script setup>
    const options = [
        {
            key: 1,
            label: '1',
            children: [
                { key: 11, label: '1-1' },
                { key: 12, label: '1-2' }
            ]
        },
        { key: 2, label: '2' },
        { key: 3, label: '3' }
    ];
</script>
<template>
    <x-n-tree-select :options="options">
        <template #render-label="{ option }">
            <div>{{ 'Option ' + option.label }}</div>
        </template>
    </x-n-tree-select>
</template>
```

---

### API

#### `XNTreeSelect` Props:

| Name       | Type     | Default     | Description                               | Version |
| :--------- | :------- | :---------- | :---------------------------------------- | :------ |
| empty-text | `string` | `'No Data'` | Description when data of select is empty. |         |

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/tree-select#TreeSelect-Props).

#### `XNTreeSelect` Slots:

| Name                 | Type                                        | Description                  | Version |
| :------------------- | :------------------------------------------ | :--------------------------- | :------ |
| render-label         | `{ option, label, key, checked, selected }` | Custom option label.         |         |
| render-prefix        | `{ option, checked, selected }`             | Custom option prefix.        |         |
| render-suffix        | `{ option, checked, selected }`             | Custom option suffix.        |         |
| render-switcher-icon | `{ expanded, selected }`                    | Custom option switcher icon. |         |
| render-tag           | `{ option, close }`                         | Custom tag.                  |         |

For other slots, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/tree-select#TreeSelect-Slots)。

#### `XNTreeSelect` Methods:

For other methods, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/tree-select#TreeSelect-Methods).
