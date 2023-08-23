## XNDropdown

This component is based on the NDropdown component of Naive-UI.

---

### Usage

Please refer to the Demo.

---

### API

#### `XNDropdown` Props

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/dropdown#Dropdown-Props). Note that `key-field`, `label-field`, `options` are not available.

#### `XNDropdown` Slots

| Name    | Type | Description                                      | Version |
| :------ | :--- | :----------------------------------------------- | :------ |
| default | `()` | The content inside dropdown.                     |         |
| trigger | `()` | The element or component that triggers dropdown. |         |

#### `XNDropdownItem` Props

| Name     | Type      | Default | Description                    | Version |
| :------- | :-------- | :------ | :----------------------------- | :------ |
| label    | `string`  |         | Label.                         |         |
| disabled | `boolean` | `false` | Whether to disable the option. |         |

#### `XNDropdownItem` Slots

| Name    | Type | Description             | Version |
| :------ | :--- | :---------------------- | :------ |
| default | `()` | Custom displayed label. |         |
| icon    | `()` | Custom icon.            |         |
| submenu | `()` | Sub menu.               |         |
