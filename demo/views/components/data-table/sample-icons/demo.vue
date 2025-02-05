<script lang="ts">
import { defineComponent, ref, h } from 'vue';
import { NIcon } from 'naive-ui';
import PawOutline from '~@/assets/icons/PawOutline.svg';
import SearchOutline from '~@/assets/icons/SearchOutline.svg';

const data = [
  {
    Left: '1',
    Right: '1'
  },
  {
    Left: '2',
    Right: '2'
  }
];

export default defineComponent({
  components: {
    SearchOutline
  },

  setup() {
    return {
      data,
      filterOptionValue: ref(),
      renderExpandIcon: () => {
        return h(NIcon, null, { default: () => h(PawOutline) });
      }
    };
  }
});
</script>

<template>
  <x-n-data-table :data="data" :render-expand-icon="renderExpandIcon">
    <x-n-data-table-column type="expand">
      <template #render-expand>Expand content</template>
    </x-n-data-table-column>

    <x-n-data-table-column key="Left" title="Left" sorter="default">
      <template #render-sorter-icon="{ order }">
        <div v-if="order === false" style="transform: translateY(-3px)">🤔</div>
        <div v-if="order === 'ascend'" style="transform: translateY(-3px)">👇</div>
        <div v-if="order === 'descend'" style="transform: translateY(-3px)">👆</div>
      </template>
    </x-n-data-table-column>

    <x-n-data-table-column key="Right" title="Right" filter="default" :filter-option-value="filterOptionValue">
      <template #render-filter-icon>
        <n-icon>
          <SearchOutline />
        </n-icon>
      </template>
      <template #render-filter-menu="{ hide }">
        <n-space style="padding: 12px" vertical>
          <n-button @click="() => (filterOptionValue = '1')">Filter by 1</n-button>
          <n-button @click="() => (filterOptionValue = '2')">Filter by 2</n-button>
          <n-button @click="(() => (filterOptionValue = null), hide())">Clear</n-button>
        </n-space>
      </template>
    </x-n-data-table-column>
  </x-n-data-table>
</template>
