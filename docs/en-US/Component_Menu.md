## XNMenu

This component is based on the NMenu component of Naive-UI.

---

### Usage

Please refer to the Demo.

---

### API

#### `XNMenu` Props

For other props, please see [Naive-UI documentation](https://www.naiveui.com/en-US/os-theme/components/menu#Menu-Props). Note that `children-field`, `disabled-field`, `expand-icon`, `key-field`, `label-field`, `options`, `render-extra`, `render-icon`, `render-label` are not available.

#### `XNMenu` Slots

| Name    | Type | Description | Version |
| :------ | :--- | :---------- | :------ |
| default | `()` | Menu.       |         |

#### `XNMenuItem` Props

| Name     | Type      | Default | Description                       | Version |
| :------- | :-------- | :------ | :-------------------------------- | :------ |
| label    | `string`  |         | Label.                            |         |
| extra    | `string`  |         | Extra parts.                      |         |
| disabled | `boolean` | `false` | Whether to disable the menu item. |         |

#### `XNMenuItem` Slots

| Name    | Type | Description             | Version |
| :------ | :--- | :---------------------- | :------ |
| default | `()` | Custom displayed label. |         |
| extra   | `()` | Custom extra parts.     |         |
| icon    | `()` | Custom icon.            |         |
| submenu | `()` | Sub menu.               |         |

#### `XNMenuItemGroup` Props

| Name  | Type     | Default | Description | Version |
| :---- | :------- | :------ | :---------- | :------ |
| label | `string` |         | Label.      |         |

#### `XNMenuItemGroup` Slots

| Name    | Type | Description             | Version |
| :------ | :--- | :---------------------- | :------ |
| default | `()` | Sub menu.               |         |
| label   | `()` | Custom displayed label. |         |
