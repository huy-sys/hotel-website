<template>
  <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div
      class="flex flex-col grow py-6 w-full rounded-lg bg-zinc-200 max-md:mt-8"
    >
      <img
        :src="imageUrl"
        loading="lazy"
        class="object-contain self-end aspect-[1.13] w-[26px] max-md:mr-2.5"
        alt=""
      />
      <div
        class="flex flex-col items-start px-5 mt-36 max-md:px-5 max-md:mt-10"
      >
        <div v-if="rating" class="flex gap-1 mb-2">
          <img
            v-for="star in rating"
            :key="star"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22e6d4cb20d9c2e9db2885fe6b3c8c73577744c6f23f7f43e8e71fd0599e4a8a?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
            class="object-contain shrink-0 my-auto aspect-[6.8] w-[15px]"
            alt="Star rating"
          />
        </div>
        <div
          class="flex shrink-0 rounded-full bg-neutral-300 h-[70px] w-[70px]"
        ></div>
        <h3 class="self-stretch mt-1 text-lg font-bold leading-3 text-zinc-700">
          {{ title }}
        </h3>
        <p class="mt-6 text-sm font-medium text-neutral-400">{{ address }}</p>
        <p v-if="price" class="mt-4 text-lg font-semibold text-neutral-400">
          {{ price }}
        </p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PropertyCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: String,
      default: "",
    },
  },
});
</script>
