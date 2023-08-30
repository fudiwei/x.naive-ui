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

---

### Use `unplugin-vue-components`

If you are using `unplugin-vue-components`, you can automatically import components on demand by configuring plugins in `vite.config.ts`.

```js
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import unpluginVueComponents from 'unplugin-vue-components/vite';
import { XNaiveUIResolver } from '@skit/x.naive-ui/unplugin';

export default defineConfig({
    plugins: [
        vue(),
        unpluginVueComponents({
            resolvers: [XNaiveUIResolver()]
        })
    ]
});
```

---

### Volar Support

If you are using Volar, you can specify global component types by configuring `compilerOptions.types` in `tsconfig.json`.

```json
{
    "compilerOptions": {
        "types": ["@skit/x.naive-ui/types/volar.d.ts"]
    }
}
```
