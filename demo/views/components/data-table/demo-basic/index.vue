<script lang="ts" setup>
import DemoCard from '../../_common/demo-card.vue';
import DemoSfc from './demo.vue';
import DemoCodeJs from './code-js.vuecode';
import DemoCodeTs from './code-ts.vuecode';
</script>

<template>
    <DemoCard title="Basic / 基础用法" anchor="basic" :js-code="DemoCodeJs" :ts-code="DemoCodeTs">
        <template #content>
            <p>
                见 Naive-UI 官方文档示例中「
                <n-a href="//www.naiveui.com/zh-CN/os-theme/components/data-table#basic.vue" target="blank">
                    基础用法
                </n-a>
                」。分别以模板和插槽形式改写。
            </p>
        </template>

        <template #demo>
            <DemoSfc />
        </template>
    </DemoCard>
</template>
