<script lang="ts" setup>
import type { PropType } from 'vue';

defineProps({
    catalog: {
        type: Array as PropType<{ title: string; anchor: string }[]>,
        default: () => [],
        required: true
    }
});
</script>

<template>
    <div style="display: flex; width: 100%">
        <div style="flex: 1; padding-right: 24px">
            <slot></slot>
        </div>
        <div style="width: 196px">
            <n-anchor
                style="width: calc(100% - 4px); z-index: 1"
                listen-to=".main-container"
                :trigger-top="0"
                :top="24"
                :affix="true"
            >
                <n-anchor-link
                    v-for="(item, index) in catalog"
                    :key="index"
                    :title="item.title"
                    :href="'#' + item.anchor"
                />
            </n-anchor>
        </div>
    </div>
</template>
