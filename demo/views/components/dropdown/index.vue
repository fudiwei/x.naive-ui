<script setup lang="ts">
import DemoBasic from './demo-basic/index.vue';
import DemoIcon from './demo-icon/index.vue';
import DemoCascade from './demo-cascade/index.vue';
import DemoRender from './demo-render/index.vue';
</script>

<template>
    <n-space vertical :size="20">
        <DemoBasic />
        <DemoIcon />
        <DemoCascade />
        <DemoRender />
    </n-space>
</template>
