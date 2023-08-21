<script lang="ts" setup>
import DemoCard from '../../_utils/demo.vue';
import DemoSfc from './demo.vue';
import DemoCodeJs from './code-js.vuecode';
import DemoCodeTs from './code-ts.vuecode';
</script>

<template>
    <DemoCard title="可展开" anchor="expand" :js-code="DemoCodeJs" :ts-code="DemoCodeTs">
        <template #content>
            <p>
                见 Naive-UI 官方文档示例中「
                <n-a href="//www.naiveui.com/zh-CN/os-theme/components/data-table#expand.vue">可展开</n-a>
                」。
            </p>
            <p>与 Ant Design Vue 类似，以插槽形式改写。</p>
        </template>

        <template #demo>
            <DemoSfc />
        </template>
    </DemoCard>
</template>
