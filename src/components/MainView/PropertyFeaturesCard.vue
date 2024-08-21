<template>
  <article class="flex flex-col items-start text-lg text-neutral-400 w-[32.2%] shadow_card rounded-b-lg">
    <div
      class="flex flex-col self-stretch px-6 py-6 w-full font-semibold rounded-t-lg bg-zinc-200 max-md:pl-5"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
        alt="Property image"
        class="object-contain self-end aspect-square w-[30px]"
      />
      <div class="flex gap-5 justify-between mt-64 max-md:mt-10 max-md:mr-1">
        <div>{{ price }}</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1e8ddbf215ebf940e5998cbf1563ee4d6c580adad3c45e3abd6d807e48d4f90?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
          alt="Property rating"
          class="object-contain shrink-0 self-start mt-2 aspect-[5.49] w-[55px]"
        />
      </div>
    </div>
    <h2 class="px-3 mt-8 font-bold text-zinc-700">{{ title }}</h2>
    <p class="px-3 mt-3 text-sm font-medium">{{ address }}</p>
    <div class="px-3 my-3 flex gap-6 items-center text-base whitespace-nowrap text-zinc-700">
      <PropertyFeatures
        :features="features"
      ></PropertyFeatures>
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import PropertyFeatures from './PropertyFeatures.vue';

export default defineComponent({
  name: 'PropertyFeaturesCard',
  components: {
    PropertyFeatures
  },
  props: {
    title: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    price: {
      type: String,
      default: ''
    },
    features: {
      type: Object,
      required: true
    },
  },
  setup() {
    
  }
})
</script>
<style scoped>
.shadow_card {
  box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.10);
}
</style>