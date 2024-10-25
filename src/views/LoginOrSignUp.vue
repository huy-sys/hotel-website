<template>
  <div class="mx-auto max-w-[612px] rounded-[10px] px-6 py-5 shadow-[0px_0px_8px_rgba(194,198,204,0.6)]">
    <div class="card-header">
      <span class="text-lg font-bold">Card name</span>
      <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/ec3d822fa3a24e8687a1fab7765c30ec/441315da72b6d7bea546cd26e12de7e39775cd069a27650dbac2d5ae063ff7a1?apiKey=ec3d822fa3a24e8687a1fab7765c30ec&"
          class="object-contain shrink-0 self-start mt-1 aspect-square w-[15px]"
        />
    </div>
    
    <div>Footer content</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 28px;
    border-bottom: 1px solid #E0E2E6 ;
    margin-bottom: 48px;
}
</style>
