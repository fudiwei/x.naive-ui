<script lang="ts" setup>
import { ref, computed } from 'vue';
import VueLogo from '~@/assets/logos/vue.svg';

const $props = defineProps({
  title: {
    type: String,
    required: true
  },
  anchor: {
    type: String,
    required: true
  },
  tsCode: {
    type: String,
    required: true
  },
  jsCode: {
    type: String,
    required: true
  }
});

const showCode = ref(false);
const showTs = ref(true);
const sfcTsCode = computed(() => decodeURIComponent($props.tsCode));
const sfcJsCode = computed(() => decodeURIComponent($props.jsCode));

function handleClickTitle() {
  window.location.href = '#' + $props.anchor;
}
</script>

<template>
  <n-card
    :id="anchor"
    :segmented="{
      footer: true
    }"
    footer-style="padding: 0;"
  >
    <template #header>
      <span style="cursor: pointer" @click="handleClickTitle">
        {{ '# ' + title }}
      </span>
    </template>

    <template #header-extra>
      <n-tooltip>
        <template #trigger>
          <n-button size="tiny" quaternary @click="() => (showCode = !showCode)">
            <template #icon>
              <n-icon>
                <VueLogo />
              </n-icon>
            </template>
            Code
          </n-button>
        </template>
        {{ showCode ? '隐藏代码' : '显示代码' }}
      </n-tooltip>
    </template>

    <div v-if="$slots.content">
      <slot name="content" />
      <n-divider />
    </div>

    <div v-if="$slots.demo">
      <slot name="demo" />
    </div>

    <template #footer>
      <n-collapse-transition :show="showCode">
        <n-tabs size="small" type="segment" style="padding: 12px 24px 0 24px" :value="showTs ? 'ts' : 'js'" @update:value="($e) => (showTs = $e === 'ts')">
          <n-tab name="ts">TypeScript</n-tab>
          <n-tab name="js">JavaScript</n-tab>
        </n-tabs>
        <n-scrollbar x-scrollable content-style="padding: 20px 24px;" style="height: auto">
          <n-code v-if="showTs" language="html" :code="sfcTsCode" />
          <n-code v-else language="html" :code="sfcJsCode" />
        </n-scrollbar>
      </n-collapse-transition>
    </template>
  </n-card>
</template>
