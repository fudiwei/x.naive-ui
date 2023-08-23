<script lang="ts" setup>
import DemoCard from '../../_common/demo-card.vue';
import DemoSfc from './demo.vue';
import DemoCodeJs from './code-js.vuecode';
import DemoCodeTs from './code-ts.vuecode';
</script>

<template>
    <DemoCard
        title="Customized Rendering / 自定义渲染"
        anchor="custom-render"
        :js-code="DemoCodeJs"
        :ts-code="DemoCodeTs"
    >
        <template #content>
            <p>
                见 Naive-UI 官方文档示例中「
                <n-a href="//www.naiveui.com/zh-CN/os-theme/components/cascader#custom-render.vue" target="blank">
                    自定义渲染
                </n-a>
                」。以插槽形式改写。
            </p>
        </template>

        <template #demo>
            <DemoSfc />
        </template>
    </DemoCard>
</template>
