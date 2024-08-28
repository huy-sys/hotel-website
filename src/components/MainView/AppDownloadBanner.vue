<template>
  <section
    class="flex flex-wrap gap-5 justify-between self-center px-12 py-16 mt-24 max-w-full bg-gray-100 rounded-xl text-zinc-700 w-[1206px] max-md:px-5 max-md:mt-10"
  >
    <div class="flex flex-col items-start">
      <h2 class="text-4xl font-bold leading-[52px] w-[339px]">Download Our Mobile App</h2>
      <p class="mt-5 text-base font-medium leading-3 text-neutral-400">
        Available for free on these platforms
      </p>
      <div
        class="flex gap-3.5 self-stretch mt-12 text-base font-semibold whitespace-nowrap max-md:mt-10"
      >
        <a
          href="#"
          class="flex flex-1 gap-4 px-5 py-3 rounded-md bg-zinc-200 max-md:px-5"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4797d51473651692e85960d8db6e065da5d8ab9a7b7b7784f7e1e7298cafea3?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
            class="object-contain shrink-0 aspect-square w-[22px]"
            alt="PlayStore icon"
          />
          <span class="my-auto font-semibold">PlayStore</span>
        </a>
        <a
          href="#"
          class="flex flex-1 gap-4 px-5 py-3 rounded-md bg-zinc-200 max-md:px-5"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/00e3ae3380727f4615ef95d549d020e9fdc04521685754528ee99b226690f383?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
            class="object-contain shrink-0 w-6 aspect-square"
            alt="AppleStore icon"
          />
          <span class="font-semibold">AppleStore</span>
        </a>
      </div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b87c968bf2a038b5982d1a1fbe1087b6279c349ee639efc72ce79c2eda2527d3?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
      class="object-contain shrink-0 self-end mt-7 max-w-full aspect-square w-[204px]"
      alt="Mobile app preview"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppDownloadBanner",
});
</script>
