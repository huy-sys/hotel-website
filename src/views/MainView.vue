<script lang="ts">
import { defineComponent } from 'vue'
import PropertyListing from '../components/MainView/index.vue'

export default defineComponent({
  components: {
    PropertyListing
  }
})
</script>

<template>
  <div class="main">
    <PropertyListing />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
