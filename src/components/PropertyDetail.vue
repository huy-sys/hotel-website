<template>
  <div class="property-detail mt-[74px] w-[1720px] mx-auto">
    <!-- Image -->
    <div class="grid grid-cols-4 grid-rows-2 gap-2 h-[540px] mb-[71px]">
      <!-- Large image (left side) -->
      <div class="col-span-2 row-span-2 bg-gray-300 flex items-end p-4 rounded-lg">
        <div class="flex items-center">
          <div class="w-10 h-10 bg-white rounded-full mr-3"></div>
          <div class="text-sm text-gray-800">
            <p>Listed By:</p>
            <p class="font-bold">John Doberman</p>
            <p>For: $1000 - $5000</p>
          </div>
        </div>
      </div>
      <!-- Smaller images (right side) -->
      <div class="bg-gray-300 rounded-lg"></div>
      <div class="bg-gray-300 rounded-lg"></div>
      <div class="bg-gray-300 rounded-lg"></div>
      <div class="bg-gray-300 rounded-lg flex items-center justify-center">
        <span class="text-gray-700 font-bold">+2 More Photos</span>
      </div>
    </div>
    <!-- Content -->
     <div class="grid grid-cols-3 gap-[50px] mx-[80px]">
        <div class="col-span-2">
            <div class="detail-header flex justify-between">
              <div class="header-content flex flex-col">
                <span class="font-bold text-[28px]">Well Furnished Apartment</span>
                <span class="text-[#9A9A9A]">100 Smart Street, LA, USA</span>
              </div>
              <div class="header-action flex gap-[24px]">
                <IconHeart />
                <IconShare />
              </div>
            </div>
        </div>
        <div class="content-right rounded-lg">
            <span class="price font-bold">$ 1000 - $ 2000</span>
            <div class="line"></div>
            <ul>
                <li>Short Period: $ 1000</li>
                <li>Medium Period: $ 2000</li>
                <li>Long Period: $ 2000</li>
            </ul>
            <button class="reserve">Reserve Now</button>
            <div class="redirect-action flex justify-between">
                <div class="flex">
                    <IconInquiry />  
                   <span class="ml-[7px] font-semibold">Property Inquiry</span> 
                </div>
                <div class="flex">
                    <IconPhone /> 
                   <span class="ml-[7px] font-semibold">Contact Host</span>
                </div>
            </div>
        </div>
     </div>
  </div>
  <!-- <div v-else>Loading...</div> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import IconInquiry from './icons/IconInquiry.vue';
import IconPhone from './icons/IconPhone.vue';
import IconShare from './icons/IconShare.vue';
import IconHeart from './icons/IconHeart.vue';

const route = useRoute()
const property = ref(null)

onMounted(async () => {
  const propertyId = route.params.id

  // Giả lập fetch từ API dựa trên ID
  const response = await fetch(`/api/properties/${propertyId}`)
  property.value = await response.json()
})
</script>

<style scoped>
.content-right {
    height: 436px;
    width: 382px;
    padding: 36px 28px 0 30px;
    box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.1);
}
.price {
    margin-bottom: 28px;
    font-size: 22px;
}
.line {
    border-top: 1px solid #E0E2E6;
    margin-top: 28px;
    margin-bottom: 37px;
}
ul > li {
    color: #9A9A9A;
    font-weight: 200;
    font-size: 16px;
}
.reserve {
    width: 100%;
    color: white;
    background-color: #484848;
    border-radius: 30px;
    padding-top: 22px;
    padding-bottom: 17px;
    margin-top: 31px;
    margin-bottom: 44px;
    font-weight: 500;
}
</style>
