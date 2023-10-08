<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { DataTableColumn, DataTableRenderCellParams } from '@skit/x.naive-ui';

interface DataItem {
    key: number;
    name: string;
    platform: string;
    version: string;
    upgradeNum: number;
    creator: string;
    createdAt: string;
}

interface InnerDataItem {
    key: number;
    date: string;
    name: string;
    upgradeNum: string;
}

const columns: DataTableColumn<DataItem>[] = [
    { type: 'expand' },
    { title: 'Name', key: 'name' },
    { title: 'Platform', key: 'platform' },
    { title: 'Version', key: 'version' },
    { title: 'Upgraded', key: 'upgradeNum' },
    { title: 'Creator', key: 'creator' },
    { title: 'Date', key: 'createdAt' },
    { title: 'Action', key: 'operation' }
];

const data: DataItem[] = [];
for (let i = 0; i < 3; ++i) {
    data.push({
        key: i,
        name: `Screem ${i + 1}`,
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00'
    });
}

const innerColumns: DataTableColumn<InnerDataItem>[] = [
    { title: 'Date', key: 'date' },
    { title: 'Name', key: 'name' },
    { title: 'Status', key: 'state' },
    { title: 'Upgrade Status', key: 'upgradeNum' },
    { title: 'Action', key: 'operation' }
];

const innerData: InnerDataItem[] = [];
for (let i = 0; i < 3; ++i) {
    innerData.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: `This is production name ${i + 1}`,
        upgradeNum: 'Upgraded: 56'
    });
}

export default defineComponent({
    setup() {
        return {
            columns: ref(columns),
            data: ref(data),
            innerColumns: ref(innerColumns),
            innerData: ref(innerData)
        };
    }
});
</script>

<template>
    <x-n-data-table class="demo-nested-table" :columns="columns" :data="data">
        <template #render-cell="{ column }: DataTableRenderCellParams<DataItem>">
            <template v-if="column.key === 'operation'">
                <n-button size="tiny">Publish</n-button>
            </template>
        </template>

        <template #render-expand>
            <x-n-data-table :columns="innerColumns" :data="innerData">
                <template #render-cell="{ column }: DataTableRenderCellParams<InnerDataItem>">
                    <template v-if="column.key === 'state'">
                        <span>
                            <n-badge color="green" dot />
                            Finished
                        </span>
                    </template>

                    <template v-if="column.key === 'operation'">
                        <n-space>
                            <n-button size="tiny">Pause</n-button>
                            <n-button size="tiny">Stop</n-button>
                        </n-space>
                    </template>
                </template>
            </x-n-data-table>
        </template>
    </x-n-data-table>
</template>

<style>
.demo-nested-table .n-data-table__expand {
    margin: calc(var(--n-td-padding) * -1);
    padding-left: calc(var(--n-td-padding) * 2 + 1rem);
}
</style>
