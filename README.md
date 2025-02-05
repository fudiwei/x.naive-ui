<h1 align="center">X Naive-UI</h1>

<div align="center">

[![NPM Version](https://img.shields.io/npm/v/@skit/x.naive-ui.svg?sanitize=true)](https://www.npmjs.com/package/@skit/x.naive-ui)
[![NPM Download](https://img.shields.io/npm/dm/@skit/x.naive-ui.svg?sanitize=true)](https://www.npmjs.com/package/@skit/x.naive-ui)
[![License](https://img.shields.io/github/license/fudiwei/x.naive-ui)](https://mit-license.org/)

</div>

<p align="center">一个对 <a href="https://github.com/tusen-ai/naive-ui" target="_blank">Naive-UI</a> 组件库的扩展。</p>
<p align="center">使 DataTable / Dropdown / Menu / Select / Tree 等组件支持插槽模板式的写法。</p>

<p align="center">简体中文 | <a href="README.en-US.md">English</a></p>

---

## 简介

[Naive-UI](https://github.com/tusen-ai/naive-ui) 是一个流行的 Vue 3 组件库。

官方团队出于可维护性的考虑，没有提供 `DataTable`、`Dropdown`、`Menu`、`Select`、`Cascader`、`Tree`、`TreeSelect` 等组件的 Slot 插槽或 Template 模板式的写法支持。

以下是 GitHub 上的一些相关 Issues：

- [#106 - Table support slot for customColumn](https://github.com/tusen-ai/naive-ui/issues/106)
- [#205 - 增加数据表格展开功能的插槽](https://github.com/tusen-ai/naive-ui/issues/205)
- [#216 - table 使用 template 风格的 API](https://github.com/tusen-ai/naive-ui/issues/216)
- [#307 - NDataTable 和 NTree 组件能够支持使用插槽渲染吗？](https://github.com/tusen-ai/naive-ui/issues/307)
- [#520 - NDropdown support template option](https://github.com/tusen-ai/naive-ui/issues/520)
- [#1136 - 你认同 DataTable 的设计方案么？](https://github.com/tusen-ai/naive-ui/discussions/1136)
- [#2054 - 是否考虑将组件中的 h 函数调整为 template 插槽](https://github.com/tusen-ai/naive-ui/issues/2054)
- [#2252 - 建议 DataTable 组件支持自定义列模板](https://github.com/tusen-ai/naive-ui/issues/2252)
- [#3337 - 使用 h 渲染函数的建议](https://github.com/tusen-ai/naive-ui/issues/3337)
- [#3363 - 所有组件的 render 函数都删掉吧](https://github.com/tusen-ai/naive-ui/issues/3363)
- [#3477 - 建议添加一个组件：菜单项](https://github.com/tusen-ai/naive-ui/issues/3477)
- [#4273 - DataTable 增加 template 支持](https://github.com/tusen-ai/naive-ui/issues/4273)
- [#4663 - 希望 Dropdown 可以增加 slots 插槽](https://github.com/tusen-ai/naive-ui/issues/4663)
- [#5065 - n-data-table slot for row or component for column](https://github.com/tusen-ai/naive-ui/issues/5065)
- [#5134 - datatable 请求提供对外的列插槽，或者 render 提供 jsx 的形式，不必使用 h 函数](https://github.com/tusen-ai/naive-ui/issues/5134)

本项目旨在为上述问题提供解决方案。

🚀 已加入 [Awesome Naive-UI](https://github.com/naive-ui/awesome-naive) 系列。

---

## 特性

- 与 Naive-UI 组件几乎完全一致的 API（最新适配版本：`v2.40.1`）。只需在原来的组件名前增加 `x-` 前缀（例如：`<n-data-table>` → `<x-n-data-table>`）。
- 配合 [vue-tsc](https://github.com/vuejs/language-tools)，在模板中使用插槽也可享受到 TypeScript 的类型约束。
- `DataTable`：提供了**列头**、**单元格**、**展开行**的作用域插槽写法支持。
- `DataTable`：提供了**列**、**总结栏**的模板写法支持（即在模板中定义 `columns`、`summary` prop）。
- `Dropdown`：提供了**菜单项**、**图标**的作用域插槽写法支持。
- `Dropdown`：提供了**菜单项**、**菜单分组**的模板写法支持（即在模板中定义 `options` prop）。
- `Menu`：提供了**菜单项**的模板写法支持（即在模板中定义 `options` prop）。
- `Menu`：提供了**菜单项**、**图标**的作用域插槽写法支持。
- `Select`：提供了**选项**、**选项组**的模板写法支持（即在模板中定义 `options` prop）。
- `Select`：提供了**选项**、**标签**的作用域插槽写法支持。
- `Popselect`：提供了**选项**、**选项组**的模板写法支持（即在模板中定义 `options` prop）。
- `Popselect`：提供了**选项**的作用域插槽写法支持。
- `Cascader`：提供了**选项**的作用域插槽写法支持。
- `Tree`：提供了**数据项**、**开关图标**的作用域插槽写法支持。
- `TreeSelect`：提供了**数据项**、**标签**、**开关图标**的作用域插槽写法支持。
- `Button`：提供了当仅有图标时显示为正方形的样式效果。

---

## 使用手册

[点此查看](./docs/zh-CN/README.md)。

---

## 示例项目

你可以运行 Demo 来查看更多内容。

```shell
> pnpm install    # 安装依赖
> pnpm run build  # 构建项目
> pnpm run demo   # 运行示例，访问 http://localhost:8888/
```
