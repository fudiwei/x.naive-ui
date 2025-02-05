<script lang="ts">
import { defineComponent } from 'vue';
import { useMessage } from 'naive-ui';
import type { DataTableColumn, DataTableRenderCellParams, DataTableRenderExpandParams } from '@skit/x.naive-ui';

type RowData = {
  key: number;
  name: string;
  age: number;
  address: string;
  tags: string[];
};

const createColumns = (): DataTableColumn<RowData>[] => {
  return [
    {
      type: 'selection'
    },
    {
      type: 'expand',
      expandable: (rowData: RowData) => rowData.name !== 'Jim Green'
    },
    {
      key: 'key',
      title: '#',
      render: (_, index) => {
        return `${index + 1}`;
      }
    },
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
      title: 'Tags',
      key: 'tags'
    },
    {
      title: 'Action',
      key: 'actions'
    }
  ];
};

const createData = (): RowData[] => [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['wow']
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
];

export default defineComponent({
  setup() {
    const message = useMessage();
    return {
      data: createData(),
      columns: createColumns(),
      pagination: {
        pageSize: 10
      },
      handleClickSendMail(rowData: RowData) {
        message.info('send mail to ' + rowData.name);
      }
    };
  }
});
</script>

<template>
  <n-space vertical :size="20">
    <x-n-data-table :data="data" :pagination="pagination">
      <x-n-data-table-column type="selection" />
      <x-n-data-table-column type="expand" :expandable="(rowData) => rowData.name !== 'Jim Green'">
        <template #render-expand="{ rowData }: DataTableRenderExpandParams<RowData>">
          {{ `${rowData.name} is a good guy.` }}
        </template>
      </x-n-data-table-column>
      <x-n-data-table-column key="key" title="#" :render="(_, index) => index + 1" />
      <x-n-data-table-column key="name" title="Name" />
      <x-n-data-table-column key="age" title="Age" />
      <x-n-data-table-column key="address" title="Address" />
      <x-n-data-table-column key="tags" title="Tags">
        <template #render-cell="{ rowData }: DataTableRenderCellParams<RowData>">
          <n-tag v-for="tagKey in rowData.tags" :key="tagKey" style="margin-right: 6px" type="info" :borderd="false">
            {{ tagKey }}
          </n-tag>
        </template>
      </x-n-data-table-column>
      <x-n-data-table-column key="actions" title="Actions">
        <template #render-cell="{ rowData }: DataTableRenderCellParams<RowData>">
          <n-button size="small" @click="handleClickSendMail(rowData)">Send Email</n-button>
        </template>
      </x-n-data-table-column>
    </x-n-data-table>

    <x-n-data-table :columns="columns" :data="data" :pagination="pagination" default-expand-all>
      <template #render-cell="{ column, rowData }: DataTableRenderCellParams<RowData>">
        <template v-if="column.key === 'tags'">
          <n-tag v-for="tagKey in rowData.tags" :key="tagKey" style="margin-right: 6px" type="info" :borderd="false">
            {{ tagKey }}
          </n-tag>
        </template>

        <template v-if="column.key === 'actions'">
          <n-button size="small" @click="handleClickSendMail(rowData)">Send Email</n-button>
        </template>
      </template>

      <template #render-expand="{ rowData }: DataTableRenderExpandParams<RowData>">
        {{ `${rowData.name} is a good guy.` }}
      </template>
    </x-n-data-table>
  </n-space>
</template>
