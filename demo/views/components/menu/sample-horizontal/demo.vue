﻿<script lang="ts">
import { defineComponent, ref } from 'vue';
import BookOutline from '~@/assets/icons/BookOutline.svg';
import PersonOutline from '~@/assets/icons/PersonOutline.svg';
import WineOutline from '~@/assets/icons/WineOutline.svg';

export default defineComponent({
  components: {
    BookOutline,
    PersonOutline,
    WineOutline
  },

  setup() {
    return {
      activeKey: ref<string>()
    };
  }
});
</script>

<template>
  <x-n-menu v-model:value="activeKey" mode="horizontal">
    <x-n-menu-item key="hear-the-wind-sing">
      <a href="https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F" target="_blank" rel="noopenner noreferrer">且听风吟</a>

      <template #icon>
        <n-icon>
          <BookOutline />
        </n-icon>
      </template>
    </x-n-menu-item>

    <x-n-menu-item key="pinball-1973" disabled>
      1973年的弹珠玩具

      <template #icon>
        <n-icon>
          <BookOutline />
        </n-icon>
      </template>

      <template #submenu>
        <x-n-menu-item key="rat" label="鼠" />
      </template>
    </x-n-menu-item>

    <x-n-menu-item key="a-wild-sheep-chase" label="寻羊冒险记" disabled>
      <template #icon>
        <n-icon>
          <BookOutline />
        </n-icon>
      </template>
    </x-n-menu-item>

    <x-n-menu-item key="dance-dance-dance">
      舞，舞，舞

      <template #icon>
        <n-icon>
          <BookOutline />
        </n-icon>
      </template>

      <template #submenu>
        <x-n-menu-item-group key="people" label="人物">
          <x-n-menu-item key="narrator">
            叙事者

            <template #icon>
              <n-icon>
                <PersonOutline />
              </n-icon>
            </template>
          </x-n-menu-item>

          <x-n-menu-item key="sheep-man">
            羊男

            <template #icon>
              <n-icon>
                <PersonOutline />
              </n-icon>
            </template>
          </x-n-menu-item>
        </x-n-menu-item-group>

        <x-n-menu-item key="beverage">
          饮品

          <template #icon>
            <n-icon>
              <WineOutline />
            </n-icon>
          </template>

          <template #submenu>
            <x-n-menu-item key="whisky" label="威士忌" />
          </template>
        </x-n-menu-item>

        <x-n-menu-item key="food">
          食物

          <template #submenu>
            <x-n-menu-item key="sandwich" label="三明治" />
          </template>
        </x-n-menu-item>

        <x-n-menu-item key="the-past-increases-the-future-recedes">过去增多，未来减少</x-n-menu-item>
      </template>
    </x-n-menu-item>
  </x-n-menu>
</template>
