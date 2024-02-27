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
        <x-n-button circle>
            <template #icon>
                <n-icon><CashOutline /></n-icon>
            </template>
        </x-n-button>

        <x-n-button round>
            <template #icon>
                <n-icon><CashOutline /></n-icon>
            </template>
        </x-n-button>

        <x-n-button>
            <template #icon>
                <n-icon><CashOutline /></n-icon>
            </template>
        </x-n-button>
    </n-space>
</template>
