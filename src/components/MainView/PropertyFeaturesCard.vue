<template>
  <article
    class="flex flex-col items-start text-lg text-neutral-400 w-[32.2%] shadow_card rounded-b-lg"
    @click="goDetailItem"
  >
    <div
      class="carousel-card flex flex-col self-stretch w-full font-semibold rounded-t-lg bg-zinc-200 max-md:pl-5"
    >
      <!-- <Carousel :itemsToShow="1" :paginationEnabled="true" :wrapAround="true" :mouseDrag="true">
        <Slide v-for="(image, index) in images" :key="index">
          <img
            :src="image"
            class="carousel__item h-[300px] w-full rounded-t-lg bg-cover bg-no-repeat"
          />
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel> -->
      <el-carousel :autoplay="false">
        <el-carousel-item v-for="(image, index) in images" :key="index">
          <img
            :src="image"
            class="carousel__item h-[300px] w-full rounded-t-lg bg-cover bg-no-repeat"
          />
        </el-carousel-item>
      </el-carousel>
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
import { useRouter } from 'vue-router'
import PropertyFeatures from './PropertyFeatures.vue'
import 'vue3-carousel/dist/carousel.css'
import feature1 from '@/assets/images/feature_1.webp'
import feature2 from '@/assets/images/feature_2.webp'
import feature3 from '@/assets/images/feature_3.webp'
import feature4 from '@/assets/images/feature_4.webp'

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
function goDetailItem() {
  // Chuyển hướng đến trang chi tiết với ID của property
  router.push({ name: 'property-detail', params: { id: props.id } })
}
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

.carousel-card :deep(.carousel__pagination-button::after)  {
  background-color: rgba(255, 255, 255, 0.705);
  border-radius: 50%;
  height: 10px;
  width: 10px;
}

.carousel-card :deep(.carousel__pagination-button--active::after)  {
  background-color: white;
  border-radius: 50%;
  height: 10px;
  width: 10px;
}
</style>
