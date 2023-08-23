<script setup lang="ts">
import DemoBasic from './demo-basic/index.vue';
import DemoIcon from './demo-icon/index.vue';
import DemoCascade from './demo-cascade/index.vue';
import DemoPure from './demo-pure/index.vue';
</script>

<template>
    <n-space vertical :size="20">
        <DemoBasic />
        <DemoIcon />
        <DemoCascade />
        <DemoPure />
    </n-space>
</template>
