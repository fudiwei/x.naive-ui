## XNSelect

This component is based on the NSelect component of Naive-UI.

---

### Usage

Please refer to the Demo.

---

### API

#### `XNSelect` Props

| Name      | Type     | Default     | Description                               | Version |
| :-------- | :------- | :---------- | :---------------------------------------- | :------ |
| emptyText | `string` | `'No Data'` | Description when data of select is empty. |         |

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/select#Select-Props).

#### `XNSelect` Slots

| Name         | Type                                            | Description                | Version |
| :----------- | :---------------------------------------------- | :------------------------- | :------ |
| default      | `()`                                            | The content inside select. |         |
| renderLabel  | `(option, label, value, selected)`              | Custom option label.       |         |
| renderOption | `(optionVNode, option, label, value, selected)` | Custom option node.        |         |
| renderTag    | `(option, label, value, close)`                 | Custom tag.                |         |

For other slots, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/select#Select-Slots)。

#### `XNSelect` Methods

For other methods, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/select#Select-Methods).

#### `XNSelectOption` Props

| Name     | Type               | Default | Description                    | Version |
| :------- | :----------------- | :------ | :----------------------------- | :------ |
| label    | `string`           |         | Label of the option.           |         |
| value    | `string \| number` |         | Value of the option.           |         |
| disabled | `boolean`          | `false` | Whether to disable the option. |         |

#### `XNSelectOption` Slots

| Name    | Type | Description             | Version |
| :------ | :--- | :---------------------- | :------ |
| default | `()` | Custom displayed label. |         |
| submenu | `()` | Sub menu.               |         |

#### `XNSelectOptionGroup` Props

| Name  | Type     | Default | Description         | Version |
| :---- | :------- | :------ | :------------------ | :------ |
| label | `string` |         | Label of the group. |         |

#### `XNSelectOptionGroup` Slots

| Name    | Type | Description               | Version |
| :------ | :--- | :------------------------ | :------ |
| default | `()` | The content inside group. |         |
| label   | `()` | Custom displayed label.   |         |
