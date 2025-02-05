# CHANGELOG

---

## 0.19.0 (2025-02-05)

### Features

- 适配 Naive-UI `v2.41.0`。

### Fixes

- 修复 `x-n-data-table`、`x-n-menu` 等组件在定义子项包含值为 `null` 或 `undefined` 的 `children` 属性时，渲染结果不符合预期的问题。关闭 [#11](https://github.com/fudiwei/x.naive-ui/issues/11)。

## 0.18.0 (2024-09-30)

### Features

- 适配 Naive-UI `v2.40.1`。

### Fixes

- 修复 `x-n-dropdown`、`x-n-menu`、`x-n-popselect`、`x-n-select` 等组件使用模板定义选项时，当存在嵌套子选项时潜在的唯一标识冲突问题。

## 0.17.1 (2024-05-13)

### Fixes

- 修复 `x-n-data-table` 组件使用模板定义列时不能正确渲染的问题。关闭 [#9](https://github.com/fudiwei/x.naive-ui/issues/9)。

## 0.17.0 (2024-05-08)

### Features

- 适配 Naive-UI `v2.38.2`。

### Fixes

- 修复 `x-n-data-table` 组件中使用作用域插槽自定义渲染列时，可能会覆盖原始的列属性问题。关闭 [#8](https://github.com/fudiwei/x.naive-ui/issues/8)。

---

## 0.16.1 (2024-02-27)

### Fixes

- 修复 JSX 命名空间冲突。

---

## 0.16.0 (2024-02-27)

### Features

- 适配 Naive-UI `v2.38.1`。
- 新增 `x-n-button` 组件。

---

## 0.15.0 (2024-01-10)

### Features

- 适配 Naive-UI `v2.37.3`。
- `x-n-popselect` 新增 `getData` 方法。
- 为每个扩展组件对外暴露 `$forwarComponent`，可直接操作被封装的原 Naive-UI 组件。

---

## 0.14.0 (2023-12-20)

### Features

- 适配 Naive-UI `v2.36.0`。
- `x-n-data-table` 新增 `render-expand-icon` 插槽。

---

## 0.13.0 (2023-12-01)

### Features

- 新增 `x-n-popselect` 组件。

---

## 0.12.0 (2023-11-08)

### Features

- `x-n-select` 新增 `getData` 方法。

---

## 0.11.0 (2023-10-13)

### Fixes

- 修复 TypeScript 无法正确识别类型声明的问题。关闭 [#1](https://github.com/fudiwei/x.naive-ui/issues/1)。

---

## 0.10.0 (2023-10-08)

### Features

- 适配 Naive-UI `v2.35.0`。

### Fixes

- 修复部分场景下无法正确处理空白插槽的问题。

---

## 0.9.0 (2023-09-02)

### Features

- `x-n-dropdown` 新增 `render-label`、`render-option`、`render-icon` 插槽。
- `x-n-dropdown` 支持在无图标时缩进菜单。
- `x-n-dropdown-item` 支持通过 `v-show` 指令控制显示或隐藏。
- `x-n-menu` 新增 `render-label`、`render-extra`、`render-icon`、`render-expand-icon` 插槽。
- `x-n-menu` 支持菜单分组。
- `x-n-menu` 支持在无图标时缩进菜单。
- `x-n-menu-item` 支持通过 `v-show` 指令控制显示或隐藏。

---

## 0.8.1 (2023-08-30)

### Deprecated

- `x-n-cascader` 移除 `empty-text` 属性。
- `x-n-data-table` 移除 `empty-text` 属性。
- `x-n-select` 移除 `empty-text` 属性。
- `x-n-tree` 移除 `empty-text` 属性。
- `x-n-tree-select` 移除 `empty-text` 属性。

---

## 0.8.0 (2023-08-30)

### Features

- 新增 `unplugin-vue-component` 解析器，支持自动按需加载。

### Deprecated

- `x-n-data-table` 默认不再内置 `x-n-empty` 组件。

---

## 0.7.0 (2023-08-28)

### Features

- `x-n-dropdown` 支持模板式写法。
- `x-n-menu` 支持模板式写法。
- `x-n-select` 支持模板式写法。

---

## 0.6.0 (2023-08-27)

### Features

- `x-n-data-table` 支持总结栏。
- `x-n-data-table` 新增 `render-filter`、`render-filter-icon`、`render-filter-menu`、`render-sorter`、`render-sorter-icon` 插槽。

### Fixes

- 修复作用域插槽式写法中驼峰式的属性不能被正确渲染的问题。
- 修复 `volar.d.ts` 定义。

---

## 0.5.0 (2023-08-25)

### Features

- 新增 `x-n-tree` 组件。
- 新增 `x-n-tree-select` 组件。
- `x-n-data-table` 支持表头分组。
- `x-n-data-table` 支持模板式写法。

### Fixes

- 修复部分场景下作用域插槽式写法不能正确渲染的问题。

### Deprecated

- 废弃 `x-n-empty` 组件。

---

## 0.4.2 (2023-08-24)

### Fixes

- 修复 `x-n-menu` 未对外暴露组件方法的问题。

---

## 0.4.1 (2023-08-23)

### Chores

- 移除对 `vue`、`naive-ui` 的直接依赖，改为对等依赖。

---

## 0.4.0 (2023-08-23)

### Features

- 新增 `x-n-menu` 组件。

### Fixes

- 修复 `volar.d.ts` 定义。

---

## 0.3.0 (2023-08-23)

### Features

- 新增 `x-n-cascader` 组件。
- `x-n-dropdown` 支持多级菜单。

### Fixes

- 修复 `volar.d.ts` 定义。

---

## 0.2.0 (2023-08-23)

### Features

- 新增 `x-n-select` 组件。
- `x-n-data-table` 对外暴露组件方法。
- 规范化导出的 ESM 模块命名。

### Fixes

- 修复 `x-n-dropdown-item` 在 `v-for` 指令中不渲染的问题。

---

## 0.1.1 (2023-08-21)

### Fixes

- 修复 `x-n-dropdown-item` 和 `x-n-dropdown-divider` 在设置 `show` 属性后不显示的问题。

---

## 0.1.0 (2023-08-21)

### Features

- 预发布。
