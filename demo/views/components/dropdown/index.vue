<script setup lang="ts">
import DemoCard from '../_common/demo-card.vue';
import DemoContainer from '../_common/demo-doc.vue';
import SampleBasicCodeJs from './sample-basic/code-js.vuecode';
import SampleBasicCodeTs from './sample-basic/code-ts.vuecode';
import SampleBasicDemo from './sample-basic/demo.vue';
import SampleBatchRenderCodeJs from './sample-batchrender/code-js.vuecode';
import SampleBatchRenderCodeTs from './sample-batchrender/code-ts.vuecode';
import SampleBatchRenderDemo from './sample-batchrender/demo.vue';
import SampleCascadeCodeJs from './sample-cascade/code-js.vuecode';
import SampleCascadeCodeTs from './sample-cascade/code-ts.vuecode';
import SampleCascadeDemo from './sample-cascade/demo.vue';
import SampleIconCodeJs from './sample-icon/code-js.vuecode';
import SampleIconCodeTs from './sample-icon/code-ts.vuecode';
import SampleIconDemo from './sample-icon/demo.vue';
import SamplePureContentCodeJs from './sample-purecontent/code-js.vuecode';
import SamplePureContentCodeTs from './sample-purecontent/code-ts.vuecode';
import SamplePureContentDemo from './sample-purecontent/demo.vue';

const $encode = window.encodeURIComponent;
</script>

<template>
  <DemoContainer
    :catalog="[
      {
        title: '基础用法',
        anchor: 'basic'
      },
      {
        title: '图标',
        anchor: 'icon'
      },
      {
        title: '多级',
        anchor: 'cascade'
      },
      {
        title: '纯渲染的内容',
        anchor: 'pure-content'
      },
      {
        title: '纯渲染的内容',
        anchor: 'pure-content'
      },
      {
        title: '批量渲染',
        anchor: 'batch-render'
      }
    ]"
  >
    <n-space vertical :size="20">
      <DemoCard title="Basic / 基础用法" anchor="basic" :js-code="$encode(SampleBasicCodeJs)" :ts-code="$encode(SampleBasicCodeTs)">
        <template #content>
          <p>
            以模板形式改写 Naive-UI 官方文档示例「
            <n-a href="//www.naiveui.com/zh-CN/os-theme/components/dropdown#basic.vue" target="blank">Dropdown - 基础用法</n-a>
            」。
          </p>
        </template>
        <template #demo>
          <SampleBasicDemo />
        </template>
      </DemoCard>

      <DemoCard title="Icon / 图标" anchor="icon" :js-code="$encode(SampleIconCodeJs)" :ts-code="$encode(SampleIconCodeTs)">
        <template #content>
          <p>
            以模板形式改写 Naive-UI 官方文档示例「
            <n-a href="//www.naiveui.com/zh-CN/os-theme/components/dropdown#icon.vue" target="blank">Dropdown - 图标</n-a>
            」。
          </p>
        </template>
        <template #demo>
          <SampleIconDemo />
        </template>
      </DemoCard>

      <DemoCard title="Cascade / 多级" anchor="cascade" :js-code="$encode(SampleCascadeCodeJs)" :ts-code="$encode(SampleCascadeCodeTs)">
        <template #content>
          <p>
            以模板形式改写 Naive-UI 官方文档示例「
            <n-a href="//www.naiveui.com/zh-CN/os-theme/components/dropdown#cascade.vue" target="blank">Dropdown - 多级</n-a>
            」。
          </p>
        </template>
        <template #demo>
          <SampleCascadeDemo />
        </template>
      </DemoCard>

      <DemoCard
        title="Pure Rendering Content / 纯渲染的内容"
        anchor="pure-content"
        :js-code="$encode(SamplePureContentCodeJs)"
        :ts-code="$encode(SamplePureContentCodeTs)"
      >
        <template #content>
          <p>
            以模板形式改写 Naive-UI 官方文档示例「
            <n-a href="//www.naiveui.com/zh-CN/os-theme/components/dropdown#render.vue" target="blank">Dropdown - 纯渲染的内容</n-a>
            」。
          </p>
          <p>
            注意：任何非
            <n-text type="info">&lt;x-n-dropdown-item&gt;</n-text>
            、
            <n-text type="info">&lt;x-n-dropdown-divider&gt;</n-text>
            类型的子元素，将被当作纯渲染内容。
          </p>
        </template>
        <template #demo>
          <SamplePureContentDemo />
        </template>
      </DemoCard>

      <DemoCard title="Batch Rendering / 批量渲染" anchor="batchrender" :js-code="$encode(SampleBatchRenderCodeJs)" :ts-code="$encode(SampleBatchRenderCodeTs)">
        <template #content>
          <p>
            以模板形式改写 Naive-UI 官方文档示例「
            <n-a href="//www.naiveui.com/zh-CN/os-theme/components/dropdown#batch-render.vue" target="blank">Dropdown - 批量渲染</n-a>
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
