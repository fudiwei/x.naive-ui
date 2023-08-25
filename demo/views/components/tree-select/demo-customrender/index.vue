<script lang="ts" setup>
import DemoCard from '../../_common/demo-card.vue';
import DemoSfc from './demo.vue';
import DemoCodeJs from './code-js.vuecode';
import DemoCodeTs from './code-ts.vuecode';
</script>

<template>
    <DemoCard
        title="Customized Rendering / 自定义渲染"
        anchor="custom-render"
        :js-code="DemoCodeJs"
        :ts-code="DemoCodeTs"
    >
        <template #demo>
            <DemoSfc />
        </template>
    </DemoCard>
</template>
