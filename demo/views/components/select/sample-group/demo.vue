﻿<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const options = [
      {
        type: 'group',
        label: 'Rubber Soul',
        key: 'Rubber Soul',
        children: [
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
      value: ref<string>(),
      options
    };
  }
});
</script>

<template>
  <n-space vertical>
    <x-n-select v-model:value="value" filterable>
      <x-n-select-option-group label="Rubber Soul">
        <x-n-select-option value="song0" disabled>Everybody's Got Something to Hide Except Me and My Monkey</x-n-select-option>
        <x-n-select-option value="song1">Drive My Car</x-n-select-option>
        <x-n-select-option value="song2">Norwegian Wood</x-n-select-option>
        <x-n-select-option value="song3" disabled>You Won't See</x-n-select-option>
        <x-n-select-option value="song4">Nowhere Man</x-n-select-option>
        <x-n-select-option value="song5">Think For Yourself</x-n-select-option>
        <x-n-select-option value="song6">The Word</x-n-select-option>
        <x-n-select-option value="song7" disabled>Michelle</x-n-select-option>
        <x-n-select-option value="song8">What goes on</x-n-select-option>
        <x-n-select-option value="song9">Girl</x-n-select-option>
        <x-n-select-option value="song10">I'm looking through you</x-n-select-option>
        <x-n-select-option value="song11">In My Life</x-n-select-option>
        <x-n-select-option value="song12">Wait</x-n-select-option>
      </x-n-select-option-group>
      <x-n-select-option-group label="Let It Be">
        <x-n-select-option value="Two Of Us">Two Of Us</x-n-select-option>
        <x-n-select-option value="Dig A Pony">Dig A Pony</x-n-select-option>
        <x-n-select-option value="Across The Universe">Across The Universe</x-n-select-option>
        <x-n-select-option value="I Me Mine">I Me Mine</x-n-select-option>
        <x-n-select-option value="Let It Be">Let It Be</x-n-select-option>
        <x-n-select-option value="Maggie Mae">Maggie Mae</x-n-select-option>
        <x-n-select-option value="I've Got A Feeling">I've Got A Feeling</x-n-select-option>
        <x-n-select-option value="One After 909">One After 909</x-n-select-option>
        <x-n-select-option value="The Long And Winding Road">The Long And Winding Road</x-n-select-option>
        <x-n-select-option value="For You Blue">For You Blue</x-n-select-option>
        <x-n-select-option value="Get Back">Get Back</x-n-select-option>
      </x-n-select-option-group>
    </x-n-select>

    <x-n-select v-model:value="value" filterable>
      <x-n-select-option-group v-for="(group, index) in options" :key="index" :label="group.label">
        <x-n-select-option v-for="option in group.children" :key="option.value" :value="option.value" :disabled="option.disabled">
          {{ option.label }}
        </x-n-select-option>
      </x-n-select-option-group>
    </x-n-select>
  </n-space>
</template>
