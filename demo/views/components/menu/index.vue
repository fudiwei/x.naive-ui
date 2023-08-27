<script setup lang="ts">
import DemoContainer from '../_common/demo-doc.vue';
import DemoCard from '../_common/demo-card.vue';
import SampleHorizontalDemo from './sample-horizontal/demo.vue';
import SampleHorizontalCodeJs from './sample-horizontal/code-js.vuecode';
import SampleHorizontalCodeTs from './sample-horizontal/code-ts.vuecode';

const $encode = window.encodeURIComponent;
</script>

<template>
    <DemoContainer
        :catalog="[
            {
                title: '水平菜单',
                anchor: 'horizontal'
            }
        ]"
    >
        <n-space vertical :size="20">
            <DemoCard
                title="Horizontal Menu / 水平菜单"
                anchor="horizontal"
                :js-code="$encode(SampleHorizontalCodeJs)"
                :ts-code="$encode(SampleHorizontalCodeTs)"
            >
                <template #content>
                    <p>
                        以插槽形式改写 Naive-UI 官方文档示例「
                        <n-a href="//www.naiveui.com/zh-CN/os-theme/components/menu#horizontal.vue" target="blank">
                            Menu - 水平菜单
                        </n-a>
                        」。
                    </p>
                </template>
                <template #demo>
                    <SampleHorizontalDemo />
                </template>
            </DemoCard>
        </n-space>
    </DemoContainer>
</template>
