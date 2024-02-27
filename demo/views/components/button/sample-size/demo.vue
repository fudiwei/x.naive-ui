<script lang="ts">
import { defineComponent } from 'vue';
import CashOutline from '~@/assets/icons/CashOutline.svg';

export default defineComponent({
    components: {
        CashOutline
    }
});
</script>

<template>
    <n-space>
        <x-n-button size="tiny">
            <template #icon>
                <n-icon><CashOutline /></n-icon>
            </template>
        </x-n-button>

        <x-n-button size="small">
            <template #icon>
                <n-icon><CashOutline /></n-icon>
            </template>
        </x-n-button>

        <x-n-button size="medium">
            <template #icon>
                <n-icon><CashOutline /></n-icon>
            </template>
        </x-n-button>

        <x-n-button size="large">
            <template #icon>
                <n-icon><CashOutline /></n-icon>
            </template>
        </x-n-button>
    </n-space>
</template>
