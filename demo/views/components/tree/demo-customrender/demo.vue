<script lang="ts">
import { defineComponent, ref } from 'vue';
import type {
    TreeOption,
    TreeRenderLabelParams,
    TreeRenderPrefixParams,
    TreeRenderSuffixParams
} from '@skit/x.naive-ui';

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
    if (!level) return undefined;
    return Array.from({ length: 6 - level }).map((_, index) => {
        const key = '' + baseKey + level + index;
        return {
            label: createLabel(level),
            key,
            children: createData(level - 1, key),
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
            data: createData(),
            defaultExpandedKeys: ref(['40', '41'])
        };
    }
});
</script>

<template>
    <x-n-tree block-line :data="data" :default-expanded-keys="defaultExpandedKeys" :selectable="false">
        <template #render-label="{ option }: TreeRenderLabelParams">
            {{ `${option.label} :)` }}
        </template>

        <template #render-prefix="{ option }: TreeRenderPrefixParams">
            <n-button type="primary" text>
                {{ `Prefix-${option.level}` }}
            </n-button>
        </template>

        <template #render-suffix="{ option }: TreeRenderSuffixParams">
            <n-button type="primary" text>
                {{ `Suffix-${option.level}` }}
            </n-button>
        </template>
    </x-n-tree>
</template>
