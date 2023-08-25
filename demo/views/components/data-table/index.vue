<script setup lang="ts">
import DemoBasic from './demo-basic/index.vue';
import DemoColumn from './demo-column/index.vue';
import DemoExpand from './demo-expand/index.vue';
import DemoGroup from './demo-group/index.vue';
import DemoEmpty from './demo-empty/index.vue';
</script>

<template>
    <n-space vertical :size="20">
        <DemoBasic />
        <DemoColumn />
        <DemoExpand />
        <DemoGroup />
        <DemoEmpty />
    </n-space>
</template>
