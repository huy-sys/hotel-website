<template>
  <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div class="flex flex-col grow items-start max-md:mt-8">
      <div
        class="flex shrink-0 self-stretch rounded-xl bg-zinc-200 h-[340px]"
      ></div>
      <h3 class="mt-8 text-lg font-bold text-zinc-700">{{ title }}</h3>
      <p class="mt-3 text-sm font-semibold text-neutral-400">{{ category }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogPost",
  props: {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
});
</script>
