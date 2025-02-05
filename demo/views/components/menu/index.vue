<script setup lang="ts">
import DemoCard from '../_common/demo-card.vue';
import DemoContainer from '../_common/demo-doc.vue';
import SampleBatchRenderCodeJs from './sample-batchrender/code-js.vuecode';
import SampleBatchRenderCodeTs from './sample-batchrender/code-ts.vuecode';
import SampleBatchRenderDemo from './sample-batchrender/demo.vue';
import SampleHorizontalCodeJs from './sample-horizontal/code-js.vuecode';
import SampleHorizontalCodeTs from './sample-horizontal/code-ts.vuecode';
import SampleHorizontalDemo from './sample-horizontal/demo.vue';

const $encode = window.encodeURIComponent;
</script>

<template>
  <DemoContainer
    :catalog="[
      {
        title: '水平菜单',
        anchor: 'horizontal'
      },
      {
        title: '批量渲染',
        anchor: 'batch-render'
      }
    ]"
  >
    <n-space vertical :size="20">
      <DemoCard title="Horizontal Menu / 水平菜单" anchor="horizontal" :js-code="$encode(SampleHorizontalCodeJs)" :ts-code="$encode(SampleHorizontalCodeTs)">
        <template #content>
          <p>
            以插槽形式改写 Naive-UI 官方文档示例「
            <n-a href="//www.naiveui.com/zh-CN/os-theme/components/menu#horizontal.vue" target="blank">Menu - 水平菜单</n-a>
            」。
          </p>
        </template>
        <template #demo>
          <SampleHorizontalDemo />
        </template>
      </DemoCard>

      <DemoCard title="Batch Render / 批量渲染" anchor="batch-render" :js-code="$encode(SampleBatchRenderCodeJs)" :ts-code="$encode(SampleBatchRenderCodeTs)">
        <template #content>
          <p>
            以插槽形式改写 Naive-UI 官方文档示例「
            <n-a href="//www.naiveui.com/zh-CN/os-theme/components/menu#render-label.vue" target="blank">Menu - 批量渲染</n-a>
            」。
          </p>
        </template>
        <template #demo>
          <SampleBatchRenderDemo />
        </template>
      </DemoCard>
    </n-space>
  </DemoContainer>
</template>
