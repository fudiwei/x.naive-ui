<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
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
            <a
                href="https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F"
                target="_blank"
                rel="noopenner noreferrer"
            >
                且听风吟
            </a>

            <template #icon>
                <n-icon>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                        ></path>
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                            d="M256 160v288"
                        ></path>
                    </svg>
                </n-icon>
            </template>
        </x-n-menu-item>

        <x-n-menu-item key="pinball-1973" disabled>
            1973年的弹珠玩具

            <template #icon>
                <n-icon>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                        ></path>
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                            d="M256 160v288"
                        ></path>
                    </svg>
                </n-icon>
            </template>

            <template #submenu>
                <x-n-menu-item key="rat" label="鼠" />
            </template>
        </x-n-menu-item>

        <x-n-menu-item key="a-wild-sheep-chase" label="寻羊冒险记" disabled>
            <template #icon>
                <n-icon>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                        ></path>
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                            d="M256 160v288"
                        ></path>
                    </svg>
                </n-icon>
            </template>
        </x-n-menu-item>

        <x-n-menu-item key="dance-dance-dance">
            舞，舞，舞

            <template #icon>
                <n-icon>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                        ></path>
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                            d="M256 160v288"
                        ></path>
                    </svg>
                </n-icon>
            </template>

            <template #submenu>
                <x-n-menu-item-group key="people" label="人物">
                    <x-n-menu-item key="narrator">
                        叙事者

                        <template #icon>
                            <n-icon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                    ></path>
                                    <path
                                        d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        stroke-width="32"
                                    ></path>
                                </svg>
                            </n-icon>
                        </template>
                    </x-n-menu-item>

                    <x-n-menu-item key="sheep-man">
                        羊男

                        <template #icon>
                            <n-icon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                    ></path>
                                    <path
                                        d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        stroke-width="32"
                                    ></path>
                                </svg>
                            </n-icon>
                        </template>
                    </x-n-menu-item>
                </x-n-menu-item-group>

                <x-n-menu-item key="beverage">
                    饮品

                    <template #icon>
                        <n-icon>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="M398.57 80H113.43v16S87.51 272 256 272S398.57 96 398.57 96z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M256 272v160"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M352 432H160"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M112 160h288"
                                ></path>
                            </svg>
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
