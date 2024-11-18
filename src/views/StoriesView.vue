<template>
    <main class="self-center mt-24 mx-auto w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <section class="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col items-start w-full max-md:mt-10">
            <h2 class="text-4xl font-extrabold text-zinc-700">Stories</h2>
            <div class="flex gap-6 self-stretch mt-9">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/ec3d822fa3a24e8687a1fab7765c30ec/8c5e96d08772194357526e16fd70b1bef2256d5d2b5789017621c0ee46f9d9b0?apiKey=ec3d822fa3a24e8687a1fab7765c30ec&" alt="" class="object-contain shrink-0 w-20 aspect-square" />
              <div class="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                <h3 class="self-start text-lg font-bold text-zinc-700">Add Your Story</h3>
                <p class="mt-2.5 text-sm font-medium text-neutral-400">Share your moments, experiences...</p>
              </div>
            </div>
            <h3 class="mt-16 text-2xl font-bold text-zinc-700 max-md:mt-10">All Stories</h3>
            <ul class="flex flex-col gap-5 mt-9 w-full">
              <li class="flex gap-5">
                <div class="flex flex-col">
                  <div class="flex shrink-0 rounded-full bg-neutral-400 h-[70px] w-[70px]"></div>
                  <div class="flex shrink-0 mt-5 rounded-full bg-neutral-300 h-[70px] w-[70px]"></div>
                </div>
                <div class="flex flex-col my-auto text-lg font-bold text-zinc-700">
                  <h4 class="max-md:mr-2">John Doberman</h4>
                  <p class="mt-3.5 text-sm font-medium text-neutral-400">Shared On: 12 Mar 2021</p>
                  <h4 class="self-start mt-12 max-md:mt-10">Harry Parker</h4>
                  <p class="mt-2.5 text-sm font-medium text-neutral-400">Shared On: 12 Mar 2021</p>
                </div>
              </li>
              <li class="flex gap-5 mt-5">
                <div class="flex shrink-0 rounded-full bg-neutral-300 h-[70px] w-[70px]"></div>
                <div class="flex flex-col my-auto">
                  <h4 class="self-start text-lg font-bold text-zinc-700">Peter Potter</h4>
                  <p class="mt-3.5 text-sm font-medium text-neutral-400">Shared On: 12 Mar 2021</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section class="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
          <div class="flex shrink-0 mx-auto max-w-full bg-gray-200 rounded-xl h-[574px] w-[774px] max-md:mt-10"></div>
        </section>
      </div>
    </main>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>