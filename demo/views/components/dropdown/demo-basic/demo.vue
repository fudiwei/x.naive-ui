<script lang="ts">
import { defineComponent } from 'vue';
import { useMessage } from 'naive-ui';

export default defineComponent({
    setup() {
        const message = useMessage();
        return {
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
</template>
