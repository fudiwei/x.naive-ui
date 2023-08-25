## XNTree

This component is based on the `XNTree` component of Naive-UI.

---

### Usage

For more details, please refer to the Demo.

#### Scoped Slots：

```html
<script setup>
    const data = [
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
    <x-n-tree :data="data">
        <template #renderLabel="{ option }">
            <div>{{ 'Option ' + option.label }}</div>
        </template>
    </x-n-tree>
</template>
```

---

### API

#### `XNTree` Props:

| Name      | Type     | Default     | Description                               | Version |
| :-------- | :------- | :---------- | :---------------------------------------- | :------ |
| emptyText | `string` | `'No Data'` | Description when data of select is empty. |         |

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/tree#Tree-Props).

#### `XNTree` Slots:

| Name               | Type                                      | Description                  | Version |
| :----------------- | :---------------------------------------- | :--------------------------- | :------ |
| renderLabel        | `(option, label, key, checked, selected)` | Custom option label.         |         |
| renderPrefix       | `(option, checked, selected)`             | Custom option prefix.        |         |
| renderSuffix       | `(option, checked, selected)`             | Custom option suffix.        |         |
| renderSwitcherIcon | `(expanded, selected)`                    | Custom option switcher icon. |         |

For other slots, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/tree#Tree-Slots)。

#### `XNTree` Methods:

For other methods, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/tree#Tree-Methods).
