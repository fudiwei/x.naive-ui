﻿<script lang="ts">
import { defineComponent } from 'vue';
import type { DataTableColumns, DataTableRenderSummaryParams } from '@skit/x.naive-ui';

type RowData = {
  key: number;
  name: string;
  age: number;
  address: string;
};

const createColumns = (): DataTableColumns<RowData> => {
  return [
    {
      type: 'selection'
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    }
  ];
};

const createData = (): RowData[] => [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
];

export default defineComponent({
  setup() {
    return {
      columns: createColumns(),
      data: createData()
    };
  }
});
</script>

<template>
  <x-n-data-table :columns="columns" :data="data">
    <template #summary>
      <x-n-data-table-summary-row>
        <x-n-data-table-summary-cell key="name" :col-span="3">
          <template #default="{ pageData }: DataTableRenderSummaryParams">
            <span style="color: red">
              {{ pageData.reduce((prevValue, row) => prevValue + row.age, 0) }}
            </span>
          </template>
        </x-n-data-table-summary-cell>
      </x-n-data-table-summary-row>
    </template>
  </x-n-data-table>
</template>
