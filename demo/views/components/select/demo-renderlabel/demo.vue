<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { SelectOptions, SelectRenderLabelParams } from '@skit/x.naive-ui';

export default defineComponent({
    setup() {
        const options: SelectOptions = [
            {
                type: 'group',
                label: 'Rubber Soul',
                key: 'Rubber Soul Album',
                children: [
                    {
                        label: "Everybody's Got Something to Hide Except Me and My Monkey",
                        value: 'song0',
                        disabled: true
                    },
                    {
                        label: 'Drive My Car',
                        value: 'song1',
                        style: {
                            color: 'red'
                        }
                    },
                    {
                        label: 'Norwegian Wood',
                        value: 'song2'
                    },
                    {
                        label: "You Won't See",
                        value: 'song3',
                        disabled: true
                    },
                    {
                        label: 'Nowhere Man',
                        value: 'song4'
                    },
                    {
                        label: 'Think For Yourself',
                        value: 'song5'
                    },
                    {
                        label: 'The Word',
                        value: 'song6'
                    },
                    {
                        label: 'Michelle',
                        value: 'song7',
                        disabled: true
                    },
                    {
                        label: 'What goes on',
                        value: 'song8'
                    },
                    {
                        label: 'Girl',
                        value: 'song9'
                    },
                    {
                        label: "I'm looking through you",
                        value: 'song10'
                    },
                    {
                        label: 'In My Life',
                        value: 'song11'
                    },
                    {
                        label: 'Wait',
                        value: 'song12'
                    }
                ]
            },
            {
                type: 'group',
                label: 'Let It Be',
                key: 'Let It Be Album',
                children: [
                    {
                        label: 'Two Of Us',
                        value: 'Two Of Us'
                    },
                    {
                        label: 'Dig A Pony',
                        value: 'Dig A Pony'
                    },
                    {
                        label: 'Across The Universe',
                        value: 'Across The Universe'
                    },
                    {
                        label: 'I Me Mine',
                        value: 'I Me Mine'
                    },
                    {
                        label: 'Dig It',
                        value: 'Dig It'
                    },
                    {
                        label: 'Let It Be',
                        value: 'Let It Be'
                    },
                    {
                        label: 'Maggie Mae',
                        value: 'Maggie Mae'
                    },
                    {
                        label: "I've Got A Feeling",
                        value: "I've Got A Feeling"
                    },
                    {
                        label: 'One After 909',
                        value: 'One After 909'
                    },
                    {
                        label: 'The Long And Winding Road',
                        value: 'The Long And Winding Road'
                    },
                    {
                        label: 'For You Blue',
                        value: 'For You Blue'
                    },
                    {
                        label: 'Get Back',
                        value: 'Get Back'
                    }
                ]
            }
        ];
        return {
            options: ref(options)
        };
    }
});
</script>

<template>
    <x-n-select :options="options">
        <template #render-label="{ option, selected }: SelectRenderLabelParams">
            <template v-if="option.type === 'group'">
                {{ option.label + '(Cool!)' }}
            </template>
            <template v-else>
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
                <span :style="{ color: selected ? 'green' : undefined }">
                    {{ option.label }}
                </span>
            </template>
        </template>
    </x-n-select>
</template>
