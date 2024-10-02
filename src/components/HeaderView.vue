<template>
  <header
    class="fixed flex flex-col items-center pt-1.5 mx-auto max-md:max-w-full w-full z-[999]"
    :style="{ backgroundColor: backgroundColor }"
  >
    <nav
      class="flex overflow-hidden flex-wrap gap-10 self-stretch px-20 py-1.5 mx-auto bg-white bg-opacity-0 max-md:px-5 max-md:max-w-full w-[1720px]"
    >
      <a class="grow shrink my-auto text-4xl font-extrabold text-zinc-700 w-[60px]" href="/">
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
          <a href="#" class="px-10 py-[14px] my-auto rounded-3xl bg-zinc-700 max-md:px-5">
            Become A Host
          </a>
          <div class="menu-list flex items-center">
            <button class="mr-[15px]" @click="toggleMenu">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C2 5.73478 2.10536 5.48043 2.29289 5.29289C2.48043 5.10536 2.73478 5 3 5H21C21.2652 5 21.5196 5.10536 21.7071 5.29289C21.8946 5.48043 22 5.73478 22 6C22 6.26522 21.8946 6.51957 21.7071 6.70711C21.5196 6.89464 21.2652 7 21 7H3C2.73478 7 2.48043 6.89464 2.29289 6.70711C2.10536 6.51957 2 6.26522 2 6Z"
                  fill="#484848"
                />
                <path
                  d="M2 12.032C2 11.7668 2.10536 11.5124 2.29289 11.3249C2.48043 11.1373 2.73478 11.032 3 11.032H21C21.2652 11.032 21.5196 11.1373 21.7071 11.3249C21.8946 11.5124 22 11.7668 22 12.032C22 12.2972 21.8946 12.5516 21.7071 12.7391C21.5196 12.9266 21.2652 13.032 21 13.032H3C2.73478 13.032 2.48043 12.9266 2.29289 12.7391C2.10536 12.5516 2 12.2972 2 12.032Z"
                  fill="#484848"
                />
                <path
                  d="M3 17.064C2.73478 17.064 2.48043 17.1693 2.29289 17.3569C2.10536 17.5444 2 17.7987 2 18.064C2 18.3292 2.10536 18.5835 2.29289 18.7711C2.48043 18.9586 2.73478 19.064 3 19.064H21C21.2652 19.064 21.5196 18.9586 21.7071 18.7711C21.8946 18.5835 22 18.3292 22 18.064C22 17.7987 21.8946 17.5444 21.7071 17.3569C21.5196 17.1693 21.2652 17.064 21 17.064H3Z"
                  fill="#484848"
                />
              </svg>
            </button>
            <div v-if="isMenuOpen" class="menu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <button class="avatar">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0003 0.666748C9.06183 0.666748 0.666992 9.06158 0.666992 19.0001C0.666992 28.9386 9.06183 37.3334 19.0003 37.3334C28.9388 37.3334 37.3337 28.9386 37.3337 19.0001C37.3337 9.06158 28.9388 0.666748 19.0003 0.666748ZM19.0003 9.83342C22.1665 9.83342 24.5003 12.1654 24.5003 15.3334C24.5003 18.5014 22.1665 20.8334 19.0003 20.8334C15.836 20.8334 13.5003 18.5014 13.5003 15.3334C13.5003 12.1654 15.836 9.83342 19.0003 9.83342ZM9.63933 27.7487C11.2838 25.3287 14.0265 23.7154 17.167 23.7154H20.8337C23.976 23.7154 26.7168 25.3287 28.3613 27.7487C26.0183 30.2567 22.6945 31.8334 19.0003 31.8334C15.3062 31.8334 11.9823 30.2567 9.63933 27.7487Z"
                  fill="#C2C6CC"
                />
              </svg>
            </button>
          </div>
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
    return scrollBackgroundColor.value // Nếu cuộn, ưu tiên màu nền khi cuộn
  }
  if (route.name === 'home') {
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
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
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
.menu-list {
  background-color: white;
  height: 46px;
  padding-right: 4px;
  padding-left: 20px;
  border-radius: 23px;
}
.menu {
  position: absolute;
  top: 50px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 1em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu ul li {
  margin: 0.5em 0;
}

.menu ul li a {
  text-decoration: none;
  color: black;
}

.menu ul li a:hover {
  color: #007BFF;
}
</style>
