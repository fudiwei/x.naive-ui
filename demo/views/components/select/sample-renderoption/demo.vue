﻿<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { SelectOptions, SelectRenderOptionParams } from '@skit/x.naive-ui';

export default defineComponent({
  setup() {
    const options: SelectOptions = [
      {
        label: "Everybody's Got Something to Hide Except Me and My Monkey",
        value: 'song0',
        disabled: true
      },
      {
        label: 'Drive My Car',
        value: 'song1'
      },
      {
        label: 'Norwegian Wood',
        value: 'song2'
      },
      {
        label: "You Won't See",
        value: 'song3',
        disabled: true
      },
      {
        label: 'Nowhere Man',
        value: 'song4'
      },
      {
        label: 'Think For Yourself',
        value: 'song5'
      },
      {
        label: 'The Word',
        value: 'song6'
      },
      {
        label: 'Michelle',
        value: 'song7',
        disabled: true
      },
      {
        label: 'What goes on',
        value: 'song8'
      },
      {
        label: 'Girl',
        value: 'song9'
      },
      {
        label: "I'm looking through you",
        value: 'song10'
      },
      {
        label: 'In My Life',
        value: 'song11'
      },
      {
        label: 'Wait',
        value: 'song12'
      }
    ];
    return {
      options: ref(options)
    };
  }
});
</script>

<template>
  <x-n-select :options="options">
    <template #render-option="{ vnode, option }: SelectRenderOptionParams">
      <n-tooltip>
        <template #trigger>
          <component :is="vnode" />
        </template>
        {{ 'Rubber Soul -' + option.label }}
      </n-tooltip>
    </template>
  </x-n-select>
</template>
