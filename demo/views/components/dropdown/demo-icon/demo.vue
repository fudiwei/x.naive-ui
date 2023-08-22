<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<template>
    <x-n-dropdown>
        <template #trigger>
            <n-button>用户资料</n-button>
        </template>

        <x-n-dropdown-item key="profile">
            <template #icon>
                <n-icon>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 0 1-6.14-.32a124.27 124.27 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </n-icon>
            </template>
            用户资料
        </x-n-dropdown-item>

        <x-n-dropdown-item key="editProfile">
            <template #icon>
                <n-icon>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="44"
                            d="M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13l-24.1-24.1z"
                        ></path>
                        <path
                            d="M413.07 74.84l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="44"
                        ></path>
                    </svg>
                </n-icon>
            </template>

            编辑用户资料
        </x-n-dropdown-item>

        <x-n-dropdown-item key="logout">
            <template #icon>
                <n-icon>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40"
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
                            d="M368 336l80-80l-80-80"
                        ></path>
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                            d="M176 256h256"
                        ></path>
                    </svg>
                </n-icon>
            </template>

            退出登录
        </x-n-dropdown-item>
    </x-n-dropdown>
</template>
