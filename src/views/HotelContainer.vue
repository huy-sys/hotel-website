<template>
  <el-container>
      <HeaderView />
    <el-main class="bg-white">
      <router-view />
    </el-main>
    <el-footer>
      <NewsletterSignup />
      <FooterView />
    </el-footer>
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

.el-footer, 
.el-main {
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}
</style>
