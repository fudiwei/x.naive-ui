﻿<script lang="ts">
import { defineComponent } from 'vue';
import type { SelectRenderLabelParams, SelectRenderTagParams } from '@skit/x.naive-ui';

export default defineComponent({
  setup() {
    return {
      options: [
        {
          label: '07akioni',
          value: '07akioni',
          avatar: '../../../../assets/images/avatar.png'
        },
        {
          label: '08akioni',
          value: '08akioni',
          avatar: '../../../../assets/images/avatar.png'
        },
        {
          label: '09akioni',
          value: '09akioni',
          avatar: '../../../../assets/images/avatar.png'
        }
      ]
    };
  }
});
</script>

<template>
  <n-space vertical>
    <x-n-select :options="options" filterable>
      <template #render-label="{ option, label }: SelectRenderLabelParams">
        <div style="display: flex; align-items: center">
          <n-avatar :src="option.avatar" :round="true" size="small" />
          <div style="margin-left: 12px; padding: 4px 0">
            <div>
              {{ label }}
            </div>
            <n-text tag="div" :depth="3">description</n-text>
          </div>
        </div>
      </template>

      <template #render-tag="{ option }: SelectRenderTagParams">
        <div style="display: flex; align-items: center">
          <n-avatar style="margin-right: 12px" :src="option.avatar" :round="true" :size="24" />
          <span>
            {{ option.label }}
          </span>
        </div>
      </template>
    </x-n-select>

    <x-n-select multiple :options="options" filterable>
      <template #render-label="{ option, label }: SelectRenderLabelParams">
        <div style="display: flex; align-items: center">
          <n-avatar :src="option.avatar" :round="true" size="small" />
          <div style="margin-left: 12px; padding: 4px 0">
            <div>
              {{ label }}
            </div>
            <n-text tag="div" :depth="3">description</n-text>
          </div>
        </div>
      </template>

      <template #render-tag="{ option, close }: SelectRenderTagParams">
        <n-tag style="padding: 0 6px 0 4px" :round="true" :closable="true" @close.stop="() => close()">
          <div style="display: flex; align-items: center">
            <n-avatar style="margin-right: 4px" :src="option.avatar" :round="true" :size="22" />
            <span>
              {{ option.label }}
            </span>
          </div>
        </n-tag>
      </template>
    </x-n-select>
  </n-space>
</template>
