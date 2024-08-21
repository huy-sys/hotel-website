<template>
  <section
    class="self-center mt-24 w-full max-w-[1207px] max-md:mt-10 max-md:max-w-full"
  >
    <div class="flex gap-5 max-md:flex-col">
      <div class="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
        <div
          class="flex flex-col items-start w-full text-base font-bold text-zinc-700 max-md:mt-10 max-md:max-w-full"
        >
          <h2 class="text-4xl leading-10">
            Discover More About Property Rental
          </h2>
          <div
            class="flex shrink-0 mt-11 h-1.5 rounded bg-zinc-700 w-[140px] max-md:mt-10"
          ></div>
          <p
            class="self-stretch mt-9 text-base leading-7 text-neutral-400 max-md:max-w-full"
          >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
          <div class="flex gap-10 mt-12 max-md:mt-10">
            <a href="#" class="font-semibold basis-auto">Ask A Question</a>
            <a href="#" class="font-semibold basis-auto">Find A Property</a>
          </div>
          <a
            href="#"
            class="px-14 py-3 mt-12 text-white bg-zinc-700 rounded-[30px] max-md:px-5 max-md:mt-10"
          >
            Discover More
          </a>
        </div>
      </div>
      <div class="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
        <div
          class="flex shrink-0 mx-auto mt-2.5 max-w-full bg-gray-200 rounded-xl h-[437px] w-[382px] max-md:mt-10"
        ></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutSection",
});
</script>
