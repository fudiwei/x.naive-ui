<script setup lang="ts">
import DemoContainer from '../_common/demo-doc.vue';
import DemoCard from '../_common/demo-card.vue';
import SampleBasicDemo from './sample-basic/demo.vue';
import SampleBasicCodeJs from './sample-basic/code-js.vuecode';
import SampleBasicCodeTs from './sample-basic/code-ts.vuecode';

const $encode = window.encodeURIComponent;
</script>

<template>
  <DemoContainer
    :catalog="[
      {
        title: '基础用法',
        anchor: 'basic'
      }
    ]"
  >
    <n-space vertical :size="20">
      <DemoCard title="Basic / 基础用法" anchor="basic" :js-code="$encode(SampleBasicCodeJs)" :ts-code="$encode(SampleBasicCodeTs)">
        <template #content>
          <p>
            以模板形式改写 Naive-UI 官方文档示例「
            <n-a href="//www.naiveui.com/zh-CN/os-theme/components/popselect#basic.vue" target="blank">Popselect - 基础用法</n-a>
            」。
          </p>
        </template>
        <template #demo>
          <SampleBasicDemo />
        </template>
      </DemoCard>
    </n-space>
  </DemoContainer>
</template>
