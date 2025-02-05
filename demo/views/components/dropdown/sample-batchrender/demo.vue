<script lang="ts">
import { defineComponent } from 'vue';
import CashOutline from '~@/assets/icons/CashOutline.svg';
import type { DropdownRenderLabelParams } from '@skit/x.naive-ui';

const options = [
  {
    type: 'group',
    label: '主角和吃的',
    key: 'main',
    children: [
      {
        label: '杰·盖茨比',
        key: 'jay gatsby'
      },
      {
        label: '黛西·布坎南',
        key: 'daisy buchanan'
      },
      {
        label: '尼克·卡拉威',
        key: 'nick carraway'
      },
      {
        label: '吃的',
        key: 'food',
        children: [
          {
            label: '鸡肉',
            key: 'chicken'
          },
          {
            label: '牛肉',
            key: 'beef'
          }
        ]
      }
    ]
  }
];

export default defineComponent({
  components: {
    CashOutline
  },

  setup() {
    return {
      options
    };
  }
});
</script>

<template>
  <x-n-dropdown :options="options" placement="bottom-start" trigger="click">
    <template #trigger>
      <n-button>我是批量渲染</n-button>
    </template>

    <template #render-label="{ option }: DropdownRenderLabelParams">
      <template v-if="option.type === 'group'">
        {{ option.label }}
      </template>
      <template v-else>
        <a>{{ option.label }}</a>
      </template>
    </template>

    <template #render-icon>
      <n-icon>
        <CashOutline />
      </n-icon>
    </template>
  </x-n-dropdown>
</template>
