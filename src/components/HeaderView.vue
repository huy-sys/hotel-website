<template>
  <header
    class="fixed flex flex-col items-center pt-1.5 mx-auto max-md:max-w-full w-full z-[999]"
    :style="{ backgroundColor: backgroundColor }"
  >
    <nav
      class="flex overflow-hidden flex-wrap gap-10 self-stretch px-20 py-1.5 mx-auto bg-white bg-opacity-0 max-md:px-5 max-md:max-w-full w-[1720px]"
    >
      <a
        class="grow shrink my-auto text-4xl font-extrabold text-zinc-700 w-[60px]"
        href="/"
      >
        LOGO
      </a>
      <div class="flex flex-wrap gap-10 font-semibold">
        <ul
          class="flex flex-wrap flex-auto gap-8 my-auto text-base text-zinc-700 max-md:max-w-full"
        >
          <li><a href="/propertyList" class="font-semibold grow">Find a Property</a></li>
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
  </header>
</template>

<script setup lang="ts">
import router from '@/router'
import { useRoute } from 'vue-router'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const scrollBackgroundColor = ref('')
const route = useRoute()

const backgroundColor = computed(() => {
  if (scrollBackgroundColor.value) {
    return scrollBackgroundColor.value  // Nếu cuộn, ưu tiên màu nền khi cuộn
  }
  if(route.name === 'home') {
    return 'transparent'
  } else {
    return '#EFF0F2'
  }
})

const handleScroll = () => {
  const mainContainer = document.getElementsByClassName('main-container')
  const childDiv2Position = mainContainer[0].getBoundingClientRect().top
  const scrollPosition = window.scrollY
  console.log(scrollPosition)

  if (childDiv2Position >= 210) {
    scrollBackgroundColor.value = 'transparent'
  } else {
    scrollBackgroundColor.value = '#EFF0F2'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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
h1:hover {
  cursor: pointer;
}
</style>
