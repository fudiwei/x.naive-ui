<script lang="ts">
import { defineComponent } from 'vue';
import LogOutOutline from '~@/assets/icons/LogOutOutline.svg';
import PencilOutline from '~@/assets/icons/PencilOutline.svg';
import PersonCircleOutline from '~@/assets/icons/PersonCircleOutline.svg';

export default defineComponent({
  components: {
    PersonCircleOutline,
    PencilOutline,
    LogOutOutline
  }
});
</script>

<template>
  <x-n-dropdown>
    <template #trigger>
      <n-button>用户资料</n-button>
    </template>

    <x-n-dropdown-item key="profile" @click="() => console.log('profile')">
      <template #icon>
        <n-icon>
          <PersonCircleOutline />
        </n-icon>
      </template>
      用户资料
    </x-n-dropdown-item>

    <x-n-dropdown-item key="editProfile" @click="() => console.log('editProfile')">
      <template #icon>
        <n-icon>
          <PencilOutline />
        </n-icon>
      </template>

      编辑用户资料
    </x-n-dropdown-item>

    <x-n-dropdown-item key="logout" @click="() => console.log('logout')">
      <template #icon>
        <n-icon>
          <LogOutOutline />
        </n-icon>
      </template>

      退出登录
    </x-n-dropdown-item>
  </x-n-dropdown>
</template>
