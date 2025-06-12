<template>
  <footer class="footer-container flex overflow-hidden flex-col w-full bg-white text-zinc-700 max-md:max-w-full">
    <div class="flex flex-col pt-20 pb-10 w-full bg-gray-100 max-md:max-w-full">
      <div
        class="flex flex-wrap gap-5 justify-between mx-auto w-full text-base max-w-[1720px] max-md:max-w-full"
      >
        <div class="flex flex-col items-start">
          <h2 class="text-5xl font-extrabold max-md:text-4xl">LOGO</h2>
          <p class="self-stretch mt-12 leading-5 text-neutral-400 w-[330px] max-md:mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="flex gap-3.5 mt-12 font-semibold whitespace-nowrap max-md:mt-10">
            <router-link to="#" class="flex gap-4 px-7 py-4 rounded-md bg-zinc-200 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/355775e06ca7ecfe22bfae1f1650061befb771abaadfc4a21e1468666d6fbe1a?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
                class="object-contain shrink-0 aspect-square w-[22px]"
                alt=""
              />
              <span class="my-auto">PlayStore</span>
            </router-link>
            <router-link to="#" class="flex gap-4 px-5 py-3.5 rounded-md bg-zinc-200 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/00e3ae3380727f4615ef95d549d020e9fdc04521685754528ee99b226690f383?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
                class="object-contain shrink-0 w-6 aspect-square"
                alt=""
              />
              <span>AppleStore</span>
            </router-link>
          </div>
        </div>
        <nav class="flex flex-col items-start self-start mt-3.5 font-medium leading-none">
          <h3 class="text-lg font-bold leading-none">COMPANY</h3>
          <ul>
            <li><router-link to="#" class="mt-9 block">About Us</router-link></li>
            <li><router-link to="#" class="self-stretch mt-5 block">Legal Information</router-link></li>
            <li><router-link to="#" class="mt-5 block">Contact Us</router-link></li>
            <li><router-link to="#" class="mt-5 block">Blogs</router-link></li>
          </ul>
        </nav>
        <nav class="flex flex-col items-start self-start mt-3.5 font-medium leading-none">
          <h3 class="self-stretch text-lg font-bold leading-none">HELP CENTER</h3>
          <ul>
            <li><router-link to="#" class="mt-9 block">Find a Property</router-link></li>
            <li><router-link to="#" class="mt-5 block">How To Host?</router-link></li>
            <li><router-link to="#" class="mt-5 block">Why Us?</router-link></li>
            <li><router-link to="#" class="mt-5 block">FAQs</router-link></li>
            <li><router-link to="#" class="mt-5 block">Rental Guides</router-link></li>
          </ul>
        </nav>
        <div class="flex flex-col mt-3.5 font-medium leading-none">
          <address class="flex flex-col items-start pl-2.5 not-italic">
            <h3 class="text-lg font-bold leading-none">CONTACT INFO</h3>
            <p class="mt-9">Phone: <router-link to="tel:1234567890">1234567890</router-link></p>
            <p class="mt-5">Email: <router-link to="mailto:company@email.com">company@email.com</router-link></p>
            <p class="self-stretch mt-5">Location: 100 Smart Street, LA, USA</p>
          </address>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab55275caed5830765492c7a59099e8f83287e2e4540c8cc00b85ae34ea9ef61?placeholderIfAbsent=true&apiKey=ec3d822fa3a24e8687a1fab7765c30ec"
            class="object-contain mt-10 max-w-full aspect-[5.03] w-[191px]"
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
</template>

<script setup lang="ts"></script>

<style scoped></style>
