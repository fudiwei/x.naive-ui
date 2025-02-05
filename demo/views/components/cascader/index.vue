<script setup lang="ts">
import DemoCard from '../_common/demo-card.vue';
import DemoContainer from '../_common/demo-doc.vue';
import SampleCustomRenderCodeJs from './sample-customrender/code-js.vuecode';
import SampleCustomRenderCodeTs from './sample-customrender/code-ts.vuecode';
import SampleCustomRenderDemo from './sample-customrender/demo.vue';

const $encode = window.encodeURIComponent;
</script>

<template>
  <DemoContainer
    :catalog="[
      {
        title: '自定义渲染',
        anchor: 'custom-render'
      }
    ]"
  >
    <n-space vertical :size="20">
      <DemoCard
        title="Customized Rendering / 自定义渲染"
        anchor="custom-render"
        :js-code="$encode(SampleCustomRenderCodeJs)"
        :ts-code="$encode(SampleCustomRenderCodeTs)"
      >
        <template #content>
          <p>
            以插槽形式改写 Naive-UI 官方文档示例「
            <n-a href="//www.naiveui.com/zh-CN/os-theme/components/cascader#custom-render.vue" target="blank">Cascader - 批量渲染</n-a>
            」。
          </p>
        </template>
        <template #demo>
          <SampleCustomRenderDemo />
        </template>
      </DemoCard>
    </n-space>
  </DemoContainer>
</template>
