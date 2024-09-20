<template>
  <article
    class="flex flex-col items-start text-lg text-neutral-400 w-[32.2%] shadow_card rounded-b-lg"
    @click="goDetailItem"
  >
    <div
      class="flex flex-col self-stretch w-full font-semibold rounded-t-lg bg-zinc-200 max-md:pl-5"
    >
      <Carousel :itemsToShow="1" :paginationEnabled="true" :wrapAround="true">
        <Slide v-for="(image, index) in images" :key="index">
          <img :src="image" class="carousel__item h-[300px] w-full rounded-t-lg bg-cover bg-no-repeat" />
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
      <img
        src="../../assets/icons/Heart.svg"
        alt="Property image"
        class="object-contain self-end aspect-square w-[30px] absolute m-2"
      />
      <div class="absolute mt-64 text-white font-semibold ml-2">{{ price }}</div>
    </div>
    <h2 class="px-3 mt-8 font-bold text-zinc-700">{{ title }}</h2>
    <p class="px-3 mt-3 text-sm font-medium">{{ address }}</p>
    <div class="px-3 my-3 flex gap-6 items-center text-base whitespace-nowrap text-zinc-700">
      <PropertyFeatures :features="features" v-if="features"></PropertyFeatures>
    </div>
  </article>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';
import PropertyFeatures from './PropertyFeatures.vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import feature1 from '@/assets/images/feature_1.webp';
import feature2 from '@/assets/images/feature_2.webp';
import feature3 from '@/assets/images/feature_3.webp';
import feature4 from '@/assets/images/feature_4.webp';

const props = defineProps({
  id: {
    type: Number
  }, // Thêm ID để nhận diện property
  title: {
    type: String
  },
  address: {
    type: String
  },
  imageUrl: {
    type: String
  },
  price: {
    type: String,
    default: ''
  },
  features_images: {
    type: Array
  },
  features: {
    type: Object
  }
})
const images = [feature1, feature2, feature3, feature4]

const router = useRouter()
const goDetailItem = () => {
  // Chuyển hướng đến trang chi tiết với ID của property
  router.push({ name: 'PropertyDetail', params: { id: props.id } });
};
</script>
<style scoped>
.shadow_card:hover {
  box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.1);
}
.carousel__pagination {
  position: absolute;
  bottom: 23px;
  width: 100%;
  display: flex;
  justify-content: end;
}
.custom-pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

#pagination-custom .carousel__pagination-button::after {
  width: 12px !important;
  height: 12px !important;
  border-radius: 50% !important;
  background-color: #ccc !important;
}

#pagination-custom .carousel__pagination-button--active::after {
  background-color: #007bff;
}

@media (hover: hover) {
  #pagination-custom .carousel__pagination-button:hover::after {
    background-color: #555;
  }
}
</style>
