<script lang="ts" setup>
import DemoCard from '../../_utils/demo.vue';
import DemoSfc from './demo.vue';
import DemoCodeJs from './code-js.vuecode';
import DemoCodeTs from './code-ts.vuecode';
</script>

<template>
    <DemoCard title="基础用法" anchor="basic" :js-code="DemoCodeJs" :ts-code="DemoCodeTs">
        <template #content>
            <p>
                见 Naive-UI 官方文档示例中「
                <n-a href="//www.naiveui.com/zh-CN/os-theme/components/data-table#basic.vue">基础用法</n-a>
                」。
            </p>
            <p>与 Ant Design Vue 类似，以插槽形式改写。</p>
        </template>

        <template #demo>
            <DemoSfc />
        </template>
    </DemoCard>
</template>
