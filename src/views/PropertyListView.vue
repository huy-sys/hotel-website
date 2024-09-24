 <template>
  <div class="px-20 w-[1720px] mx-auto">
    <div class="h-[48px] mt-[74px] mb-0 flex justify-between">
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
      <button
        class="w-[146px] flex items-center h-[80%] rounded-full border-[1px] mr-[25px] justify-center border-[#c9c9c9] hover:bg-[#c9c9c9]"
      >
        <IconFilter />
        <span class="font-semibold ml-[6px]">Filters</span>
      </button>
    </div>
    <section class="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
      <div class="flex flex-wrap gap-5 max-md:flex-col">
        <PropertyFeaturesCard
          v-for="(property, index) in visibleProperties"
          :key="index"
          :id="property.id"
          :title="property.title"
          :address="property.address"
          :imageUrl="property.imageUrl"
          :price="property.price"
          :features_images="property.features_images"
        />
      </div>
    </section>

    <div class="mt-10 flex justify-center">
      <!-- Ẩn nút nếu tất cả items đã hiển thị hoặc đang loading -->
      <button
        v-if="!isLoading && itemsToShow < featuredProperties.length"
        class="btn_showmore"
        @click="showMoreItems"
      >
        <IconDoubleDown />
      </button>

      <div v-else-if="isLoading" class="loading-spinner">
        <!-- Hiển thị icon loading -->
        <div class="spinner"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { featuredProperty } from '@/assets/types/types'
import IconDoubleDown from '@/components/icons/IconDoubleDown.vue'
import IconFilter from '@/components/icons/IconFilter.vue'
import PropertyFeaturesCard from '@/components/MainView/PropertyFeaturesCard.vue'
import { computed, ref } from 'vue'

const focusedOption = ref('Apartments')
const selectOption = (option: string) => {
  // Handle option selection
  console.log(`Selected option: ${option}`)
  focusedOption.value = option
}
const featuredProperties = ref<featuredProperty[]>([
  {
    id: 1,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 2,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 3,
    title: 'Beach House Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 4,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 5,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 6,
    title: 'Double Size Room',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 7,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 8,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 9,
    title: 'Beach House Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 10,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 11,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 12,
    title: 'Double Size Room',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 13,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 14,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 15,
    title: 'Beach House Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 16,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 17,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 18,
    title: 'Double Size Room',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 19,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 20,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 21,
    title: 'Beach House Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 22,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 23,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 24,
    title: 'Double Size Room',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 25,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 26,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 27,
    title: 'Beach House Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 28,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 29,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 30,
    title: 'Double Size Room',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 31,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 32,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 33,
    title: 'Beach House Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 34,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 35,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  },
  {
    id: 36,
    title: 'Double Size Room',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ]
  }
])

const itemsToShow = ref(12)
const isLoading = ref(false)
// Tính toán danh sách các items hiển thị
const visibleProperties = computed(() => featuredProperties.value.slice(0, itemsToShow.value))

// Hàm xử lý khi bấm nút "Show More"
const showMoreItems = () => {
  isLoading.value = true // Bắt đầu loading

  // Giả lập delay để hiển thị loading
  setTimeout(() => {
    itemsToShow.value += 12 // Tăng số lượng item hiển thị
    isLoading.value = false // Kết thúc loading
  }, 1500) // Thời gian delay 1.5 giây
}

</script>

<style scoped>
.btn_showmore:hover {
  transform: translateY(5px) scale(1.05);
  transition: all 0.2s ease-in;
}
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Thêm style cho spinner nếu cần */
}
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #b1b3b4;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
