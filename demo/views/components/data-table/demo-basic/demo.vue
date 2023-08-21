<script lang="ts">
import { defineComponent } from 'vue';
import { useMessage } from 'naive-ui';
import type { DataTableColumn, DataTableRenderCellParams } from '@skit/x.naive-ui';

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
    <x-n-data-table :columns="columns" :data="data" :bordered="false">
        <template #renderCell="{ column, rowData, rowIndex }: DataTableRenderCellParams<Song>">
            <template v-if="column.key === 'no'">
                {{ rowIndex + 1 }}
            </template>

            <template v-else-if="column.key === 'actions'">
                <n-button size="small" strong tertiary @click="handleClickPlay(rowData)">Play</n-button>
            </template>
        </template>
    </x-n-data-table>
</template>
