<script lang="ts">
import { defineComponent, ref } from 'vue';

const createColumns = () => {
    return [
        {
            key: 'name',
            title: 'Name'
        },
        {
            key: 'age',
            title: 'Age'
        },
        {
            key: 'address',
            title: 'Address'
        },
        {
            key: 'tags',
            title: 'Tags'
        },
        {
            key: 'actions',
            title: 'Action'
        }
    ];
};

export default defineComponent({
    setup() {
        return {
            data: ref([]),
            columns: createColumns()
        };
    }
});
</script>

<template>
    <x-n-data-table :columns="columns" :data="data">
        <template #empty>
            <x-n-empty />
        </template>
    </x-n-data-table>
</template>
