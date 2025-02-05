<script lang="ts">
import { defineComponent } from 'vue';
import type { DataTableColumn, DataTableRenderCellParams } from '@skit/x.naive-ui';
import { useMessage } from 'naive-ui';

type Song = {
  title: string;
  length: string;
};

const createColumns = (): DataTableColumn<Song>[] => {
  return [
    {
      key: 'no',
      title: 'No'
    },
    {
      key: 'title',
      title: 'Title'
    },
    {
      key: 'length',
      title: 'Length'
    },
    {
      key: 'actions',
      title: 'Action'
    }
  ];
};

const data: Song[] = [
  { title: 'Wonderwall', length: '4:18' },
  { title: 'Dont Look Back in Anger', length: '4:48' },
  { title: 'Champagne Supernova', length: '7:27' }
];

export default defineComponent({
  setup() {
    const message = useMessage();
    return {
      data,
      columns: createColumns(),
      handleClickPlay(row: Song) {
        message.info(`Play ${row.title}`);
      }
    };
  }
});
</script>

<template>
  <n-space vertical :size="20">
    <x-n-data-table :data="data" :bordered="false">
      <x-n-data-table-column key="no" title="No">
        <template #render-cell="{ rowIndex }: DataTableRenderCellParams<Song>">
          {{ rowIndex + 1 }}
        </template>
      </x-n-data-table-column>
      <x-n-data-table-column key="title" title="Title"></x-n-data-table-column>
      <x-n-data-table-column key="length" title="Length"></x-n-data-table-column>
      <x-n-data-table-column key="actions">
        <template #title>Actions</template>
        <template #render-cell="{ rowData }: DataTableRenderCellParams<Song>">
          <n-button size="small" strong tertiary @click="handleClickPlay(rowData)">Play</n-button>
        </template>
      </x-n-data-table-column>
    </x-n-data-table>

    <x-n-data-table :columns="columns" :data="data" :bordered="false">
      <template #render-cell="{ column, rowData, rowIndex }: DataTableRenderCellParams<Song>">
        <template v-if="column.key === 'no'">
          {{ rowIndex + 1 }}
        </template>

        <template v-else-if="column.key === 'actions'">
          <n-button size="small" strong tertiary @click="handleClickPlay(rowData)">Play</n-button>
        </template>
      </template>
    </x-n-data-table>
  </n-space>
</template>
