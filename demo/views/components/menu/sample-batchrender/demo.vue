﻿<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { MenuOption, MenuRenderIconParams, MenuRenderLabelParams } from '@skit/x.naive-ui';
import BookmarkOutline from '~@/assets/icons/BookmarkOutline.svg';
import CaretDownOutline from '~@/assets/icons/CaretDownOutline.svg';

const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199'
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator'
          },
          {
            label: '羊男',
            key: 'sheep-man'
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky',
            href: 'https://baike.baidu.com/item/%E5%A8%81%E5%A3%AB%E5%BF%8C%E9%85%92/2959816?fromtitle=%E5%A8%81%E5%A3%AB%E5%BF%8C&fromid=573&fr=aladdin'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
];

export default defineComponent({
  components: {
    BookmarkOutline,
    CaretDownOutline
  },

  setup() {
    return {
      collapsed: ref(true),
      menuOptions
    };
  }
});
</script>

<template>
  <n-space vertical>
    <n-switch v-model:value="collapsed" />
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="() => (collapsed = true)"
        @expand="() => (collapsed = false)"
      >
        <x-n-menu :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions">
          <template #render-label="{ option }: MenuRenderLabelParams">
            <template v-if="'href' in option">
              <a :href="option.href" target="_blank">{{ option.label }}</a>
            </template>
            <template v-else>
              {{ option.label }}
            </template>
          </template>

          <template #render-icon="{ option }: MenuRenderIconParams">
            <template v-if="option.key === 'food'">
              <!--不再渲染图标及占位符-->
            </template>
            <template v-else-if="option.key === 'sheep-man'">
              <n-icon><!--渲染图标占位符以保持缩进--></n-icon>
            </template>
            <template v-else>
              <n-icon><BookmarkOutline /></n-icon>
            </template>
          </template>

          <template #render-expand-icon>
            <n-icon>
              <CaretDownOutline />
            </n-icon>
          </template>
        </x-n-menu>
      </n-layout-sider>
      <n-layout>
        <span>内容</span>
      </n-layout>
    </n-layout>
  </n-space>
</template>
