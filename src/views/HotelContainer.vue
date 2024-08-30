<template>
  <el-container>
    <HeaderView />
    <el-main>
      <router-view />
      <NewsletterSignup />
    </el-main>
    <FooterView />
  </el-container>
</template>

<script setup lang="ts">
import FooterView from '@/components/FooterView.vue'
import HeaderView from '@/components/HeaderView.vue'
import NewsletterSignup from '@/components/MainView/NewsletterSignup.vue'
</script>

<style scoped>
.el-container {
  min-height: calc(100% - 60px);
}
</style>
