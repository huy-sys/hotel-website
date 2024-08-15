<template>
  <section
    class="flex flex-col self-stretch px-12 py-20 mt-28 w-full bg-gray-100 rounded-xl max-md:px-5 max-md:mt-10 max-md:mr-1 max-md:max-w-full"
  >
    <div
      class="flex flex-wrap gap-5 justify-between items-start max-md:max-w-full"
    >
      <div class="flex flex-col self-start">
        <h2 class="text-4xl font-bold leading-[52px] text-zinc-700 w-[328px]">
          Try Hosting With Us
        </h2>
        <p class="mt-7 text-base font-medium leading-3 text-neutral-400">
          Earn extra just by renting your property...
        </p>
      </div>
      <div
        class="self-end mt-14 text-8xl font-extrabold text-gray-200 max-md:mt-10 max-md:max-w-full max-md:text-4xl"
      >
        BANNER
      </div>
    </div>
    <a
      href="#"
      class="self-start px-12 py-6 mt-14 text-base font-bold text-white bg-zinc-700 rounded-[30px] max-md:px-5 max-md:mt-10"
    >
      Become A Host
    </a>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HostingBanner",
});
</script>
