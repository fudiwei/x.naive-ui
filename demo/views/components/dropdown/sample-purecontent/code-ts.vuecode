<script lang="ts">
import { defineComponent } from 'vue';
import { useMessage } from 'naive-ui';

export default defineComponent({
  setup() {
    const message = useMessage();
    return {
      handleSelect(key: string | number) {
        message.info(String(key));
      }
    };
  }
});
</script>

<template>
  <x-n-dropdown trigger="hover" @select="handleSelect">
    <template #trigger>
      <n-button>2021年 第36周</n-button>
    </template>

    <div style="display: flex; align-items: center; padding: 8px 12px">
      <n-avatar style="margin-right: 12px" src="../../../../assets/images/avatar.png" round />
      <div>
        <div>
          <n-text :depth="2">打工仔</n-text>
        </div>
        <div style="font-size: 12px">
          <n-text :depth="3">毫无疑问，你是办公室里最亮的星</n-text>
        </div>
      </div>
    </div>
    <x-n-dropdown-divider />
    <x-n-dropdown-item key="stmt1">处理群消息 342 条</x-n-dropdown-item>
    <x-n-dropdown-item key="stmt2">被 @ 58 次</x-n-dropdown-item>
    <x-n-dropdown-item key="stmt3">加入群 17 个</x-n-dropdown-item>
  </x-n-dropdown>
</template>
