## 下拉菜单 XNDropdown

本组件是基于 Naive-UI 的 NDropdown 组件二次封装的。

---

### 使用方式

见 Demo。

---

### API

#### `XNDropdown` Props

其他 Props 略，与 `NDropdown` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/dropdown#Dropdown-Props)。注意 `key-field`、`label-field`、`options` 属性不可用。

#### `XNDropdown` Slots

| 名称    | 参数 | 说明                     | 版本 |
| :------ | :--- | :----------------------- | :--- |
| default | `()` | 弹出的内容               |      |
| trigger | `()` | 触发弹出信息的组件或元素 |      |

#### `XNDropdownItem` Props

| 名称     | 类型      | 默认值  | 说明     | 版本 |
| :------- | :-------- | :------ | :------- | :--- |
| label    | `string`  |         | 文本内容 |      |
| disabled | `boolean` | `false` | 是否禁用 |      |

#### `XNDropdownItem` Slots

| 名称    | 参数 | 说明           | 版本 |
| :------ | :--- | :------------- | :--- |
| default | `()` | 自定义文本内容 |      |
| icon    | `()` | 自定义图表     |      |
