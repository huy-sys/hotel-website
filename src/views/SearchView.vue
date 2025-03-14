<template>
  <div class="search-results grid grid-cols-3 grid-rows-1 gap-4">
    <div class="search-header">
      <h1 class="text-2xl font-bold mb-4">10 Results Found</h1>
      <div class="flex gap-[9px] mb-[42px]">
        <div class="fitler-tag">
          Apartments
          <div class="cursor-pointer ml-2"><IconDelete /></div>
        </div>
        <div class="fitler-tag">
          Houses
          <div class="cursor-pointer ml-2"><IconDelete /></div>
        </div>
        <div class="fitler-tag">
          Villas
          <div class="cursor-pointer ml-2"><IconDelete /></div>
        </div>
        <button
          class="px-[15px] py-[5px] flex items-center rounded-full border-[1px] mr-[25px] justify-center border-[#c9c9c9] hover:bg-[#c9c9c9]"
        >
          <IconFilter />
          <span class="font-semibold ml-[6px]">Filters</span>
        </button>
      </div>
      <PropertyFeaturesCard
        v-for="property in featuredProperties.slice(0, 4)"
        :key="property.id"
        :title="property.title"
        :id="property.id"
        :category="property.category"
        :address="property.address"
        :imageUrl="property.imageUrl"
        :price="property.price"
        :features_images="property.features_images"
        :features="property.features"
        :rental_duration="property.rental_duration"
        :listed_by="property.listed_by"
      />
    </div>

    <!-- Add your search results content here -->
    <!-- You can add property listing components here -->
    <GoogleMap
      :api-key="api_map_key"
      id="map-container"
      class="h-[calc(100vh-100px)] w-[calc(100vw-720px)] col-span-2 gap-[10px] right-[8px] top-[80px]"
      :center="center"
      :zoom="7"
    >
      <MarkerCluster>
        <Marker
          v-for="property in featuredProperties"
          :key="property.id"
          :options="{ position: property.location }"
          @click="openMarker(property.id)"
        >
          <InfoWindow @closeclick="closeMarker">
            <div id="content">
              <div id="bodyContent" class="flex gap-4">
                <img src="@/assets/images/feature_1.webp" class="w-[100px] h-[100px]" alt="" />
                <div>
                  <h2 class="font-bold text-[#484848] text-[18px]">{{ property.title }}</h2>
                  <p class="text-sm font-normal">{{ property.address }}</p>
                  <div
                    class="my-3 flex gap-6 items-center text-base whitespace-nowrap text-zinc-700"
                  >
                    <PropertyFeatures
                      :features="property.features"
                      v-if="property.features"
                    ></PropertyFeatures>
                  </div>
                </div>
              </div>
            </div>
          </InfoWindow>
        </Marker>
      </MarkerCluster>
    </GoogleMap>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import IconDelete from '@/components/icons/IconDelete.vue'
import IconFilter from '@/components/icons/IconFilter.vue'
import PropertyFeaturesCard from '@/components/SearchView/PropertyFeaturesCard.vue'
import { GoogleMap, Marker, InfoWindow, MarkerCluster } from 'vue3-google-map'
import PropertyFeatures from '@/components/MainView/PropertyFeatures.vue'

const route = useRoute()
const searchParams = ref({
  location: '',
  checkIn: '',
  checkOut: '',
  guests: 0
})

// Format date for display
const formatDate = (dateString: string) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString()
}
const featuredProperties = [
  {
    id: 1,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -31.56391, lng: 147.154312 },
    listed_by: 'John Doberman',
    category: 'Apartment',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 2,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.718234, lng: 150.363181 },
    listed_by: 'John Doe',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 3,
    title: 'Beach House Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.727111, lng: 150.371124 },
    listed_by: 'John Doe',
    category: 'Apartment',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 4,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.848588, lng: 151.209834 },
    listed_by: 'John Doe',
    category: 'Room',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 5,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'John Doe',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 6,
    title: 'Double Size Room',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'John Doe',
    category: 'Room',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 7,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'John Doe',
    category: 'Apartment',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 8,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'John Doe',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 9,
    title: 'Beach House Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'John Doe',
    category: 'Apartment',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 10,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 11,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 12,
    title: 'Double Size Room',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Room',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 13,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Apartment',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 14,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 15,
    title: 'Beach House Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Apartment',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 16,
    title: 'Well Furnished Apartment',
    address: '100  Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 17,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 18,
    title: 'Double Size Room',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Room',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 19,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Apartment',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 20,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 21,
    title: 'Beach House Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Apartment',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 22,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 23,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 24,
    title: 'Double Size Room',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Room',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 25,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Apartment',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 26,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 27,
    title: 'Beach House Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Apartment',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 28,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 29,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 30,
    title: 'Double Size Room',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Room',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 31,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Apartment',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 32,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 33,
    title: 'Beach House Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Apartment',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 34,
    title: 'Well Furnished Apartment',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  },
  {
    id: 35,
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Villa',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Long Period'
  },
  {
    id: 36,
    title: 'Double Size Room',
    address: '100 Smart Street, LA, USA',
    location: { lat: -33.851702, lng: 151.216968 },
    listed_by: 'Harry Potter',
    category: 'Room',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 },
    rental_duration: 'Short Period'
  }
]

// map location
const center = { lat: -31.56391, lng: 147.154312 }
const api_map_key = import.meta.env.GOOGLE_API_KEY
const activeMarkerId = ref<number | null>(null) // Will be open when mounted
const openMarker = (id: number) => {
  console.log('openMarker', id)
  console.log('activeMarkerId', activeMarkerId.value)
  activeMarkerId.value = id
}
const closeMarker = () => {
  activeMarkerId.value = null
}

const handleScroll = () => {
  const footerContainer = document.getElementsByClassName('footer-container')
  const childDiv2Position = footerContainer[0].getBoundingClientRect().top
  const mapContainer = document.getElementById('map-container')
  console.log(childDiv2Position)
  if(childDiv2Position >= 1040) {
    mapContainer?.classList.add('fixed')
    mapContainer?.classList.remove('static')
  } else {
    mapContainer?.classList.remove('fixed')
    mapContainer?.classList.add('static')
  }
}

onMounted(() => {
  // Get search params from URL
  searchParams.value = {
    location: (route.query.location as string) || '',
    checkIn: (route.query.checkIn as string) || '',
    checkOut: (route.query.checkOut as string) || '',
    guests: Number(route.query.guests) || 0
  }

  // Here you can add logic to fetch search results based on searchParams
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.search-results {
  padding-top: 80px;
  padding-left: 80px;
}
.fitler-tag {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #484848;
  font-weight: 400;
  border-radius: 17px;
  background-color: #e0e2e6;
  padding: 5px 15px;
}
</style>
