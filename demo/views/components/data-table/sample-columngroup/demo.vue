﻿<script lang="ts">
import { defineComponent, ref } from 'vue';

function createData() {
  return Array.from({ length: 50 }).map((_, i) => {
    return {
      key: i,
      name: `name_${i}`,
      physicsAttack: `physicsAttack_${i}`,
      magicAttack: `magicAttack_${i}`,
      defend: `defend_${i}`,
      speed: `speed_${i}`
    };
  });
}

export default defineComponent({
  setup() {
    return {
      data: ref(createData()),
      pagination: ref({
        pageSize: 10
      })
    };
  }
});
</script>

<template>
  <x-n-data-table :data="data" :single-line="false" :pagination="pagination">
    <x-n-data-table-column key="name" title="Title" />
    <x-n-data-table-column key="attrs" title="Attributes">
      <x-n-data-table-column key="attack" title="Attack">
        <x-n-data-table-column key="physicsAttack" title="Physics Attack" />
        <x-n-data-table-column key="magicAttack" title="Magic Attack" />
      </x-n-data-table-column>
      <x-n-data-table-column key="defend" title="Defend" />
      <x-n-data-table-column key="speed" title="Speed" />
    </x-n-data-table-column>
  </x-n-data-table>
</template>
