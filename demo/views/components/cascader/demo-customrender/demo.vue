<script lang="ts">
import { defineComponent, ref } from 'vue';
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
        <template #renderLabel="{ option, checked }: CascaderRenderLabelParams">
            <n-icon style="vertical-align: -0.15em; margin-right: 4px">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    enable-background="new 0 0 512 512"
                    xml:space="preserve"
                >
                    <path
                        d="M256,64v225.1c-12.6-7.3-27.1-11.7-42.7-11.7c-47.1,0-85.3,38.2-85.3,85.3s38.2,85.3,85.3,85.3s85.3-38.2,85.3-85.3V149.3
	H384V64H256z"
                    ></path>
                </svg>
            </n-icon>
            <span :style="{ color: checked ? 'green' : undefined }">
                {{ 'prefix ' + option.label }}
            </span>
        </template>
    </x-n-cascader>
</template>
