## 级联选择 XNCascader

本组件是基于 Naive-UI 的 NCascader 组件二次封装的。

---

### 使用方式

见 Demo。

---

### API

#### `XNCascader` Props

| 名称      | 类型     | 默认值       | 说明                                                      | 版本 |
| :-------- | :------- | :----------- | :-------------------------------------------------------- | :--- |
| emptyText | `string` | `'暂无数据'` | 选项数据为空时的展示文案。当使用 `empty` 插槽时该属性无效 |      |

其他 Props 略，与 `NCascader` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/cascader#Cascader-Props)。

#### `XNCascader` Slots

| 名称        | 参数                              | 说明             | 版本 |
| :---------- | :-------------------------------- | :--------------- | :--- |
| renderLabel | `(option, label, value, checked)` | 自定义选项的内容 |      |

其他 Slots 略，与 `NCascader` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/dropdown#Cascader-Slots)。

#### `XNCascader` Methods

其他 Methods 略，与 `NCascader` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/cascader#Cascader-Methods)。
