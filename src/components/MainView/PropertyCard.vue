<template>
  <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div class="flex flex-col grow py-6 px-1 w-full rounded-lg bg-zinc-200 max-md:mt-8">
      <div class="flex">
        <div class="star-rating">
          <input type="range" v-model="localRating" min="0" max="5" step="1" @input="updateStars" />
          <div class="stars">
            <span v-for="n in 5" :key="n" :class="{ filled: n <= rating }" @click="setRating(n)">
              ★
            </span>
          </div>
        </div>
        <img
          :src="imageUrl"
          loading="lazy"
          class="object-contain self-end aspect-[1.13] w-[26px] max-md:mr-2.5 mr-2"
          alt=""
        />
      </div>
      <div class="flex flex-col items-start px-5 mt-36 max-md:px-5 max-md:mt-10">
        <div class="flex mb-4 shrink-0 rounded-full bg-neutral-300 h-[70px] w-[70px]"></div>
        <h3 class="self-stretch mt-1 text-lg font-bold leading-3 text-zinc-700">
          {{ title }}
        </h3>
        <p class="mt-2 text-sm font-medium text-neutral-400">{{ address }}</p>
        <p v-if="price" class="mt-4 text-lg font-semibold text-neutral-400">
          {{ price }}
        </p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
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
  font-size: 2rem;
  color: gray;
}

.stars span.filled {
  color: gold;
}
</style>