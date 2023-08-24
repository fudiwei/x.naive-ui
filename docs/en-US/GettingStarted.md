## Getting Started

---

### Installation

Use pnpm or other package manager to install:

```shell
> pnpm install naive-ui
> pnpm install @skit/x.naive-ui
```

> Notes: `@skit/x.naive-ui` depends on `naive-ui`, which is not included in the bundles. You should install it at first.

---

### Components Registration

If you use Vue's default template syntax, you need to register components before you can use them. There are three ways to register components:

#### 1. Global Registration All Components

```js
import { createApp } from 'vue';
import XNaiveUI from '@skit/naive-ui';

const app = createApp(App);
app.use(XNaiveUI);
```

#### 2. Global Registration Some Components

```js
import { createApp } from 'vue';
import { XNDataTable } from '@skit/naive-ui';

const app = createApp(App);
app.use(XNDataTable);
```

#### 3. Local Registration

```html
<template>
    <x-n-data-table :columns="columns" :data="data" />
</template>

<script>
    import { XNDataTable } from '@skit/naive-ui';

    export default {
        components: {
            XNDataTable
        }
    };
</script>
```
