<script lang="ts" setup>
import DemoCard from '../../_common/demo-card.vue';
import DemoSfc from './demo.vue';
import DemoCodeJs from './code-js.vuecode';
import DemoCodeTs from './code-ts.vuecode';
</script>

<template>
    <DemoCard
        title="Customize Tag Rendering / 自定义标签渲染"
        anchor="custom-render-tag"
        :js-code="DemoCodeJs"
        :ts-code="DemoCodeTs"
    >
        <template #content>
            <p>
                见 Naive-UI 官方文档示例中「
                <n-a href="//www.naiveui.com/zh-CN/os-theme/components/select#render-tag.vue" target="blank">
                    自定义标签渲染
                </n-a>
                」。以插槽形式改写。
            </p>
            <p>
                注意：仅支持
                <n-text type="info">options</n-text>
                参数传递，不支持
                <n-text type="info">&lt;x-n-select-option&gt;</n-text>
                、
                <n-text type="info">&lt;x-n-select-option-group&gt;</n-text>
                构造节点。
            </p>
        </template>

        <template #demo>
            <DemoSfc />
        </template>
    </DemoCard>
</template>
