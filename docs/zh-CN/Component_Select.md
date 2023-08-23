## 选择器 XNSelect

本组件是基于 Naive-UI 的 NSelect 组件二次封装的。

---

### 使用方式

见 Demo。

---

### API

#### `XNSelect` Props

| 名称      | 类型     | 默认值       | 说明                                                      | 版本 |
| :-------- | :------- | :----------- | :-------------------------------------------------------- | :--- |
| emptyText | `string` | `'暂无数据'` | 选项数据为空时的展示文案。当使用 `empty` 插槽时该属性无效 |      |

其他 Props 略，与 `NSelect` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/select#Select-Props)。

#### `XNSelect` Slots

| 名称         | 参数                                            | 说明             | 版本 |
| :----------- | :---------------------------------------------- | :--------------- | :--- |
| default      | `()`                                            | 弹出的内容       |      |
| renderLabel  | `(option, label, value, selected)`              | 自定义选项的内容 |      |
| renderOption | `(optionVNode, option, label, value, selected)` | 自定义选项的内容 |      |
| renderTag    | `(option, label, value, close)`                 | 自定义标签的内容 |      |

其他 Slots 略，与 `NSelect` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/select#Select-Slots)。

#### `XNSelect` Methods

其他 Methods 略，与 `NSelect` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/select#Select-Methods)。

#### `XNSelectOption` Props

| 名称     | 类型               | 默认值  | 说明                                          | 版本 |
| :------- | :----------------- | :------ | :-------------------------------------------- | :--- |
| label    | `string`           |         | 选项的文本。当使用 `default` 插槽时该属性无效 |      |
| value    | `string \| number` |         | 选项的值。在所有选项中应该是唯一的            |      |
| disabled | `boolean`          | `false` | 是否禁用                                      |      |

#### `XNSelectOption` Slots

| 名称    | 参数 | 说明           | 版本 |
| :------ | :--- | :------------- | :--- |
| default | `()` | 自定义文本内容 |      |
| submenu | `()` | 子菜单         |      |

#### `XNSelectOptionGroup` Props

| 名称  | 类型     | 默认值 | 说明                                        | 版本 |
| :---- | :------- | :----- | :------------------------------------------ | :--- |
| label | `string` |        | 选项的文本。当使用 `label` 插槽时该属性无效 |      |

#### `XNSelectOptionGroup` Slots

| 名称    | 参数 | 说明           | 版本 |
| :------ | :--- | :------------- | :--- |
| default | `()` | 选项组         |      |
| label   | `()` | 自定义文本内容 |      |
