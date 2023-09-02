<script lang="ts">
import { defineComponent, ref } from 'vue';
import MusicalNoteOutline from '~@/assets/icons/MusicalNoteOutline.svg';
import type { CascaderOption, CascaderRenderLabelParams } from '@skit/x.naive-ui';

function createOptions(depth = 3, iterator = 1, prefix = '') {
    const length = 12;
    const options: CascaderOption[] = [];
    for (let i = 1; i <= length; ++i) {
        if (iterator === 1) {
            options.push({
                value: `v-${i}`,
                label: `l-${i}`,
                disabled: i % 5 === 0,
                children: createOptions(depth, iterator + 1, '' + String(i))
            });
        } else if (iterator === depth) {
            options.push({
                value: `v-${prefix}-${i}`,
                label: `l-${prefix}-${i}`,
                disabled: i % 5 === 0
            });
        } else {
            options.push({
                value: `v-${prefix}-${i}`,
                label: `l-${prefix}-${i}`,
                disabled: i % 5 === 0,
                children: createOptions(depth, iterator + 1, `${prefix}-${i}`)
            });
        }
    }
    return options;
}

export default defineComponent({
    components: {
        MusicalNoteOutline
    },

    setup() {
        return {
            value: ref<string[]>(),
            options: createOptions(),
            handleUpdateValue(...args: unknown[]) {
                console.log(...args);
            }
        };
    }
});
</script>

<template>
    <x-n-cascader
        v-model:value="value"
        placeholder="没啥用的值"
        :options="options"
        :filterable="true"
        @update:value="handleUpdateValue"
    >
        <template #render-label="{ option, checked }: CascaderRenderLabelParams">
            <n-icon style="vertical-align: -0.15em; margin-right: 4px">
                <MusicalNoteOutline />
            </n-icon>
            <span :style="{ color: checked ? 'green' : undefined }">
                {{ 'prefix ' + option.label }}
            </span>
        </template>
    </x-n-cascader>
</template>
