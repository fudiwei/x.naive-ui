<script setup lang="ts">
import DemoCard from '../_common/demo-card.vue';
import DemoContainer from '../_common/demo-doc.vue';
import SampleBasicCodeJs from './sample-basic/code-js.vuecode';
import SampleBasicCodeTs from './sample-basic/code-ts.vuecode';
import SampleBasicDemo from './sample-basic/demo.vue';
import SampleShapeCodeJs from './sample-shape/code-js.vuecode';
import SampleShapeCodeTs from './sample-shape/code-ts.vuecode';
import SampleShapeDemo from './sample-shape/demo.vue';
import SampleSizeCodeJs from './sample-size/code-js.vuecode';
import SampleSizeCodeTs from './sample-size/code-ts.vuecode';
import SampleSizeDemo from './sample-size/demo.vue';

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
        title: '尺寸',
        anchor: 'size'
      }
    ]"
  >
    <n-space vertical :size="20">
      <DemoCard title="Basic / 基础用法" anchor="basic" :js-code="$encode(SampleBasicCodeJs)" :ts-code="$encode(SampleBasicCodeTs)">
        <template #content>
          <p>
            同 Naive-UI 官方文档示例「
            <n-a href="//www.naiveui.com/zh-CN/os-theme/components/button#basic.vue" target="blank">Button - 基础用法</n-a>
            」。
          </p>
        </template>
        <template #demo>
          <SampleBasicDemo />
        </template>
      </DemoCard>

      <DemoCard title="Size / 尺寸" anchor="size" :js-code="$encode(SampleSizeCodeJs)" :ts-code="$encode(SampleSizeCodeTs)">
        <template #content>
          <p>
            同 Naive-UI 官方文档示例「
            <n-a href="//www.naiveui.com/zh-CN/os-theme/components/button#size.vue" target="blank">Button - 尺寸</n-a>
            」。
          </p>
        </template>
        <template #demo>
          <SampleSizeDemo />
        </template>
      </DemoCard>

      <DemoCard title="Shape / 形状" anchor="size" :js-code="$encode(SampleShapeCodeJs)" :ts-code="$encode(SampleShapeCodeTs)">
        <template #content>
          <p>
            同 Naive-UI 官方文档示例「
            <n-a href="//www.naiveui.com/zh-CN/os-theme/components/button#shape.vue" target="blank">Button - 形状</n-a>
            」。
          </p>
        </template>
        <template #demo>
          <SampleShapeDemo />
        </template>
      </DemoCard>
    </n-space>
  </DemoContainer>
</template>
