﻿<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { SelectOptions, SelectRenderLabelParams } from '@skit/x.naive-ui';
import MusicalNoteOutline from '~@/assets/icons/MusicalNoteOutline.svg';

export default defineComponent({
  components: {
    MusicalNoteOutline
  },

  setup() {
    const options: SelectOptions = [
      {
        type: 'group',
        label: 'Rubber Soul',
        key: 'Rubber Soul Album',
        children: [
          {
            label: "Everybody's Got Something to Hide Except Me and My Monkey",
            value: 'song0',
            disabled: true
          },
          {
            label: 'Drive My Car',
            value: 'song1',
            style: {
              color: 'red'
            }
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
        ]
      },
      {
        type: 'group',
        label: 'Let It Be',
        key: 'Let It Be Album',
        children: [
          {
            label: 'Two Of Us',
            value: 'Two Of Us'
          },
          {
            label: 'Dig A Pony',
            value: 'Dig A Pony'
          },
          {
            label: 'Across The Universe',
            value: 'Across The Universe'
          },
          {
            label: 'I Me Mine',
            value: 'I Me Mine'
          },
          {
            label: 'Dig It',
            value: 'Dig It'
          },
          {
            label: 'Let It Be',
            value: 'Let It Be'
          },
          {
            label: 'Maggie Mae',
            value: 'Maggie Mae'
          },
          {
            label: "I've Got A Feeling",
            value: "I've Got A Feeling"
          },
          {
            label: 'One After 909',
            value: 'One After 909'
          },
          {
            label: 'The Long And Winding Road',
            value: 'The Long And Winding Road'
          },
          {
            label: 'For You Blue',
            value: 'For You Blue'
          },
          {
            label: 'Get Back',
            value: 'Get Back'
          }
        ]
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
    <template #render-label="{ option, selected }: SelectRenderLabelParams">
      <template v-if="option.type === 'group'">
        {{ option.label + '(Cool!)' }}
      </template>
      <template v-else>
        <n-icon style="vertical-align: -0.15em; margin-right: 4px">
          <MusicalNoteOutline />
        </n-icon>
        <span :style="{ color: selected ? 'green' : undefined }">
          {{ option.label }}
        </span>
      </template>
    </template>
  </x-n-select>
</template>
