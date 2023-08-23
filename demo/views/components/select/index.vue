<script setup lang="ts">
import DemoBasic from './demo-basic/index.vue';
import DemoGroup from './demo-group/index.vue';
import DemoRenderLabel from './demo-renderlabel/index.vue';
import DemoRenderOption from './demo-renderoption/index.vue';
import DemoRenderTag from './demo-rendertag/index.vue';
import DemoPersonPicker from './demo-personpicker/index.vue';
</script>

<template>
    <n-space vertical :size="20">
        <DemoBasic />
        <DemoGroup />
        <DemoRenderLabel />
        <DemoRenderOption />
        <DemoRenderTag />
        <DemoPersonPicker />
    </n-space>
</template>
