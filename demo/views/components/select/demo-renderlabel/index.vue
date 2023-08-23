<script lang="ts" setup>
import DemoCard from '../../_common/demo-card.vue';
import DemoSfc from './demo.vue';
import DemoCodeJs from './code-js.vuecode';
import DemoCodeTs from './code-ts.vuecode';
</script>

<template>
    <DemoCard
        title="Customize Option Rendering / 自定义选项渲染"
        anchor="custom-render-label"
        :js-code="DemoCodeJs"
        :ts-code="DemoCodeTs"
    >
        <template #content>
            <p>
                见 Naive-UI 官方文档示例中「
                <n-a href="//www.naiveui.com/zh-CN/os-theme/components/select#custom-option.vue" target="blank">
                    自定义选项渲染
                </n-a>
                」。以插槽形式改写。
            </p>
            <p>
                注意：仅支持
                <n-text type="info">options</n-text>
                参数传递，不支持
                <n-text type="info">&lt;x-n-select-option&gt;</n-text>
                构造节点。
            </p>
        </template>

        <template #demo>
            <DemoSfc />
        </template>
    </DemoCard>
</template>
