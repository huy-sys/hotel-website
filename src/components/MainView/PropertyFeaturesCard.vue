<template>
  <div class="relative w-[100%] md:w-[32.2%]">
    <article
      class=" flex flex-col items-start text-lg text-neutral-400 shadow_card rounded-b-lg cursor-pointer"
      @click="goDetailItem"
    >
      <div
        class="relative carousel-card flex flex-col self-stretch w-full font-semibold rounded-t-lg bg-zinc-200 max-md:pl-5"
      >
        <el-carousel :autoplay="false">
          <el-carousel-item v-for="(image, index) in images" :key="index">
            <img
              :src="image"
              class="carousel__item h-[300px] w-full rounded-t-lg bg-cover bg-no-repeat"
            />
          </el-carousel-item>
        </el-carousel>
  
        <div v-if="price" class="absolute bottom-0 text-white font-semibold ml-2 mb-[14px]">{{ price }}</div>
      </div>
      <h2 class="px-3 mt-8 font-bold text-zinc-700">{{ title }}</h2>
      <p class="px-3 mt-3 text-sm font-medium">{{ address }}</p>
      <div class="px-3 my-3 flex gap-6 items-center text-base whitespace-nowrap text-zinc-700">
        <PropertyFeatures :features="features" v-if="features"></PropertyFeatures>
      </div>
    </article>
    <div class="absolute top-[10px] right-[10px] z-10 hover:scale-110 transition-all duration-300" @click="handleFavorite">
      <HeartLight v-if="!isFavorite" />
      <HeartFill v-else />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import PropertyFeatures from './PropertyFeatures.vue'
import 'vue3-carousel/dist/carousel.css'
import feature1 from '@/assets/images/feature_1.webp'
import feature2 from '@/assets/images/feature_2.webp'
import feature3 from '@/assets/images/feature_3.webp'
import feature4 from '@/assets/images/feature_4.webp'
import HeartLight from '@/assets/icons/HeartLight.vue'
import HeartFill from '@/assets/icons/HeartFill.vue'

interface PropertyFeaturesCardProps {
  id: number
  title: string
  category?: string
  address: string
  imageUrl: string
  price?: string
  features_images: string[]
  features?: object
  isFavorite?: boolean
}

const props = defineProps<PropertyFeaturesCardProps>()

const images = [feature1, feature2, feature3, feature4]

const router = useRouter()
function goDetailItem() {
  // Chuyển hướng đến trang chi tiết với ID của property
  router.push({ name: 'property-detail', params: { id: props.id } })
}

function handleFavorite() {
  console.log('handleFavorite')

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

.carousel-card :deep(.el-carousel__button) {
  border-radius: 50%;
  height: 10px;
  width: 10px;
}
.carousel-card :deep(.el-carousel__indicators--horizontal) {
  left: 85%;
  @media (max-width: 768px) {
    left: 75%;
  }
  transform: none;
  margin-bottom: 10px;
}
.carousel-card :deep(.el-carousel__indicator) {
  cursor: none;
  pointer-events: none;
}
</style>
