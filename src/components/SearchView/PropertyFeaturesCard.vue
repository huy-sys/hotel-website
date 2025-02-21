<template>
  <article
    class="flex flex-col items-start text-lg text-neutral-400 shadow_card rounded-b-lg cursor-pointer mb-[20px]"
    @click="goDetailItem"
  >
    <div
      class="relative carousel-card flex flex-col self-stretch w-full font-semibold rounded-t-lg bg-zinc-200 max-md:pl-5 h-[384px]"
    >
      <el-carousel :autoplay="false">
        <el-carousel-item v-for="(image, index) in images" :key="index">
          <img
            :src="image"
            class="carousel__item object-cover w-full rounded-t-lg bg-cover bg-no-repeat"
          />
        </el-carousel-item>
      </el-carousel>
      <img
        src="../../assets/icons/Heart.svg"
        alt="Property image"
        class="object-contain self-end aspect-square w-[30px] absolute m-2"
      />
      <div class="absolute bottom-0 text-[#484848] font-semibold ml-[26px] flex gap-[21px] mb-[30px]">
        <div>
          <img
            class="flex shrink-0 rounded-full bg-neutral-300 h-[76px] w-[76px]"
            src="@/assets/images/avartar_card.jpg"
          />
        </div>
        <div class="leading-[23px]">
          <p class="text-[12px]">Listed By</p>
          <p class="font-bold text-[18px]">{{ listed_by }}</p>
          <p class="text-[16px]"> For: {{price}}</p>
        </div>
      </div>
    </div>
    <div class="pl-[26px] pt-[30px] pb-[15px]">
      <h2 class="font-bold text-zinc-700">{{ title }}</h2>
      <p class="text-sm font-normal">{{ address }}</p>
      <div class="my-3 flex gap-6 items-center text-base whitespace-nowrap text-zinc-700">
        <PropertyFeatures :features="features" v-if="features"></PropertyFeatures>
      </div>
      <div class="text-[14px] text-[#9a9a9a]">
        <span class="mr-[10px] font-semibold">{{ category }} on Rent</span>
        |
        <span class="ml-[10px] font-semibold">{{
          rental_duration === 'Short Period'
            ? 'For Short Period: 3 - 5 Months'
            : 'For Long Period: 1 - 2 Years'
        }}</span>
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import PropertyFeatures from '@/components/MainView/PropertyFeatures.vue'
import 'vue3-carousel/dist/carousel.css'
import feature1 from '@/assets/images/feature_1.webp'
import feature2 from '@/assets/images/feature_2.webp'
import feature3 from '@/assets/images/feature_3.webp'
import feature4 from '@/assets/images/feature_4.webp'

interface PropertyFeaturesCardProps {
  id: number
  title: string
  category?: string
  address: string
  imageUrl?: string
  price: string | null
  features_images?: string[]
  features?: object
  rental_duration?: string
  listed_by?: string
}

const props = defineProps<PropertyFeaturesCardProps>()

const images = [feature1, feature2, feature3, feature4]

const router = useRouter()
function goDetailItem() {
  // Chuyển hướng đến trang chi tiết với ID của property
  router.push({ name: 'property-detail', params: { id: props.id } })
}
</script>
<style scoped>
.shadow_card {
  box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.1);
}
.carousel__pagination {
  position: absolute;
  bottom: 23px;
  width: 100%;
  display: flex;
  justify-content: end;
}

.carousel-card :deep(.el-carousel__container) {
  height: 384px;
}

.carousel-card :deep(.el-carousel__button) {
  border-radius: 50%;
  height: 10px;
  width: 10px;
}
.carousel-card :deep(.el-carousel__indicators--horizontal) {
  left: 87%;
  transform: none;
  margin-bottom: 10px;
}
.carousel-card :deep(.el-carousel__indicator) {
  cursor: none;
  pointer-events: none;
}

</style>
