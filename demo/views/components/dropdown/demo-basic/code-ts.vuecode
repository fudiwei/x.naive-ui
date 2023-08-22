<script lang="ts">
import { defineComponent } from 'vue';
import { useMessage } from 'naive-ui';

export default defineComponent({
    setup() {
        const message = useMessage();
        return {
            options: [
                {
                    label: '滨海湾金沙，新加坡',
                    key: 'marina bay sands',
                    disabled: true
                },
                {
                    label: '布朗酒店，伦敦',
                    key: "brown's hotel, london"
                },
                {
                    label: '亚特兰蒂斯巴哈马，拿骚',
                    key: 'atlantis nahamas, nassau'
                },
                {
                    label: '比佛利山庄酒店，洛杉矶',
                    key: 'the beverly hills hotel, los angeles'
                }
            ],
            handleSelect(key: string | number) {
                message.info(String(key));
            },
            handleClick() {
                message.info('bingo!');
            }
        };
    }
});
</script>

<template>
    <n-space>
        <x-n-dropdown trigger="hover" @select="handleSelect">
            <template #trigger>
                <n-button>找个地方休息</n-button>
            </template>

            <x-n-dropdown-item key="marina bay sands" disabled>滨海湾金沙，新加坡</x-n-dropdown-item>
            <x-n-dropdown-item key="brown's hotel, london">布朗酒店，伦敦</x-n-dropdown-item>
            <x-n-dropdown-item key="atlantis nahamas, nassau">亚特兰蒂斯巴哈马，拿骚</x-n-dropdown-item>
            <x-n-dropdown-item key="the beverly hills hotel, los angeles" @click.stop="handleClick">
                比佛利山庄酒店，洛杉矶
            </x-n-dropdown-item>
        </x-n-dropdown>

        <x-n-dropdown trigger="hover" @select="handleSelect">
            <template #trigger>
                <n-button>找个地方休息</n-button>
            </template>

            <x-n-dropdown-item v-for="item in options" :key="item.key" :disabled="item.disabled">
                {{ item.label }}
            </x-n-dropdown-item>
        </x-n-dropdown>
    </n-space>
</template>
