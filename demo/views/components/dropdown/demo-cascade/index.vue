<script lang="ts" setup>
import DemoCard from '../../_common/demo-card.vue';
import DemoSfc from './demo.vue';
import DemoCodeJs from './code-js.vuecode';
import DemoCodeTs from './code-ts.vuecode';
</script>

<template>
    <DemoCard title="Cascade / 多级" anchor="cascade" :js-code="DemoCodeJs" :ts-code="DemoCodeTs">
        <template #content>
            <p>
                见 Naive-UI 官方文档示例中「
                <n-a href="//www.naiveui.com/zh-CN/os-theme/components/dropdown#cascade.vue" target="blank">多级</n-a>
                」。以模板形式改写。
            </p>
        </template>

        <template #demo>
            <DemoSfc />
        </template>
    </DemoCard>
</template>
