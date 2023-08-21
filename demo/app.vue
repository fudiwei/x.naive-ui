<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import hljs from './utils/hljs';

const $router = useRouter();

const menuOptions = computed(() => {
    const routes = $router.options.routes.filter((e) => e.meta?.sider);
    return [
        {
            type: 'group',
            key: '/components',
            label: 'Components',
            children: routes.map((e) => ({
                key: e.path,
                label: e.meta?.title
            }))
        }
    ];
});
const menuActiveKey = ref('');

$router.afterEach((to) => {
    menuActiveKey.value = to.path;
});

function handleUpdateMenuActiveKey(key: string) {
    menuActiveKey.value = key;
    $router.push({ path: key });
}
</script>

<template>
    <n-config-provider :hljs="hljs">
        <n-message-provider>
            <n-layout style="width: 100%; height: 100%" has-sider>
                <n-layout-sider style="height: 100%" bordered>
                    <n-menu :options="menuOptions" :value="menuActiveKey" @update:value="handleUpdateMenuActiveKey" />
                </n-layout-sider>
                <n-layout-content content-style="padding: 24px; max-height: 100vh; overflow-y: auto">
                    <router-view />
                </n-layout-content>
            </n-layout>
        </n-message-provider>
    </n-config-provider>
</template>

<style>
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    width: 100%;
    height: 100%;
    font-size: 16px;
}

body {
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif;
    overflow-x: auto;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
