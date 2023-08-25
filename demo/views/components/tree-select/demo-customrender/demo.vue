<script lang="ts">
import { defineComponent } from 'vue';
import type {
    TreeSelectOption,
    TreeSelectRenderLabelParams,
    TreeSelectRenderPrefixParams,
    TreeSelectRenderSuffixParams,
    TreeSelectRenderTagParams
} from '@skit/x.naive-ui';

function createOptions(level = 4, baseKey = ''): TreeSelectOption[] | undefined {
    if (!level) return undefined;
    return Array.from({ length: 6 - level }).map((_, index) => {
        const key = '' + baseKey + level + index;
        return {
            label: createLabel(level),
            key,
            children: createOptions(level - 1, key),
            level
        };
    });
}

function createLabel(level: number): string {
    if (level === 4) return '道生一';
    if (level === 3) return '一生二';
    if (level === 2) return '二生三';
    if (level === 1) return '三生万物';
    return '';
}

export default defineComponent({
    setup() {
        return {
            options: createOptions()
        };
    }
});
</script>

<template>
    <x-n-tree-select :options="options" multiple>
        <template #renderLabel="{ option }: TreeSelectRenderLabelParams">
            {{ `${option.label} :)` }}
        </template>

        <template #renderPrefix="{ option }: TreeSelectRenderPrefixParams">
            <n-button type="primary" text>
                {{ `Prefix-${option.level}` }}
            </n-button>
        </template>

        <template #renderSuffix="{ option }: TreeSelectRenderSuffixParams">
            <n-button type="primary" text>
                {{ `Suffix-${option.level}` }}
            </n-button>
        </template>

        <template #renderTag="{ option, close }: TreeSelectRenderTagParams">
            <n-tag type="info" closable @close.stop="() => close()">
                {{ option.label }}
            </n-tag>
        </template>
    </x-n-tree-select>
</template>
