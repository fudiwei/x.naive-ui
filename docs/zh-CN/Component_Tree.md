## 树 XNTree

本组件是基于 Naive-UI 的 `NTree` 组件二次封装的。

---

### 使用方式

更多用法请见 Demo。

#### Scoped Slots：

```html
<script setup>
    const data = [
        {
            key: 1,
            label: '1',
            children: [
                { key: 11, label: '1-1' },
                { key: 12, label: '1-2' }
            ]
        },
        { key: 2, label: '2' },
        { key: 3, label: '3' }
    ];
</script>
<template>
    <x-n-tree :data="data">
        <template #render-label="{ option }">
            <div>{{ 'Option ' + option.label }}</div>
        </template>
    </x-n-tree>
</template>
```

---

### API

#### `XNTree` Props：

其他 Props 略，与 `NTree` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/tree#Tree-Props)。

#### `XNTree` Slots：

| 名称                 | 参数                                        | 说明                 | 版本  |
| :------------------- | :------------------------------------------ | :------------------- | :---- |
| render-label         | `{ option, label, key, checked, selected }` | 自定义节点的内容     | 0.5.0 |
| render-prefix        | `{ option, checked, selected }`             | 自定义节点的前缀     | 0.5.0 |
| render-suffix        | `{ option, checked, selected }`             | 自定义节点的后缀     | 0.5.0 |
| render-switcher-icon | `{ expanded, selected }`                    | 自定义节点的开关图标 | 0.5.0 |

其他 Slots 略，与 `NTree` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/tree#Tree-Slots)。

#### `XNTree` Methods：

其他 Methods 略，与 `NTree` 保持一致，请参考 [Naive-UI 文档](https://www.naiveui.com/zh-CN/os-theme/components/tree#Tree-Methods)。
