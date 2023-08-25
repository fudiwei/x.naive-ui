<h1 align="center">X Naive-UI</h1>

<div align="center">

[![NPM Version](https://img.shields.io/npm/v/@skit/x.naive-ui.svg?sanitize=true)](https://www.npmjs.com/package/@skit/x.naive-ui)
[![NPM Download](https://img.shields.io/npm/dm/@skit/x.naive-ui.svg?sanitize=true)](https://www.npmjs.com/package/@skit/x.naive-ui)
[![License](https://img.shields.io/github/license/fudiwei/x.naive-ui)](https://mit-license.org/)

</div>

<p align="center">An extension to the <a href="https://github.com/tusen-ai/naive-ui" target="_blank">Naive-UI</a> component library.</p>
<p align="center">Enables slots and template style for DataTable / Dropdown / Menu / Select / Tree.</p>

<p align="center">English | <a href="README.md">中文</a></p>

---

## Introduction

[Naive-UI](https://github.com/tusen-ai/naive-ui) is a popular Vue 3 component library.

Due to the maintainability, the official team does not provide slots or template style APIs for `DataTable`, `Dropdown`, `Menu`, `Select`, `Cascader`, `Tree`, `TreeSelect` _etc._.

Here are some related issues on GitHub:

-   [#106: Table support slot for customColumn](https://github.com/tusen-ai/naive-ui/issues/106)
-   [#205: 增加数据表格展开功能的插槽](https://github.com/tusen-ai/naive-ui/issues/205)
-   [#216: table 使用 template 风格的 API](https://github.com/tusen-ai/naive-ui/issues/216)
-   [#307: NDataTable 和 NTree 组件能够支持使用插槽渲染吗？](https://github.com/tusen-ai/naive-ui/issues/307)
-   [#520: NDropdown support template option](https://github.com/tusen-ai/naive-ui/issues/520)
-   [#1136: 你认同 DataTable 的设计方案么？](https://github.com/tusen-ai/naive-ui/discussions/1136)
-   [#2054: 是否考虑将组件中的 h 函数调整为 template 插槽](https://github.com/tusen-ai/naive-ui/issues/2054)
-   [#2252: 建议 DataTable 组件支持自定义列模板](https://github.com/tusen-ai/naive-ui/issues/2252)
-   [#3337: 使用 h 渲染函数的建议](https://github.com/tusen-ai/naive-ui/issues/3337)
-   [#3363: 所有组件的 render 函数都删掉吧](https://github.com/tusen-ai/naive-ui/issues/3363)
-   [#4273: DataTable 增加 template 支持](https://github.com/tusen-ai/naive-ui/issues/4273)
-   [#4663: 希望 Dropdown 可以增加 slots 插槽](https://github.com/tusen-ai/naive-ui/issues/4663)
-   [#5065: n-data-table slot for row or component for column](https://github.com/tusen-ai/naive-ui/issues/5065)
-   [#5134: datatable 请求提供对外的列插槽，或者 render 提供 jsx 的形式，不必使用 h 函数](https://github.com/tusen-ai/naive-ui/issues/5134)

This project is aimed to provide a solution for these issues above.

---

## Features

-   Almost the same API to Naive-UI. You just need to add `x-` before the original component name (example: `<n-data-table>` → `<x-n-data-table>`).
-   `DataTable`: Scoped slots for **colums**, **cells**, **expandable rows**.
-   `Dropdown`: Template style API for **options**.
-   `Menu`: Template style API for **options**.
-   `Select`: Template style API for **options**, **option groups**.
-   `Select`: Scoped slots for **options**, **tags**.
-   `Cascader`: Scoped slots for **options**.
-   `Tree`: Scoped slots for **options**, **switcher icon**.
-   `TreeSelect`: Scoped slots for **options**, **tags**, **switcher icon**.

---

## Documentation

[Click here to view](./docs/en-US/README.md).

---

## Demo

You can run the demo to view more details.

```shell
> pnpm install    # install dependencies
> pnpm run build  # build
> pnpm run demo   # run demo, then visit http://localhost:8888/
```

---

## Road Map

-   [x] `DataTable`: Slots
-   [ ] `DataTable`: Template style API
-   [x] `Dropdown`: Slots
-   [x] `Menu`
-   [x] `Select`
-   [x] `Cascader`
-   [x] `Tree`
-   [x] `TreeSelect`
