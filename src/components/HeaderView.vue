<template>
  <header
    class="flex flex-col items-center pt-1.5 pb-20 w-full max-md:max-w-full banner-header-image"
  >
    <nav
      class="mb-28 flex overflow-hidden flex-wrap gap-10 self-stretch px-20 py-1.5 w-full bg-white bg-opacity-0 max-md:px-5 max-md:max-w-full"
    >
      <h1 class="grow shrink my-auto text-4xl font-extrabold text-zinc-700 w-[86px]">LOGO</h1>
      <div class="flex flex-wrap gap-10 font-semibold">
        <ul
          class="flex flex-wrap flex-auto gap-8 my-auto text-base text-zinc-700 max-md:max-w-full"
        >
          <li><a href="#" class="font-semibold grow">Find a Property</a></li>
          <li><a href="#" class="font-semibold basis-auto">Share Stories</a></li>
          <li><a href="#" class="font-semibold basis-auto">Rental Guides</a></li>
          <li><a href="#" class="font-semibold basis-auto">Download Mobile App</a></li>
        </ul>
        <div class="flex shrink gap-2.5 text-sm text-white basis-auto grow-0">
          <a href="#" class="px-10 py-2 my-auto rounded-3xl bg-zinc-700 max-md:px-5">
            Become A Host
          </a>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b13591404c77a8bf9d30106bd3a1088e7707c427bf623b266592bb51bcf11e9a?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
            class="object-contain shrink-0 max-w-full aspect-[1.85] w-[109px]"
            alt=""
          />
        </div>
      </div>
    </nav>
    <div
      class="mt-28 text-9xl font-extrabold text-gray-200 max-md:mt-10 max-md:max-w-full max-md:text-4xl"
    ></div>
    <!-- <div class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"></div> -->
    <nav
      class="flex gap-8 mt-40 items-start text-base font-semibold whitespace-nowrap text-zinc-700 w-[430px]"
    >
      <h1 class="grow self-stretch text-4xl font-bold">FIND</h1>
      <ul class="flex gap-8">
        <li>
          <button class="font-semibold" @click="selectOption('Rooms')">Rooms</button>
          <div
            v-if="focusedOption === 'Rooms'"
            class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"
          ></div>
        </li>
        <li>
          <button class="font-semibold" @click="selectOption('Flats')">Flats</button>
          <div
            v-if="focusedOption === 'Flats'"
            class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"
          ></div>
        </li>
        <li>
          <button class="font-semibold" @click="selectOption('Hostels')">Hostels</button>
          <div
            v-if="focusedOption === 'Hostels'"
            class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"
          ></div>
        </li>
        <li>
          <button class="font-semibold" @click="selectOption('Villas')">Villas</button>
          <div
            v-if="focusedOption === 'Villas'"
            class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"
          ></div>
        </li>
      </ul>
    </nav>

    <form
      class="flex gap-5 justify-between items-center py-2 pr-2 pl-8 mt-9 max-w-full font-semibold bg-white rounded-[35px] w-[794px] max-md:pl-5"
    >
      <div class="flex flex-col self-stretch my-auto">
        <label for="location" class="font-semibold self-start text-xs text-zinc-700"
          >Location</label
        >
        <input
          type="text"
          id="location"
          placeholder="Which city do you prefer?"
          class="mt-3 text-sm text-neutral-300"
        />
      </div>
      <div class="flex gap-4 self-stretch my-auto">
        <div class="shrink-0 w-px border border-solid border-zinc-300 h-[33px]"></div>
        <div class="flex flex-col self-start">
          <label for="checkIn" class="font-semibold self-start text-xs text-zinc-700"
            >Check In</label
          >
          <input
            type="date"
            id="checkIn"
            placeholder="Add Dates"
            class="mt-3 text-sm text-neutral-300"
          />
        </div>
      </div>
      <div class="flex gap-4 self-stretch my-auto">
        <div class="shrink-0 w-px border border-solid border-zinc-300 h-[33px]"></div>
        <div class="flex flex-col self-start">
          <label for="checkOut" class="font-semibold self-start text-xs text-zinc-700"
            >Check Out</label
          >
          <input
            type="date"
            id="checkOut"
            placeholder="Add Dates"
            class="mt-3 text-sm text-neutral-300"
          />
        </div>
      </div>
      <div class="flex gap-3.5 self-stretch my-auto">
        <div class="shrink-0 w-px border border-solid border-zinc-300 h-[33px]"></div>
        <div class="flex flex-col self-start">
          <label for="guests" class="font-semibold self-start text-xs text-zinc-700">Guests</label>
          <input
            type="number"
            id="guests"
            placeholder="Add Guests"
            class="mt-3 text-sm text-neutral-300"
          />
        </div>
      </div>
      <button type="submit" aria-label="Search">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f1d481ae89ba6816fdd35f3c920b02b63271681a6bcde2ffb9abf5a6d56c617?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
          class="object-contain shrink-0 self-stretch aspect-square w-[54px]"
          alt=""
        />
      </button>
    </form>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const focusedOption = ref('Rooms')
const selectOption = (option: string) => {
  // Handle option selection
  console.log(`Selected option: ${option}`)
  focusedOption.value = option
}
</script>

<style scoped></style>
