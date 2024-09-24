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
        <div class="detail-header flex justify-between px-[16px]">
          <div class="header-content flex flex-col">
            <span class="font-bold text-[28px]">Well Furnished Apartment</span>
            <span class="text-[#9A9A9A]">100 Smart Street, LA, USA</span>
          </div>
          <div class="header-action flex gap-[24px]">
            <IconHeart />
            <IconShare />
          </div>
        </div>
        <div class="benefit-room grid grid-cols-4 grid-rows-1 gap-4 mt-[37px] px-[16px]">
          <div class="benafit-item">
            <svg
              width="47"
              height="36"
              viewBox="0 0 47 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.29883 5.225C6.29883 4.36968 6.6386 3.54938 7.24341 2.94458C7.84821 2.33978 8.66851 2 9.52383 2H37.4738C38.3292 2 39.1494 2.33978 39.7543 2.94458C40.3591 3.54938 40.6988 4.36968 40.6988 5.225V17.05H6.29883V5.225Z"
                stroke="#484848"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.15039 29.9502V34.2502"
                stroke="#484848"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42.8496 29.9502V34.2502"
                stroke="#484848"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.8754 11.6748H18.1254C17.2701 11.6748 16.4498 12.0146 15.845 12.6194C15.2402 13.2242 14.9004 14.0445 14.9004 14.8998V17.0498H32.1004V14.8998C32.1004 14.0445 31.7606 13.2242 31.1558 12.6194C30.551 12.0146 29.7307 11.6748 28.8754 11.6748Z"
                stroke="#484848"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 20.2748C2 19.4195 2.33978 18.5992 2.94458 17.9944C3.54939 17.3896 4.36968 17.0498 5.225 17.0498H41.775C42.6303 17.0498 43.4506 17.3896 44.0554 17.9944C44.6602 18.5992 45 19.4195 45 20.2748V29.9498H2V20.2748Z"
                stroke="#484848"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>3 Bedrooms</span>
          </div>
          <div class="benafit-item">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.2 13.2632H9V7.57895C9 5.48905 10.6146 3.78947 12.6 3.78947C14.5854 3.78947 16.2 5.48905 16.2 7.57895H19.8C19.8 3.39916 16.5708 0 12.6 0C8.6292 0 5.4 3.39916 5.4 7.57895V13.2632H1.8C1.32261 13.2632 0.864773 13.4628 0.527208 13.8181C0.189642 14.1734 0 14.6554 0 15.1579V18.9474C0 23.8851 3.0132 28.0857 7.2 29.6526V36H10.8V30.3158H25.2V36H28.8V29.6526C32.9868 28.0857 36 23.8851 36 18.9474V15.1579C36 14.6554 35.8104 14.1734 35.4728 13.8181C35.1352 13.4628 34.6774 13.2632 34.2 13.2632ZM32.4 18.9474C32.4 23.1272 29.1708 26.5263 25.2 26.5263H10.8C6.8292 26.5263 3.6 23.1272 3.6 18.9474V17.0526H32.4V18.9474Z"
                fill="#484848"
              />
            </svg>
            <span>2 Bathrooms</span>
          </div>
          <div class="benafit-item">
            <svg
              width="41"
              height="34"
              viewBox="0 0 41 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 13.7727L5.97119 4.50696C6.61764 2.99858 8.26477 2 10.1053 2H30.8947C32.7352 2 34.3823 2.99858 35.0288 4.50696L39 13.7727"
                stroke="#484848"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 13.7727H39V28.9091H2V13.7727Z"
                stroke="#484848"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.36364 28.9092V32.2728H2V28.9092"
                stroke="#484848"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M39.0004 28.9092V32.2728H35.6367V28.9092"
                stroke="#484848"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.72674 22.1818C9.65558 22.1818 10.4086 21.4288 10.4086 20.4999C10.4086 19.5711 9.65558 18.8181 8.72674 18.8181C7.7979 18.8181 7.04492 19.5711 7.04492 20.4999C7.04492 21.4288 7.7979 22.1818 8.72674 22.1818Z"
                stroke="#484848"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M32.2736 22.1818C33.2025 22.1818 33.9554 21.4288 33.9554 20.4999C33.9554 19.5711 33.2025 18.8181 32.2736 18.8181C31.3448 18.8181 30.5918 19.5711 30.5918 20.4999C30.5918 21.4288 31.3448 22.1818 32.2736 22.1818Z"
                stroke="#484848"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>3 Cars/2 Bikes</span>
          </div>
          <div class="benafit-item">
            <svg
              width="43"
              height="38"
              viewBox="0 0 43 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.4184 11.3252C39.1061 11.2023 38.7732 11.1397 38.4376 11.1406H38.4024C36.6297 11.167 34.6416 12.8273 33.5983 15.3383C32.3476 18.3424 32.9233 21.4159 34.8938 22.2061C35.2059 22.3289 35.5384 22.3916 35.8738 22.3906C37.6553 22.3906 39.6707 20.7207 40.7227 18.193C41.9646 15.1889 41.3801 12.1153 39.4184 11.3252V11.3252Z"
                stroke="#484848"
                stroke-width="3"
                stroke-miterlimit="10"
              />
              <path
                d="M27.9806 23.048C25.5373 18.9937 24.4826 17.4688 21.6877 17.4688C18.8927 17.4688 17.8293 19.0033 15.3859 23.048C13.2941 26.5074 9.06657 26.7957 8.01189 29.7339C7.79792 30.2721 7.69046 30.8467 7.69548 31.4258C7.69548 33.8155 9.52361 35.75 11.7736 35.75C14.5685 35.75 18.3742 33.5185 21.6965 33.5185C25.0187 33.5185 28.8068 35.75 31.6017 35.75C33.8517 35.75 35.6711 33.8164 35.6711 31.4258C35.6731 30.8461 35.5627 30.2715 35.3459 29.7339C34.2912 26.7852 30.0724 26.5074 27.9806 23.048Z"
                stroke="#484848"
                stroke-width="3"
                stroke-miterlimit="10"
              />
              <path
                d="M16.1079 13.6016C16.2255 13.6017 16.3431 13.5928 16.4594 13.5752C18.4994 13.279 19.7729 10.4524 19.3106 7.26025C18.8755 4.25088 17.0492 2 15.1393 2C15.0216 1.99991 14.9041 2.00872 14.7877 2.02637C12.7478 2.32256 11.4743 5.14912 11.9366 8.34131C12.3716 11.3419 14.198 13.6016 16.1079 13.6016Z"
                stroke="#484848"
                stroke-width="3"
                stroke-miterlimit="10"
              />
              <path
                d="M31.4369 8.34131C31.8992 5.14912 30.6256 2.32256 28.5857 2.02637C28.4693 2.00872 28.3518 1.99991 28.2341 2C26.3243 2 24.5014 4.25088 24.0655 7.26025C23.6032 10.4524 24.8767 13.279 26.9166 13.5752C27.033 13.5928 27.1505 13.6017 27.2682 13.6016C29.1781 13.6016 31.0044 11.3419 31.4369 8.34131V8.34131Z"
                stroke="#484848"
                stroke-width="3"
                stroke-miterlimit="10"
              />
              <path
                d="M8.48353 22.2061C10.4514 21.415 11.0262 18.3389 9.77728 15.3383C8.72611 12.8106 6.71253 11.1406 4.93363 11.1406C4.59824 11.1397 4.26572 11.2023 3.95365 11.3252C1.98578 12.1162 1.41097 15.1924 2.6599 18.193C3.71107 20.7207 5.72464 22.3906 7.50355 22.3906C7.83894 22.3916 8.17146 22.3289 8.48353 22.2061V22.2061Z"
                stroke="#484848"
                stroke-width="3"
                stroke-miterlimit="10"
              />
            </svg>
            <span>0 Pets Allowed</span>
          </div>
        </div>
        <div class="apartment-description mt-[50px]">
          <h3 class="font-bold text-[28px] mb-[14px]">Apartment Description</h3>
          <p class="mb-[14px] text-[#9A9A9A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p class="text-[#9A9A9A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        .offered-ameni
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
import IconInquiry from './icons/IconInquiry.vue'
import IconPhone from './icons/IconPhone.vue'
import IconShare from './icons/IconShare.vue'
import IconHeart from './icons/IconHeart.vue'

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
  border-top: 1px solid #e0e2e6;
  margin-top: 28px;
  margin-bottom: 37px;
}
ul > li {
  color: #9a9a9a;
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
.benafit-item {
  padding: 50px;
  background-color: #eff0f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}
.benafit-item span {
  margin-top: 16px;
  font-weight: 600;
}
</style>
