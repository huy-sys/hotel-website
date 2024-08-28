<template>
  <div class="flex overflow-hidden flex-col bg-white rounded-3xl">
    <HeaderView />
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
      <h2
        class="mt-24 text-4xl font-bold leading-10 text-zinc-700 max-md:mt-10 max-md:ml-0.5 w-[339px]"
      >
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
            v-for="(property, index) in topRatedProperties"
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
            v-for="(property, index) in featuredProperties"
            :key="index"
            :title="property.title"
            :address="property.address"
            :imageUrl="property.imageUrl"
            :price="property.price"
            :features="property.features"
            :features_images="property.features_images"
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
    <FooterView />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
import HeaderView from '../HeaderView.vue'
import FooterView from '../FooterView.vue'

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
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
  },
  {
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
  },
  {
    title: 'Beach House Apartment',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
  },
  {
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
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
  },
  {
    title: 'Blue Door Villa Modern',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
    features: { bedrooms: 3, bathrooms: 1, area: 2, parking: 0 }
  },
  {
    title: 'Double Size Room',
    address: '100 Smart Street, LA, USA',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/493fb20e14288ddbbd8fed9ea911e386d7f0ea3691ebcc34de4c164fb8329434?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec',
    price: '$ 1000 - 5000 USD',
    features_images: [
      '../../assets/images/feature_1.webp',
      '../../assets/images/feature_2.webp',
      '../../assets/images/feature_3.webp',
      '../../assets/images/feature_4.webp'
    ],
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
