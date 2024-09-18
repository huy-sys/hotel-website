<template>
  <div class="w-[1720px] h-[48px] mt-[74px] mb-0 mx-auto px-20 flex justify-between">
    <ul class="flex gap-8 items-start h-[80%]">
      <li class="h-full flex flex-col justify-between">
        <button class="font-semibold" @click="selectOption('Apartments')">Apartments</button>
        <div
          v-if="focusedOption === 'Apartments'"
          class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"
        ></div>
      </li>
      <li class="pt-[10px]">
        <div class="w-[6px] h-[6px] rounded-full bg-[#C2C6CC]"></div>
      </li>
      <li class="h-full flex flex-col justify-between">
        <button class="font-semibold" @click="selectOption('Houses')">Houses</button>
        <div
          v-if="focusedOption === 'Houses'"
          class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"
        ></div>
      </li>
      <li class="pt-[10px]">
        <div class="w-[6px] h-[6px] rounded-full bg-[#C2C6CC]"></div>
      </li>
      <li class="h-full flex flex-col justify-between">
        <button class="font-semibold" @click="selectOption('Villas')">Villas</button>
        <div
          v-if="focusedOption === 'Villas'"
          class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"
        ></div>
      </li>
      <li class="pt-[10px]">
        <div class="w-[6px] h-[6px] rounded-full bg-[#C2C6CC]"></div>
      </li>
      <li class="h-full flex flex-col justify-between">
        <button class="font-semibold" @click="selectOption('Homestays')">Homestays</button>
        <div
          v-if="focusedOption === 'Homestays'"
          class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"
        ></div>
      </li>
      <li class="pt-[10px]">
        <div class="w-[6px] h-[6px] rounded-full bg-[#C2C6CC]"></div>
      </li>
      <li class="h-full flex flex-col justify-between">
        <button class="font-semibold" @click="selectOption('More')">More</button>
        <div
          v-if="focusedOption === 'More'"
          class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"
        ></div>
      </li>
    </ul>
    <button class="w-[146px] h-[48px]">
        <IconFilter />
        <span class="font-semibold">Filters</span>
    </button>
  </div>
  <div
    class="flex w-[1207px] h-[431px] justify-between items-center relative z-[26] mt-[31px] mr-0 mb-0 ml-[80px]"
  >
    <div class="w-[382px] h-[431px] shrink-0 text-[0px] relative overflow-hidden">
      <span
        class="block h-[24px] text-[18px] font-bold leading-[21.942px] text-[#484848] relative text-left whitespace-nowrap z-[11] mt-[378px] mr-0 mb-0 ml-0"
        >Well Furnished Apartment</span
      ><span
        class="block h-[24px] text-[14px] font-medium leading-[17.066px] text-[#9a9a9a] relative text-left whitespace-nowrap z-[12] mt-[5px] mr-0 mb-0 ml-0"
        >100 Smart Street, LA, USA</span
      >
      <div
        class="w-[382px] h-[340px] bg-[#e0e2e6] rounded-[12px] absolute top-[8px] left-0 z-[1]"
      ></div>
      <div class="w-[30px] h-[30px] absolute top-[29px] left-[334px] overflow-hidden z-[2]">
        <div class="w-[26.129px] h-[22.79px] relative z-[3] mt-[3.748px] mr-0 mb-0 ml-[1.936px]">
          <div
            class="w-[109.57%] h-[110.97%] bg-[url(../assets/images/fdce42c3-9ac9-42f0-ba79-5c2286d9e3a2.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[-5.48%] left-[-4.78%] z-[4]"
          ></div>
        </div>
      </div>
      <span
        class="flex h-[27px] justify-start items-start text-[18px] font-semibold leading-[21.942px] text-[#9a9a9a] absolute top-[307px] left-[22px] text-left whitespace-nowrap z-10"
        >$ 1000 - 5000 USD</span
      >
      <div class="w-[55px] h-[10px] absolute top-[314px] left-[306px] z-[5]">
        <div
          class="w-[10px] h-[10px] bg-[url(../assets/images/d4c4a838-1956-4443-b11c-584b6172336e.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[30px] z-[6]"
        ></div>
        <div
          class="w-[10px] h-[10px] bg-[url(../assets/images/82642774-e772-4e04-96c1-dbdad3134eb7.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[45px] z-[7]"
        ></div>
        <div
          class="w-[10px] h-[10px] bg-[url(../assets/images/aef77bdb-1cdb-423c-859a-81384050d9c8.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[15px] z-[8]"
        ></div>
        <div
          class="w-[10px] h-[10px] bg-[url(../assets/images/65ecd935-2447-4f95-854e-91513f470cdd.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-0 z-[9]"
        ></div>
      </div>
    </div>
  </div>
  <span
    class="flex w-[336px] h-[40px] justify-start items-start text-[16px] font-bold leading-[19.504px] text-[#484848] relative text-left z-[136] mt-[176px] mr-0 mb-0 ml-[554px]"
    >Paginations or Load on scroll...</span
  >
</template>

<script setup lang="ts">
import IconFilter from '@/components/icons/IconFilter.vue';
import { ref } from 'vue'

const focusedOption = ref('Apartments')
const selectOption = (option: string) => {
  // Handle option selection
  console.log(`Selected option: ${option}`)
  focusedOption.value = option
}
</script>

<style scoped></style>
