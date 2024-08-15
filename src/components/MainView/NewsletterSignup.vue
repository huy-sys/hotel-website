<template>
  <section
    class="flex flex-col justify-center items-center px-16 py-8 mt-28 w-full bg-gray-200 max-md:px-5 max-md:mt-10 max-md:max-w-full"
  >
    <div class="flex flex-wrap gap-10 w-full max-w-[1000px] max-md:max-w-full">
      <div class="flex flex-col my-auto text-zinc-700">
        <h2 class="text-lg font-bold leading-none">NEWSLETTER</h2>
        <p class="self-start mt-3 text-sm font-medium leading-none">
          Stay Up to Date
        </p>
      </div>
      <form
        @submit.prevent="submitNewsletter"
        class="flex flex-wrap flex-auto gap-10 pr-px pl-6 text-sm font-medium leading-none bg-white rounded-3xl border border-gray-200 border-solid text-neutral-400 max-md:pl-5 max-md:max-w-full"
      >
        <label for="email" class="sr-only">Your Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Your Email..."
          class="flex-grow my-auto bg-transparent border-none focus:outline-none"
          required
        />
        <button type="submit" aria-label="Subscribe to newsletter">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/889e26c0522405fb50beb6e9b25adf982b69b94777e9917d8729f82c94671364?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
            class="object-contain shrink-0 aspect-square w-[52px]"
            alt=""
          />
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewsletterSignup",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    submitNewsletter() {
      // Handle newsletter submission
      console.log("Newsletter submitted with email:", this.email);
      // Reset email after submission
      this.email = "";
    },
  },
});
</script>
