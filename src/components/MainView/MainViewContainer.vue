<template>
  <div class="flex overflow-hidden flex-col bg-white rounded-3xl">
    <div class="header-container banner-header-image">
      <nav
        class="flex gap-8 mt-[25rem] mx-auto items-start text-base font-semibold whitespace-nowrap text-zinc-700 w-[430px]"
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
        @submit="handleSearch"
        class="flex gap-5 justify-between items-center mx-auto py-2 pr-2 pl-8 mt-9 mb-24 max-w-full font-semibold bg-white rounded-[35px] w-[794px] max-md:pl-5"
      >
        <div class="flex flex-col self-stretch my-auto">
          <label for="location" class="font-semibold self-start text-xs text-zinc-700"
            >Location</label
          >
          <input
            v-model="searchForm.location"
            type="text"
            id="location"
            placeholder="Which city do you prefer?"
            class="text-sm text-neutral-300 focus-visible:outline-0"
          />
        </div>
        <div class="flex gap-4 self-stretch my-auto">
          <div class="shrink-0 w-px border border-solid border-zinc-300 h-[33px]"></div>
          <div class="flex flex-col self-start">
            <label for="checkIn" class="font-semibold self-start text-xs text-zinc-700"
              >Check In</label
            >
            <!-- <input
              v-model="searchForm.checkIn"
              readonly
              id="checkIn"
              placeholder="Add Dates"
              class="text-sm text-neutral-300 focus-visible:outline-0"
            /> -->
            <Popover>
              <PopoverTrigger as-child>
                <Button
                  variant="outline"
                  :class="
                    cn(
                      'w-[120px] h-[20px] flex items-center justify-between text-left text-sm text-neutral-300 font-normal border-none shadow-none p-0',
                      !dateTime && 'text-muted-foreground'
                    )
                  "
                >
                  <template v-if="dateTime.start">
                    {{ df.format(dateTime.start.toDate(getLocalTimeZone())) }}
                  </template>
                  <template v-else> Add Dates </template>
                  <CalendarIcon class="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent class="w-auto p-0">
                <RangeCalendar
                  v-model="dateTime"
                  initial-focus
                  :number-of-months="2"
                  @update:start-value="(startDate) => (dateTime.start = startDate)"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div class="flex gap-4 self-stretch my-auto">
          <div class="shrink-0 w-px border border-solid border-zinc-300 h-[33px]"></div>
          <div class="flex flex-col self-start">
            <label for="checkOut" class="font-semibold self-start text-xs text-zinc-700"
              >Check Out</label
            >
            <Popover>
              <PopoverTrigger as-child>
                <Button
                  variant="outline"
                  :class="
                    cn(
                      'w-[120px] h-[20px] flex items-center justify-between text-left text-sm text-neutral-300 font-normal border-none shadow-none p-0',
                      !dateTime && 'text-muted-foreground'
                    )
                  "
                >
                  <template v-if="dateTime.end">
                    {{ df.format(dateTime.end.toDate(getLocalTimeZone())) }}
                  </template>
                  <template v-else> Add Dates </template>
                  <CalendarIcon class="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent class="w-auto p-0">
                <RangeCalendar
                  v-model="dateTime"
                  initial-focus
                  :number-of-months="2"
                  @update:start-value="(startDate) => (dateTime.start = startDate)"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div class="flex gap-3.5 self-stretch my-auto">
          <div class="shrink-0 w-px border border-solid border-zinc-300 h-[33px]"></div>
          <div class="flex flex-col self-start">
            <label for="guests" class="font-semibold self-start text-xs text-zinc-700"
              >Guests</label
            >
            <input
              v-model="searchForm.guests"
              type="number"
              id="guests"
              placeholder="Add Guests"
              min="0"
              class="text-sm text-neutral-300 focus-visible:outline-0"
            />
          </div>
        </div>
        <button type="submit">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f1d481ae89ba6816fdd35f3c920b02b63271681a6bcde2ffb9abf5a6d56c617"
            class="object-contain shrink-0 self-stretch aspect-square w-[54px]"
            alt="Search"
          />
        </button>
      </form>
    </div>
    <main
      class="maincontainer max-w-[1720px] flex flex-col items-start px-20 mt-24 mx-auto w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <h2 class="text-4xl font-bold leading-10 text-zinc-700 max-md:ml-0.5 w-[339px]">
        Latest on the Property Listing
      </h2>
      <div
        class="flex shrink-0 mt-11 h-1.5 rounded bg-zinc-700 w-[140px] max-md:mt-10 max-md:ml-1"
      ></div>
      <section class="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <PropertyCard
            v-for="(property, index) in rooms.slice(0, 4)"
            :key="index"
            :title="property.title"
            :address="property.address"
            :imageUrl="property.imageUrl"
          />
        </div>
      </section>
      <h2
        class="mt-24 text-4xl font-bold leading-10 text-zinc-700 max-md:mt-10 max-md:ml-0.5 w-[339px]"
      >
        Nearby Listed Properties
      </h2>
      <div
        class="flex justify-between self-stretch mt-5 w-full text-base font-bold text-zinc-700 max-md:mr-0.5 max-md:max-w-full"
      >
        <div class="flex shrink-0 self-end mt-6 h-1.5 rounded bg-zinc-700 w-[140px]"></div>
        <button class="flex gap-2 self-start" @click="showOnMap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28c64466031dfc964ef42705713ea8bc98ce2e7647dc6fd4ec763067098cb291?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
            class="object-contain shrink-0 aspect-square w-[26px]"
            alt=""
          />
          <span class="my-auto basis-auto">Show On Map</span>
        </button>
      </div>
      <section class="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <PropertyCard
            v-for="(property, index) in rooms.slice(0, 4)"
            :key="index"
            :title="property.title"
            :address="property.address"
            :imageUrl="property.imageUrl"
          />
        </div>
      </section>
      <h2
        class="mt-24 text-4xl font-bold leading-10 text-zinc-700 max-md:mt-10 max-md:ml-1 w-[339px]"
      >
        Top Rated Properties
      </h2>
      <div
        class="flex shrink-0 mt-9 h-1.5 rounded bg-zinc-700 w-[140px] max-md:mt-10 max-md:ml-1.5"
      ></div>
      <section class="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <PropertyCard
            v-for="(property, index) in rooms.slice(0, 4)"
            :key="index"
            :title="property.title"
            :address="property.address"
            :imageUrl="property.imageUrl"
            :rating="property.rating"
          />
        </div>
      </section>
      <HostingBanner :banner="tryHostingBanner" />
      <h2
        class="mt-24 text-4xl font-bold leading-10 text-zinc-700 max-md:mt-10 max-md:ml-1 w-[339px]"
      >
        Featured Properties on our Listing
      </h2>
      <div
        class="flex shrink-0 mt-9 h-1.5 rounded bg-zinc-700 w-[140px] max-md:mt-10 max-md:ml-1.5"
      ></div>
      <section class="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
        <div class="flex flex-wrap gap-5 max-md:flex-col">
          <PropertyFeaturesCard
            v-for="(property, index) in rooms.slice(0, 6)"
            :key="index"
            :id="property.id"
            :title="property.title"
            :address="property.address"
            :imageUrl="property.imageUrl"
            :price="property.price || ''"
            :features="property.features || {}"
            :features_images="property.features_images"
            :isFavorite="property.is_favorite"
          />
        </div>
      </section>
      <HostingBanner :banner="browseForBanner" />
      <h2 class="mt-20 text-4xl font-bold leading-10 text-zinc-700 max-md:mt-10 w-[339px]">
        Property Rental Guides & Tips
      </h2>
      <div
        class="flex shrink-0 mt-9 h-1.5 rounded bg-zinc-700 w-[140px] max-md:mt-10 max-md:ml-1"
      ></div>
      <section class="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <BlogPost
            v-for="(post, index) in blogs"
            :key="index"
            :title="post.title"
            :category="post.category"
            :imageUrl="post.imageUrl"
          />
        </div>
      </section>
      <button
        class="self-center px-14 py-3 mt-16 max-w-full text-base font-bold text-white bg-zinc-700 rounded-[30px] w-[220px] max-md:px-5 max-md:mt-10"
      >
        View All Blogs
      </button>
    </main>
    <AppDownloadBanner />
    <AboutSection />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import HostingBanner from './HostingBanner.vue'
import BlogPost from './BlogPost.vue'
import AppDownloadBanner from './AppDownloadBanner.vue'
import AboutSection from './AboutSection.vue'
import PropertyCard from './PropertyCard.vue'
// import type {
//   blogPostType,
//   featuredProperty,
//   latestProperty,
//   nearbyProperty,
//   topRatedProperty
// } from '../../assets/types/types'
import PropertyFeaturesCard from './PropertyFeaturesCard.vue'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import type { DateRange } from 'reka-ui'
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { rooms, blogs } from '../../mock/rooms'
import { cn } from '@/lib/utils'
const router = useRouter()

const showOnMap = () => {
  searchForm.value.location = 'Los Angeles'
  router.push({
    name: 'search-page',
    query: {
      location: searchForm.value.location
    }
  })
}
// const latestProperties = ref<latestProperty[]>([
//   {
//     title: 'Well Furnished Apartment',
//     address: '100 Smart Street, LA, USA',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
//     features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
//   },
//   {
//     title: 'Comfortable Family Flat',
//     address: '100 Smart Street, LA, USA',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
//     features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
//   },
//   {
//     title: 'Beach House Summer',
//     address: '100 Smart Street, LA, USA',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
//     features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
//   },
//   {
//     title: 'Double Size Room',
//     address: '100 Smart Street, LA, USA',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
//     features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
//   }
// ])
// const nearbyProperties = ref<nearbyProperty[]>([
//   {
//     title: 'Well Furnished Apartment',
//     address: '100 Smart Street, LA, USA',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
//     features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
//   },
//   {
//     title: 'Comfortable Family Flat',
//     address: '100 Smart Street, LA, USA',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
//     features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
//   },
//   {
//     title: 'Beach House Summer',
//     address: '100 Smart Street, LA, USA',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
//     features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
//   },
//   {
//     title: 'Double Size Room',
//     address: '100 Smart Street, LA, USA',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
//     features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
//   }
// ])
// const topRatedProperties = ref<topRatedProperty[]>([
//   {
//     title: 'Well Furnished Apartment',
//     address: '100 Smart Street, LA, USA',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
//     rating: 5
//   },
//   {
//     title: 'Comfortable Family Flat',
//     address: '100 Smart Street, LA, USA',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
//     rating: 5
//   },
//   {
//     title: 'Beach House Summer',
//     address: '100 Smart Street, LA, USA',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
//     rating: 5
//   },
//   {
//     title: 'Double Size Room',
//     address: '100 Smart Street, LA, USA',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
//     rating: 5
//   }
// ])
// const featuredProperties = ref<featuredProperty[]>([
//   {
//     id: 1,
//     title: 'Well Furnished Apartment',
//     address: '100 Smart Street, LA, USA',
//     category: 'Apartment',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
//     price: '$ 1000 - 5000 USD',
//     features_images: [
//       '../../assets/images/feature_1.webp',
//       '../../assets/images/feature_2.webp',
//       '../../assets/images/feature_3.webp',
//       '../../assets/images/feature_4.webp'
//     ]
//   },
//   {
//     id: 2,
//     title: 'Blue Door Villa Modern',
//     address: '100 Smart Street, LA, USA',
//     category: 'Villa',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

//     price: '$ 1000 - 5000 USD',
//     features_images: [
//       '../../assets/images/feature_1.webp',
//       '../../assets/images/feature_2.webp',
//       '../../assets/images/feature_3.webp',
//       '../../assets/images/feature_4.webp'
//     ]
//   },
//   {
//     id: 3,
//     title: 'Beach House Apartment',
//     address: '100 Smart Street, LA, USA',
//     category: 'Apartment',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

//     price: '$ 1000 - 5000 USD',
//     features_images: [
//       '../../assets/images/feature_1.webp',
//       '../../assets/images/feature_2.webp',
//       '../../assets/images/feature_3.webp',
//       '../../assets/images/feature_4.webp'
//     ]
//   },
//   {
//     id: 4,
//     title: 'Well Furnished Apartment',
//     address: '100 Smart Street, LA, USA',
//     category: 'Apartment',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

//     price: '$ 1000 - 5000 USD',
//     features_images: [
//       '../../assets/images/feature_1.webp',
//       '../../assets/images/feature_2.webp',
//       '../../assets/images/feature_3.webp',
//       '../../assets/images/feature_4.webp'
//     ]
//   },
//   {
//     id: 5,
//     title: 'Blue Door Villa Modern',
//     address: '100 Smart Street, LA, USA',
//     category: 'Villa',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

//     price: '$ 1000 - 5000 USD',
//     features_images: [
//       '../../assets/images/feature_1.webp',
//       '../../assets/images/feature_2.webp',
//       '../../assets/images/feature_3.webp',
//       '../../assets/images/feature_4.webp'
//     ]
//   },
//   {
//     id: 6,
//     title: 'Double Size Room',
//     address: '100 Smart Street, LA, USA',
//     category: 'Room',
//     imageUrl:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',

//     price: '$ 1000 - 5000 USD',
//     features_images: [
//       '../../assets/images/feature_1.webp',
//       '../../assets/images/feature_2.webp',
//       '../../assets/images/feature_3.webp',
//       '../../assets/images/feature_4.webp'
//     ]
//   }
// ])
// const blogPosts = ref<blogPostType[]>([
//   {
//     title: 'Choose the right property!',
//     category: 'Economy',
//     imageUrl: '../../assets/images/choose-the-right-property-details.jpg'
//   },
//   {
//     title: 'Best environment for rental',
//     category: 'Lifestyle',
//     imageUrl: '../../assets/images/choose-the-right-property-details.jpg'
//   },
//   {
//     title: 'Boys Hostel Apartment',
//     category: 'Property',
//     imageUrl: '../../assets/images/choose-the-right-property-details.jpg'
//   }
// ])

const focusedOption = ref('Rooms')
const selectOption = (option: string) => {
  // Handle option selection
  console.log(`Selected option: ${option}`)
  focusedOption.value = option
}

const tryHostingBanner = {
  title: 'Try Hosting With Us',
  description: 'Earn extra just by renting your property...',
  title_btn: 'Become A Host'
}

const browseForBanner = {
  title: 'Browse For More Properties',
  description: 'Explore properties by their categories/types...',
  title_btn: 'Find A Property'
}

// Add search form data
const searchForm = ref({
  location: '',
  checkIn: '',
  checkOut: '',
  guests: 0
})

const df = new DateFormatter('en-US', {
  dateStyle: 'medium'
})

const dateTime = ref({
  start: new CalendarDate(2022, 1, 20),
  end: new CalendarDate(2022, 1, 20).add({ days: 20 })
}) as Ref<DateRange>
const handleSearch = (e: Event) => {
  e.preventDefault() // Prevent form submission

  // Navigate to search page with query params
  if (searchForm.value.location || searchForm.value.checkIn || searchForm.value.checkOut || searchForm.value.guests) {
    console.log(searchForm.value)
    router.push({
      name: 'search-page',
      query: {
        location: searchForm.value.location,
        checkIn: searchForm.value.checkIn,
        checkOut: searchForm.value.checkOut,
        guests: searchForm.value.guests
      }
    })
  }
}
watch(dateTime, (newVal) => {
  searchForm.value.checkIn = newVal.start?.toString() || ''
  searchForm.value.checkOut = newVal.end?.toString() || ''
})
</script>
<style scoped>
ul > li > a {
  text-decoration: none;
  color: #484848;
  transition: 0.4s;
  padding: 5px 10px;
}
ul > li > a:hover {
  background-color: hsla(180, 1%, 47%, 0.2);
  border-radius: 12px;
}
.selected_btn {
  padding-bottom: 10px;
}
.banner-header-image {
  background-image: url(../../assets/images/banner.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
