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
    <x-n-button>No Icon</x-n-button>

    <x-n-button>
      <template #icon>
        <n-icon><CashOutline /></n-icon>
      </template>
      <!-- Only Icon in slot -->
    </x-n-button>

    <x-n-button>
      <n-icon><CashOutline /></n-icon>
      <!-- Only Icon -->
    </x-n-button>

    <x-n-button>
      <template #icon>
        <n-icon><CashOutline /></n-icon>
      </template>
      Icon in Slot
    </x-n-button>

    <x-n-button>
      <n-icon><CashOutline /></n-icon>
      Icon
    </x-n-button>
  </n-space>
</template>
