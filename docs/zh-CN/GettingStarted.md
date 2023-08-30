## 快速开始

---

### 安装依赖

使用 pnpm 或其他包管理工具安装依赖：

```shell
> pnpm install naive-ui
> pnpm install @skit/x.naive-ui
```

> 注意：`@skit/x.naive-ui` 依赖于 `naive-ui`，但构建产物中并不包含 `naive-ui`，需要你自行安装。

---

### 组件注册

如果使用 Vue 默认的模板语法，需要注册组件后方可使用，有如下三种方式注册组件：

#### 1. 全局完整注册

```js
import { createApp } from 'vue';
import XNaiveUI from '@skit/naive-ui';

const app = createApp(App);
app.use(XNaiveUI);
```

#### 2. 全局部分注册

```js
import { createApp } from 'vue';
import { XNDataTable } from '@skit/naive-ui';

const app = createApp(App);
app.use(XNDataTable);
```

#### 3. 局部注册

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

### 使用 `unplugin-vue-components` 自动按需加载

如果你在使用 `unplugin-vue-components` 插件，那么可以在 `vite.config.ts` 中配置插件来按需自动加载组件。

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

### Volar 支持

如果你在使用 Volar，那么可以在 `tsconfig.json` 中配置 `compilerOptions.types` 来指定全局组件类型。

```json
{
    "compilerOptions": {
        "types": ["@skit/x.naive-ui/types/volar.d.ts"]
    }
}
```
