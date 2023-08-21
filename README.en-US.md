[![NPM Version](https://img.shields.io/npm/v/@skit/x.naive-ui.svg?sanitize=true)](https://www.npmjs.com/package/@skit/x.naive-ui)
[![NPM Download](https://img.shields.io/npm/dm/@skit/x.naive-ui.svg?sanitize=true)](https://www.npmjs.com/package/@skit/x.naive-ui)
[![License](https://img.shields.io/github/license/fudiwei/x.naive-ui)](https://mit-license.org/)

---

<h1 align="center">X Naive UI</h1>
<p align="center">An extension to the <a href="https://github.com/tusen-ai/naive-ui" target="_blank">Naive-UI</a> component library.</p>
<p align="center">Enables slots for DataTable / Dropdown / Select / Menu.</p>

<p align="center">English | <a href="README.md">中文</a></p>

---

## Introduction

[Naive-UI](https://github.com/tusen-ai/naive-ui) is a popular Vue 3 component library.

Due to the maintainability, the official team does not provide slots or template style APIs for `DataTable`, `Dropdown`, `Select`, `Menu`, _etc._.

Here are some related issues on GitHub:

-   [#205: 增加数据表格展开功能的插槽](https://github.com/tusen-ai/naive-ui/issues/205)
-   [#216: table 使用 template 风格的 API](https://github.com/tusen-ai/naive-ui/issues/216)
-   [#307: NDataTable 和 NTree 组件能够支持使用插槽渲染吗？](https://github.com/tusen-ai/naive-ui/issues/307)
-   [#520: NDropdown support template option](https://github.com/tusen-ai/naive-ui/issues/520)
-   [#1136: 你认同DataTable的设计方案么？](https://github.com/tusen-ai/naive-ui/discussions/1136)
-   [#2054: 是否考虑将组件中的H函数调整为 template 插槽](https://github.com/tusen-ai/naive-ui/issues/2054)
-   [#2252: 建议 DataTable 组件支持自定义列模板](https://github.com/tusen-ai/naive-ui/issues/2252)
-   [#3337: 使用 h 渲染函数的建议](https://github.com/tusen-ai/naive-ui/issues/3337)
-   [#4273: DataTable 增加 template 支持](https://github.com/tusen-ai/naive-ui/issues/4273)
-   [#4663: 希望 Dropdown 可以增加 slots 插槽](https://github.com/tusen-ai/naive-ui/issues/4663)
-   [#5065: n-data-table slot for row or component for column](https://github.com/tusen-ai/naive-ui/issues/5065)
-   [#5134: datatable 请求提供对外的列插槽，或者 render 提供 jsx 的形式，不必使用 h 函数](https://github.com/tusen-ai/naive-ui/issues/5134)

This project is aimed to provide a solution for these issues above.

---

## Features

-   `DataTable`: Slots for **colums**, **cells** and **expandable rows**.
-   `Dropdown`: Slots for **options**.

---

## Getting Started

### 1. Installation

Use npm or other package manager to install:

```shell
> npm install @skit/x.naive-ui
```

### 2. Components Registration

If you use Vue's default template syntax, you need to register components before you can use them. There are three ways to register components:

#### 2.1. Global Registration All Components

```js
import { createApp } from 'vue';
import XNaiveUI from '@skit/naive-ui';

const app = createApp(App);
app.use(XNaiveUI);
```

#### 2.2. Global Registration Some Components

```js
import { createApp } from 'vue';
import { DataTable, Dropdown } from '@skit/naive-ui';

const app = createApp(App);
app.use(DataTable);
app.use(Dropdown);
```

### 2.3. Local Registration

```html
<template>
    <x-n-data-table :columns="columns" :data="data" />
</template>

<script>
    import { DataTable } from '@skit/naive-ui';

    export default {
        components: {
            XNDataTable: DataTable
        }
    };
</script>
```

### 3. Documentation

[Click here to view](./docs/en-US/README.md).

### 4. Demo

You can run the demo to view more details.

```shell
> pnpm install
> pnpm run build
> pnpm run demo
```

---

## Road Map

-   [x] DataTable slots
-   [x] Dropdown slots
-   [ ] DataTable template style API
-   [ ] Dropdown cascaded slots
-   [ ] Select slots
-   [ ] Menu slots
-   [ ] Tree slots
