<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
      <div class="p-4">
        <RouterView />
      </div>
  </el-config-provider>
</template>

<style>
#app {
  color: var(--ep-text-color-primary);
}


</style>
