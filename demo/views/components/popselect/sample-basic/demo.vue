<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        return {
            value: ref<string>(),
            options: [
                {
                    label: 'Drive My Car',
                    value: 'Drive My Car'
                },
                {
                    label: 'Norwegian Wood',
                    value: 'Norwegian Wood'
                },
                {
                    label: "You Won't See",
                    value: "You Won't See",
                    disabled: true
                },
                {
                    label: 'Nowhere Man',
                    value: 'Nowhere Man'
                },
                {
                    label: 'Think For Yourself',
                    value: 'Think For Yourself'
                },
                {
                    label: 'The Word',
                    value: 'The Word'
                },
                {
                    label: 'Michelle',
                    value: 'Michelle',
                    disabled: true
                },
                {
                    label: 'What goes on',
                    value: 'What goes on'
                },
                {
                    label: 'Girl',
                    value: 'Girl'
                },
                {
                    label: "I'm looking through you",
                    value: "I'm looking through you"
                },
                {
                    label: 'In My Life',
                    value: 'In My Life'
                },
                {
                    label: 'Wait',
                    value: 'Wait'
                }
            ]
        };
    }
});
</script>

<template>
    <x-n-popselect v-model:value="value">
        <template #trigger>
            <n-button>{{ value || 'Popselect' }}</n-button>
        </template>

        <x-n-select-option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :disabled="option.disabled"
        >
            {{ option.label }}
        </x-n-select-option>
    </x-n-popselect>
</template>
