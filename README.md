[![NPM Version](https://img.shields.io/npm/v/@skit/x.naive-ui.svg?sanitize=true)](https://www.npmjs.com/package/@skit/x.naive-ui)
[![NPM Download](https://img.shields.io/npm/dm/@skit/x.naive-ui.svg?sanitize=true)](https://www.npmjs.com/package/@skit/x.naive-ui)
[![License](https://img.shields.io/github/license/fudiwei/skit-x.naive-ui.js)](https://mit-license.org/)

---

<h1 align="center">X Naive UI</h1>
<p align="center">一个对 <a href="https://github.com/tusen-ai/naive-ui" target="_blank">Naive-UI</a> 组件库的扩展。</p>
<p align="center">使 DataTable / Dropdown / Select / Menu 等组件支持插槽式的写法。</p>

<p align="center"><a href="README.en-US.md">English</a> | 中文</p>

---

## 简介

[Naive-UI](https://github.com/tusen-ai/naive-ui) 是一个流行的 Vue 3 组件库。

官方团队出于可维护性的考虑，没有提供 `DataTable`、`Dropdown`、`Select`、`Menu` 等组件的插槽或 template 式的写法支持。

以下是一些 GitHub 上的一些相关 Issues：

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

本项目旨在为上述问题提供解决方案。

---

## 特性

-   `DataTable`：提供了**列头**、**单元格**、**展开行**的插槽式写法支持。
-   `Dropdown`：提供了**下拉菜单项**的插槽式写法支持。

---

## 快速开始

### 1. 安装依赖

使用 npm 或其他包管理工具安装依赖：

```shell
> npm install @skit/x.naive-ui
```

### 2. 组件注册

如果使用 Vue 默认的模板语法，需要注册组件后方可使用，有如下三种方式注册组件：

#### 2.1. 全局完整注册

```js
import { createApp } from 'vue';
import XNaiveUI from '@skit/naive-ui';

const app = createApp(App);
app.use(XNaiveUI);
```

#### 2.2. 全局部分注册

```js
import { createApp } from 'vue';
import { DataTable, Dropdown } from '@skit/naive-ui';

const app = createApp(App);
app.use(DataTable);
app.use(Dropdown);
```

### 2.3. 局部注册

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

[点此查看](./docs/zh-CN/README.md)。

### 4. Demo 示例项目

你可以运行 Demo 示例项目来查看更多内容。

```shell
> pnpm install
> pnpm run build
> pnpm run demo
```

---

## 迭代计划

-   [x] DataTable slots
-   [x] Dropdown slots
-   [ ] DataTable template style API
-   [ ] Dropdown cascaded slots
-   [ ] Select slots
-   [ ] Menu slots
-   [ ] Tree slots
