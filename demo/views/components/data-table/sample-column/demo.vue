<script lang="ts">
import { defineComponent } from 'vue';

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
    }
  ];
};

const data = [
  {
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
];

export default defineComponent({
  setup() {
    return {
      data,
      columns: createColumns(),
      pagination: {
        pageSize: 10
      }
    };
  }
});
</script>

<template>
  <n-space vertical :size="20">
    <x-n-data-table :data="data" :pagination="pagination">
      <x-n-data-table-column key="name" title="Name">
        <template #title>
          <n-tooltip>
            <template #trigger>
              <n-gradient-text :size="24" type="danger">Name</n-gradient-text>
            </template>
            Tooltip Content
          </n-tooltip>
        </template>
      </x-n-data-table-column>
      <x-n-data-table-column key="age" title="Age">
        <template #title>
          <n-gradient-text :size="20" type="info">Age</n-gradient-text>
        </template>
      </x-n-data-table-column>
      <x-n-data-table-column key="address" title="Address"></x-n-data-table-column>
    </x-n-data-table>

    <x-n-data-table :columns="columns" :data="data" :pagination="pagination">
      <template #render-column="{ column }">
        <template v-if="column.key === 'name'">
          <n-tooltip>
            <template #trigger>
              <n-gradient-text :size="24" type="danger">Name</n-gradient-text>
            </template>
            Tooltip Content
          </n-tooltip>
        </template>

        <template v-else-if="column.key === 'age'">
          <n-gradient-text :size="20" type="info">Age</n-gradient-text>
        </template>
      </template>
    </x-n-data-table>
  </n-space>
</template>
