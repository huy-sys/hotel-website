<template>
  <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div
      class="flex flex-col grow py-6 px-5 w-full rounded-lg bg-image cursor-pointer max-md:mt-8 transform transition duration-300 hover:scale-105"
    >
      <div class="flex" :class="rating ? 'justify-between' : 'justify-end'">
        <div class="star-rating" v-if="rating">
          <input type="range" v-model="localRating" min="0" max="5" step="1" />
          <div class="stars">
            <span v-for="n in 5" :key="n" :class="{ filled: n <= localRating }"> ★ </span>
          </div>
        </div>
        <!-- <img
          src="@/assets/icons/HeartLight.vue"
          loading="lazy"
          class="text-white object-contain self-center aspect-[1.13] w-[26px]"
          alt=""
        /> -->
        <div class="text-white object-contain self-center aspect-[1.13] w-[26px] hover:scale-110 transition-all duration-300">
          <svg
            width="28"
            height="28"
            viewBox="0 0 22 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9063 2.34377C18.8873 1.32738 17.5074 0.755816 16.0682 0.754059C14.629 0.752302 13.2477 1.3205 12.2263 2.33439L11 3.47345L9.77282 2.33064C8.75165 1.31233 7.36779 0.741392 5.92567 0.743414C4.48354 0.745435 3.10128 1.32026 2.08298 2.34142C1.06467 3.36259 0.493726 4.74645 0.495748 6.18858C0.49777 7.6307 1.07259 9.01296 2.09376 10.0313L10.4703 18.5306C10.5401 18.6015 10.6233 18.6578 10.715 18.6962C10.8068 18.7346 10.9052 18.7544 11.0047 18.7544C11.1042 18.7544 11.2026 18.7346 11.2944 18.6962C11.3861 18.6578 11.4693 18.6015 11.5391 18.5306L19.9063 10.0313C20.9253 9.01163 21.4977 7.62907 21.4977 6.18752C21.4977 4.74596 20.9253 3.3634 19.9063 2.34377ZM18.8422 8.97752L11 16.9313L3.15313 8.97002C2.41467 8.23155 1.99981 7.22999 1.99981 6.18564C1.99981 5.1413 2.41467 4.13973 3.15313 3.40127C3.89159 2.6628 4.89316 2.24794 5.93751 2.24794C6.98185 2.24794 7.98342 2.6628 8.72188 3.40127L8.74063 3.42002L10.4891 5.04658C10.6279 5.17574 10.8104 5.24754 11 5.24754C11.1896 5.24754 11.3722 5.17574 11.5109 5.04658L13.2594 3.42002L13.2781 3.40127C14.0171 2.6633 15.0189 2.24911 16.0633 2.24982C17.1076 2.25052 18.1089 2.66606 18.8469 3.40502C19.5848 4.14398 19.999 5.14583 19.9983 6.19017C19.9976 7.23451 19.5821 8.2358 18.8431 8.97377L18.8422 8.97752Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div class="flex flex-col items-start mt-36 max-md:px-5 max-md:mt-10">
        <img
          class="flex mb-4 shrink-0 rounded-full bg-neutral-300 h-[70px] w-[70px]"
          src="../../assets/images/avartar_card.jpg"
        />
        <h3 class="self-stretch mt-1 text-lg font-bold leading-3 text-white">
          {{ title }}
        </h3>
        <p class="mt-2 text-sm font-medium text-white">{{ address }}</p>
        <p v-if="price" class="mt-4 text-lg font-semibold text-neutral-400">
          {{ price }}
        </p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import HeartLight from '@/assets/icons/HeartLight.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'PropertyCard',
  props: {
    title: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      default: 0
    },
    price: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    // Define the rating as a ref to make it reactive
    const localRating = ref<number>(props.rating)

    // Function to update stars based on the input value
    const updateStars = () => {
      // This function is triggered by the input event
      // The rating will automatically update due to v-model binding
    }

    // Function to manually set the rating when a star is clicked
    const setRating = (value: number) => {
      localRating.value = value
    }
    return {
      localRating,
      updateStars,
      setRating
    }
  }
})
</script>
<style scoped>
.star-rating {
  display: inline-flex;
  align-items: center;
}

input[type='range'] {
  display: none; /* Hide the input range slider */
}

.stars {
  display: flex;
  cursor: pointer;
}

.stars span {
  font-size: 1.5rem;
  color: gray;
}

.stars span.filled {
  color: gold;
}
.bg-image {
  background-image: url(../../assets/images/demo_rooms.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
