<script setup lang="ts">
import DemoBasic from './demo-basic/index.vue';
import DemoRender from './demo-render/index.vue';
import DemoIcon from './demo-icon/index.vue';
</script>

<template>
    <n-space vertical :size="20">
        <DemoBasic />
        <DemoRender />
        <DemoIcon />
    </n-space>
</template>
