<script lang="ts" setup>
import DemoCard from '../../_utils/demo.vue';
import DemoSfc from './demo.vue';
import DemoCodeJs from './code-js.vuecode';
import DemoCodeTs from './code-ts.vuecode';
</script>

<template>
    <DemoCard title="纯渲染的内容" anchor="render" :js-code="DemoCodeJs" :ts-code="DemoCodeTs">
        <template #content>
            <p>
                见 Naive-UI 官方文档示例中「
                <n-a href="//www.naiveui.com/zh-CN/os-theme/components/dropdown#render.vue">纯渲染的内容</n-a>
                」。
            </p>
            <p>与 Ant Design Vue 类似，以插槽形式改写。</p>
            <p>
                注意：任何非
                <n-text type="info">&lt;XNDropdownItem&gt;</n-text>
                、
                <n-text type="info">&lt;XNDropdownDivider&gt;</n-text>
                类型的子元素，将被当作纯渲染内容。
            </p>
        </template>

        <template #demo>
            <DemoSfc />
        </template>
    </DemoCard>
</template>
