<template>
  <div class="my_header">
    <div class="flex items-center h-full">
      <!-- 折叠图标 -->
      <aside-menu-fold-btn />
      <!-- 面包屑导航 -->
      <lc-breadcrumb />
    </div>
    <div class="flex items-center mr-12">
      <logout-button />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { AsideMenuFoldBtn, logoutButton, LcBreadcrumb } from './components'
</script>

<style scoped lang="less">
  .my_header {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
</style>
