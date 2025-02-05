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
  <x-n-dropdown trigger="click" placement="bottom-start" @select="handleSelect">
    <template #trigger>
      <n-button>人物和食物</n-button>
    </template>

    <x-n-dropdown-item key="jay gatsby">杰·盖茨比</x-n-dropdown-item>
    <x-n-dropdown-item key="daisy buchanan">黛西·布坎南</x-n-dropdown-item>
    <x-n-dropdown-divider />
    <x-n-dropdown-item key="nick carraway">尼克·卡拉威</x-n-dropdown-item>
    <x-n-dropdown-item key="others1" label="其他">
      <template #submenu>
        <x-n-dropdown-item key="jordan baker">乔丹·贝克</x-n-dropdown-item>
        <x-n-dropdown-item key="tom buchanan">汤姆·布坎南</x-n-dropdown-item>
        <x-n-dropdown-item key="others2" :disabled="true">
          其他
          <template #submenu>
            <x-n-dropdown-item key="chicken">鸡肉</x-n-dropdown-item>
            <x-n-dropdown-item key="beef">牛肉</x-n-dropdown-item>
          </template>
        </x-n-dropdown-item>
      </template>
    </x-n-dropdown-item>
  </x-n-dropdown>
</template>
