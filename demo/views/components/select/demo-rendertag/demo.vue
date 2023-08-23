<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { SelectOptions, SelectRenderTagParams } from '@skit/x.naive-ui';

export default defineComponent({
    setup() {
        const options: SelectOptions = [
            {
                label: '今天在摸鱼',
                value: 'value1',
                type: 'success'
            },
            {
                label: '工作没做完',
                value: 'value2',
                type: 'warning'
            },
            {
                label: '晚上要加班',
                value: 'value3',
                type: 'error'
            }
        ];
        return {
            value: ref<string[]>([]),
            options: ref(options)
        };
    }
});
</script>

<template>
    <x-n-select v-model:value="value" multiple :options="options">
        <template #renderTag="{ option, close }: SelectRenderTagParams">
            <n-tag :type="option.type" closable @close.stop="() => close()">
                {{ option.label }}
            </n-tag>
        </template>
    </x-n-select>
</template>
