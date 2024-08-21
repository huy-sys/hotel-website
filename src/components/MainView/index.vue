<template>
  <div class="flex overflow-hidden flex-col bg-white rounded-3xl">
    <header class="flex flex-col items-center pt-1.5 pb-20 w-full  max-md:max-w-full banner-header-image">
      <nav
        class="mb-28 flex overflow-hidden flex-wrap gap-10 self-stretch px-20 py-1.5 w-full bg-white bg-opacity-0 max-md:px-5 max-md:max-w-full"
      >
        <h1 class="grow shrink my-auto text-4xl font-extrabold text-zinc-700 w-[86px]">LOGO</h1>
        <div class="flex flex-wrap gap-10 font-semibold">
          <ul
            class="flex flex-wrap flex-auto gap-8 my-auto text-base text-zinc-700 max-md:max-w-full"
          >
            <li><a href="#" class="font-semibold grow">Find a Property</a></li>
            <li><a href="#" class="font-semibold basis-auto">Share Stories</a></li>
            <li><a href="#" class="font-semibold basis-auto">Rental Guides</a></li>
            <li><a href="#" class="font-semibold basis-auto">Download Mobile App</a></li>
          </ul>
          <div class="flex shrink gap-2.5 text-sm text-white basis-auto grow-0">
            <a href="#" class="px-10 py-2 my-auto rounded-3xl bg-zinc-700 max-md:px-5">
              Become A Host
            </a>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b13591404c77a8bf9d30106bd3a1088e7707c427bf623b266592bb51bcf11e9a?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
              class="object-contain shrink-0 max-w-full aspect-[1.85] w-[109px]"
              alt=""
            />
          </div>
        </div>
      </nav>
      <div
        class="mt-28 text-9xl font-extrabold text-gray-200 max-md:mt-10 max-md:max-w-full max-md:text-4xl"></div>
      <!-- <div class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"></div> -->
      <nav class="flex gap-8  mt-40 items-start text-base font-semibold whitespace-nowrap text-zinc-700 w-[430px]">
        <h1 class="grow self-stretch text-4xl font-bold">FIND</h1>
        <ul class="flex gap-8">
          <li>
            <button class="font-semibold" @click="selectOption('Rooms')">Rooms</button>
            <div v-if="focusedOption === 'Rooms'" class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"></div>
          </li>
          <li>
            <button class="font-semibold" @click="selectOption('Flats')">Flats</button>
            <div v-if="focusedOption === 'Flats'" class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"></div>
          </li>
          <li>
            <button class="font-semibold" @click="selectOption('Hostels')">Hostels</button>
            <div v-if="focusedOption === 'Hostels'" class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"></div>
          </li>
          <li>
            <button class="font-semibold" @click="selectOption('Villas')">Villas</button>
            <div v-if="focusedOption === 'Villas'" class="flex shrink-0 mt-1.5 h-0.5 bg-zinc-700 w-[30px]"></div>
          </li>
        </ul>
      </nav>

      <form
        class="flex gap-5 justify-between items-center py-2 pr-2 pl-8 mt-9 max-w-full font-semibold bg-white rounded-[35px] w-[794px] max-md:pl-5"
      >
        <div class="flex flex-col self-stretch my-auto">
          <label for="location" class="font-semibold self-start text-xs text-zinc-700">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Which city do you prefer?"
            class="mt-3 text-sm text-neutral-300"
          />
        </div>
        <div class="flex gap-4 self-stretch my-auto">
          <div class="shrink-0 w-px border border-solid border-zinc-300 h-[33px]"></div>
          <div class="flex flex-col self-start">
            <label for="checkIn" class="font-semibold self-start text-xs text-zinc-700">Check In</label>
            <input
              type="date"
              id="checkIn"
              placeholder="Add Dates"
              class="mt-3 text-sm text-neutral-300"
            />
          </div>
        </div>
        <div class="flex gap-4 self-stretch my-auto">
          <div class="shrink-0 w-px border border-solid border-zinc-300 h-[33px]"></div>
          <div class="flex flex-col self-start">
            <label for="checkOut" class="font-semibold self-start text-xs text-zinc-700">Check Out</label>
            <input
              type="date"
              id="checkOut"
              placeholder="Add Dates"
              class="mt-3 text-sm text-neutral-300"
            />
          </div>
        </div>
        <div class="flex gap-3.5 self-stretch my-auto">
          <div class="shrink-0 w-px border border-solid border-zinc-300 h-[33px]"></div>
          <div class="flex flex-col self-start">
            <label for="guests" class="font-semibold self-start text-xs text-zinc-700">Guests</label>
            <input
              type="number"
              id="guests"
              placeholder="Add Guests"
              class="mt-3 text-sm text-neutral-300"
            />
          </div>
        </div>
        <button type="submit" aria-label="Search">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f1d481ae89ba6816fdd35f3c920b02b63271681a6bcde2ffb9abf5a6d56c617?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
            class="object-contain shrink-0 self-stretch aspect-square w-[54px]"
            alt=""
          />
        </button>
      </form>
    </header>
    <main
      class="flex flex-col items-start px-20 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
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
            v-for="(property, index) in latestProperties"
            :key="index"
            :title="property.title"
            :address="property.address"
            :imageUrl="property.imageUrl"
          />
        </div>
      </section>
      <!-- <div
        class="flex flex-wrap gap-10 mt-5 w-full text-base font-semibold whitespace-nowrap max-w-[1046px] text-zinc-700 max-md:max-w-full"
      >
        <PropertyFeatures
          v-for="(property, index) in latestProperties"
          :key="index"
          :features="property.features"
        />
      </div> -->
      <h2 class="mt-24 text-4xl font-bold leading-10 text-zinc-700 max-md:mt-10 max-md:ml-0.5 w-[339px]">
        Nearby Listed Properties
      </h2>
      <div
        class="flex justify-between self-stretch mt-5 w-full text-base font-bold text-zinc-700 max-md:mr-0.5 max-md:max-w-full"
      >
        <div class="flex shrink-0 self-end mt-6 h-1.5 rounded bg-zinc-700 w-[140px]"></div>
        <button class="flex gap-2 self-start">
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
            v-for="(property, index) in nearbyProperties"
            :key="index"
            :title="property.title"
            :address="property.address"
            :imageUrl="property.imageUrl"
          />
        </div>
      </section>
      <h2 class="mt-24 text-4xl font-bold leading-10 text-zinc-700 max-md:mt-10 max-md:ml-1 w-[339px]">
        Top Rated Properties
      </h2>
      <div
        class="flex shrink-0 mt-9 h-1.5 rounded bg-zinc-700 w-[140px] max-md:mt-10 max-md:ml-1.5"
      ></div>
      <section class="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <PropertyCard
            v-for="(property, index) in topRatedProperties"
            :key="index"
            :title="property.title"
            :address="property.address"
            :imageUrl="property.imageUrl"
            :rating="property.rating"
          />
        </div>
      </section>
      <HostingBanner :banner="tryHostingBanner"/>
      <h2 class="mt-24 text-4xl font-bold leading-10 text-zinc-700 max-md:mt-10 max-md:ml-1 w-[339px]">
        Featured Properties on our Listing
      </h2>
      <div
        class="flex shrink-0 mt-9 h-1.5 rounded bg-zinc-700 w-[140px] max-md:mt-10 max-md:ml-1.5"
      ></div>
      <section class="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
        <div class="flex flex-wrap gap-5 max-md:flex-col">
          <PropertyFeaturesCard
            v-for="(property, index) in featuredProperties"
            :key="index"
            :title="property.title"
            :address="property.address"
            :imageUrl="property.imageUrl"
            :price="property.price"
            :features="property.features"
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
            v-for="(post, index) in blogPosts"
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
    <NewsletterSignup />
    <footer class="flex overflow-hidden flex-col w-full bg-white text-zinc-700 max-md:max-w-full">
      <div class="flex flex-col pt-20 pb-10 w-full bg-gray-100 max-md:max-w-full">
        <div
          class="flex flex-wrap gap-5 justify-between ml-20 w-full text-base max-w-[1109px] max-md:max-w-full"
        >
          <div class="flex flex-col items-start">
            <h2 class="text-5xl font-extrabold max-md:text-4xl">LOGO</h2>
            <p class="self-stretch mt-12 leading-5 text-neutral-400 max-md:mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="flex gap-3.5 mt-12 font-semibold whitespace-nowrap max-md:mt-10">
              <a href="#" class="flex gap-4 px-7 py-4 rounded-md bg-zinc-200 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/355775e06ca7ecfe22bfae1f1650061befb771abaadfc4a21e1468666d6fbe1a?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
                  class="object-contain shrink-0 aspect-square w-[22px]"
                  alt=""
                />
                <span class="my-auto">PlayStore</span>
              </a>
              <a href="#" class="flex gap-4 px-5 py-3.5 rounded-md bg-zinc-200 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/00e3ae3380727f4615ef95d549d020e9fdc04521685754528ee99b226690f383?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
                  class="object-contain shrink-0 w-6 aspect-square"
                  alt=""
                />
                <span>AppleStore</span>
              </a>
            </div>
          </div>
          <nav class="flex flex-col items-start self-start mt-3.5 font-medium leading-none">
            <h3 class="text-lg font-bold leading-none">COMPANY</h3>
            <ul>
              <li><a href="#" class="mt-9 block">About Us</a></li>
              <li><a href="#" class="self-stretch mt-6 block">Legal Information</a></li>
              <li><a href="#" class="mt-5 block">Contact Us</a></li>
              <li><a href="#" class="mt-6 block">Blogs</a></li>
            </ul>
          </nav>
          <nav class="flex flex-col items-start self-start mt-3.5 font-medium leading-none">
            <h3 class="self-stretch text-lg font-bold leading-none">HELP CENTER</h3>
            <ul>
              <li><a href="#" class="mt-9 block">Find a Property</a></li>
              <li><a href="#" class="mt-5 block">How To Host?</a></li>
              <li><a href="#" class="mt-6 block">Why Us?</a></li>
              <li><a href="#" class="mt-5 block">FAQs</a></li>
              <li><a href="#" class="mt-5 block">Rental Guides</a></li>
            </ul>
          </nav>
          <div class="flex flex-col my-auto font-medium leading-none">
            <address class="flex flex-col items-start pl-2.5 not-italic">
              <h3 class="text-lg font-bold leading-none">CONTACT INFO</h3>
              <p class="mt-9">Phone: <a href="tel:1234567890">1234567890</a></p>
              <p class="mt-5">Email: <a href="mailto:company@email.com">company@email.com</a></p>
              <p class="self-stretch mt-5">Location: 100 Smart Street, LA, USA</p>
            </address>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab55275caed5830765492c7a59099e8f83287e2e4540c8cc00b85ae34ea9ef61?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
              class="object-contain mt-9 max-w-full aspect-[5.03] w-[191px]"
              alt="Social media icons"
            />
          </div>
        </div>
        <div
          class="mt-48 w-full border border-solid border-zinc-200 min-h-[1px] max-md:mt-10 max-md:max-w-full"
        ></div>
        <div
          class="flex flex-wrap gap-5 justify-between self-center mt-10 w-full text-base font-semibold leading-none max-w-[1207px] max-md:max-w-full"
        >
          <p>© 2022 thecreation.design | All rights reserved</p>
          <p class="text-right">
            Created with love by <span class="font-bold">thecreation.design</span>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import PropertyFeatures from './PropertyFeatures.vue'
import HostingBanner from './HostingBanner.vue'
import BlogPost from './BlogPost.vue'
import AppDownloadBanner from './AppDownloadBanner.vue'
import AboutSection from './AboutSection.vue'
import NewsletterSignup from './NewsletterSignup.vue'
import PropertyCard from './PropertyCard.vue'
import type {
  blogPostType,
  featuredProperty,
  latestProperty,
  nearbyProperty,
  topRatedProperty
} from '../../assets/types/types'
import PropertyFeaturesCard from './PropertyFeaturesCard.vue'

export default defineComponent({
  name: 'PropertyListing',
  components: {
    PropertyCard,
    // PropertyFeatures,
    PropertyFeaturesCard,
    HostingBanner,
    BlogPost,
    AppDownloadBanner,
    AboutSection,
    NewsletterSignup
  },
  setup() {
    const latestProperties = ref<latestProperty[]>([
      {
        title: 'Well Furnished Apartment',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
      },
      {
        title: 'Comfortable Family Flat',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
      },
      {
        title: 'Beach House Summer',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
      },
      {
        title: 'Double Size Room',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
      }
    ])
    const nearbyProperties = ref<nearbyProperty[]>([
      {
        title: 'Well Furnished Apartment',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
      },
      {
        title: 'Comfortable Family Flat',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
      },
      {
        title: 'Beach House Summer',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
      },
      {
        title: 'Double Size Room',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
      }
    ])
    const topRatedProperties = ref<topRatedProperty[]>([
      {
        title: 'Well Furnished Apartment',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        rating: 5
      },
      {
        title: 'Comfortable Family Flat',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        rating: 5
      },
      {
        title: 'Beach House Summer',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        rating: 5
      },
      {
        title: 'Double Size Room',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f82f2199cd3cee458ca29d36b8525cd64f4e741a9f727f2144f499512f40c?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        rating: 5
      }
    ])
    const featuredProperties = ref<featuredProperty[]>([
      {
        title: 'Well Furnished Apartment',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        price: '$ 1000 - 5000 USD',
        features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
      },
      {
        title: 'Blue Door Villa Modern',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        price: '$ 1000 - 5000 USD',
        features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
      },
      {
        title: 'Beach House Apartment',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        price: '$ 1000 - 5000 USD',
        features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
      },
      {
        title: 'Well Furnished Apartment',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        price: '$ 1000 - 5000 USD',
        features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
      },
      {
        title: 'Blue Door Villa Modern',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        price: '$ 1000 - 5000 USD',
        features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
      },
      {
        title: 'Double Size Room',
        address: '100 Smart Street, LA, USA',
        imageUrl:
          'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
        price: '$ 1000 - 5000 USD',
        features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
      }
    ])
    const blogPosts = ref<blogPostType[]>([
      {
        title: 'Choose the right property!',
        category: 'Economy',
        imageUrl: '../../assets/images/choose-the-right-property-details.jpg'
      },
      {
        title: 'Best environment for rental',
        category: 'Lifestyle',
        imageUrl: '../../assets/images/choose-the-right-property-details.jpg'
      },
      {
        title: 'Boys Hostel Apartment',
        category: 'Property',
        imageUrl: '../../assets/images/choose-the-right-property-details.jpg'
      }
    ])

    const focusedOption = ref('Rooms')
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

    const selectOption = (option: string) => {
      // Handle option selection
      console.log(`Selected option: ${option}`);
      focusedOption.value = option
    }
    
    return {
      latestProperties,
      nearbyProperties,
      topRatedProperties,
      featuredProperties,
      blogPosts,
      selectOption,
      focusedOption,
      tryHostingBanner,
      browseForBanner
    }
  }
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
}
</style>
