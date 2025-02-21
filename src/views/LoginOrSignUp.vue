<template>
  <section
    class="flex mx-auto overflow-hidden flex-col justify-center px-5 py-5 rounded-3xl bg-white bg-opacity-0 max-w-[658px] max-md:pr-5 mt-[80px]"
  >
    <div
      class="flex flex-col px-10 pt-6 pb-11 w-full bg-white rounded-xl shadow-[0px_0px_8px_rgba(194,198,204,0.6)] max-md:px-5 max-md:max-w-full"
    >
      <header
        class="flex flex-wrap gap-5 justify-between text-lg font-bold text-zinc-700 max-md:max-w-full"
      >
        <h1 data-layername="loginOrSignup">Login or Signup</h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/ec3d822fa3a24e8687a1fab7765c30ec/441315da72b6d7bea546cd26e12de7e39775cd069a27650dbac2d5ae063ff7a1?apiKey=ec3d822fa3a24e8687a1fab7765c30ec&"
          alt=""
          class="object-contain shrink-0 self-start mt-1 aspect-square w-[15px]"
        />
      </header>
      <hr class="shrink-0 mt-7 max-w-full h-px border-t border-solid border-zinc-200 w-[536px]" />
      <div class="mt-12">
        <div
          class="flex flex-wrap pr-20 pl-7 bg-white border border-solid border-neutral-300 rounded-[30px] max-md:px-5 max-md:mt-10 h-[60px]"
          v-if="step === 1"
        >
          <div class="flex flex-col py-2 w-[35%] pr-[10px] border-r">
            <label for="country" class="self-start text-xs font-medium text-neutral-400"
              >Country</label
            >
            <select v-model="countryCode" class="mt-1.5 text-sm font-semibold text-zinc-700 w-full">
              <option>UAE (+971)</option>
              <option>US (+1)</option>
              <!-- Add more country options here -->
            </select>
          </div>
          <div class="flex flex-col self-stretch my-auto pl-2 w-[65%]">
            <label for="phoneNumber" class="self-start text-xs font-medium text-neutral-400"
              >Phone Number</label
            >
            <input
              type="tel"
              id="phoneNumber"
              v-model="phoneNumber"
              placeholder="Enter Your Number"
              required
              class="mt-2 text-sm font-semibold text-zinc-700 bg-transparent border-none"
            />
          </div>
        </div>
        <p
          v-if="step === 1"
          class="self-center mt-5 text-sm font-light text-neutral-400 max-md:max-w-full"
        >
          We'll call or text you to confirm your number. Standard message and data rates apply.
        </p>
        <div class="flex gap-5 mt-8 max-md:ml-1" v-if="step === 2">
          <div
            class="flex shrink-0 rounded-full bg-zinc-200 h-[60px] w-[60px]"
            role="img"
            aria-label="User avatar"
          ></div>
          <div class="flex flex-col my-auto">
            <p data-layername="helloJohnDoe" class="text-base font-bold text-zinc-700">
              Hello, John Doe
            </p>
            <button
              data-layername="notYou"
              @click="step = 1"
              class="self-start mt-2.5 text-sm font-semibold text-neutral-400"
            >
              Not You?
            </button>
          </div>
        </div>
        <div
          v-if="step === 2"
          class="flex flex-col items-start self-stretch px-5 py-2 mt-5 bg-white border border-solid border-neutral-300 rounded-[30px] max-md:px-5 max-md:max-w-full"
        >
          <label for="password" class="text-xs font-medium text-neutral-400"> Password </label>
          <el-input
            v-model="password"
            type="password"
            id="password"
            class="passswordInput mt-2 text-sm font-semibold text-zinc-700 bg-transparent w-full"
            placeholder="Enter Your Password"
            show-password
            required
          />
        </div>
        <button
          v-if="step === 2"
          type="button"
          data-layername="forgotYourPassword"
          class="mt-4 ml-2.5 text-sm font-medium text-neutral-400"
        >
          Forgot Your Password?
        </button>
        <div class="flex gap-6 self-start mt-6 max-md:ml-1">
          <button
            type="submit"
            v-if="step === 1"
            @click="nextStep"
            class="px-14 py-[18px] text-base font-bold text-white whitespace-nowrap bg-neutral-400 rounded-[30px] max-md:px-5 hover:bg-gray-700"
          >
            Continue
          </button>
          <button
            type="submit"
            v-if="step === 2"
            @click="submit"
            class="px-14 py-[18px] text-base font-bold text-white whitespace-nowrap bg-neutral-400 rounded-[30px] max-md:px-5 hover:bg-gray-700"
          >
            Sign up
          </button>
          <button type="button" class="flex items-center gap-2.5 my-auto text-sm">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/ec3d822fa3a24e8687a1fab7765c30ec/e49a943abe8f89cc095e78c4134cf5d57375e7dd555d5ab6323b9e7796620cf0?apiKey=ec3d822fa3a24e8687a1fab7765c30ec&"
              alt=""
              class="object-contain shrink-0 aspect-square w-[26px]"
            />
            <span class="font-semibold text-zinc-700">Continue With Email</span>
          </button>
        </div>
      </div>
      <!-- Error Message -->
      <p v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>

      <div class="mt-[24px] flex items-center">
        <div class="border-dash w-[10%]"></div>
        <span class="w-[22%] pl-2 text-xs font-semibold text-neutral-400">Or Continue With</span>
        <div class="border-dash w-[68%]"></div>
      </div>
      <div
        class="flex flex-wrap gap-4 mt-6 w-full text-sm font-semibold max-w-[485px] text-zinc-700 max-md:max-w-full"
      >
        <button
          class="flex items-center flex-1 gap-3 px-6 py-4 whitespace-nowrap bg-gray-200 rounded-[30px] max-md:px-5"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/ec3d822fa3a24e8687a1fab7765c30ec/7d2371a829dece5a4d9269d257cf991c6a34cfc95ac97a5032bc8e421220fc47?apiKey=ec3d822fa3a24e8687a1fab7765c30ec&"
            alt=""
            class="object-contain shrink-0 w-6 aspect-square"
          />
          Facebook
        </button>
        <button
          class="flex items-center flex-1 gap-3.5 px-7 py-4 bg-gray-200 rounded-[30px] max-md:px-5"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/ec3d822fa3a24e8687a1fab7765c30ec/a562eb4389d077da8699fc28b9d6854473a434dcaae399685d820ddc45cf2601?apiKey=ec3d822fa3a24e8687a1fab7765c30ec&"
            alt=""
            class="object-contain shrink-0 aspect-[0.86] w-[18px]"
          />
          Apple ID
        </button>
        <button
          class="flex items-center flex-1 gap-4 px-7 py-5 whitespace-nowrap bg-gray-200 rounded-[30px] max-md:px-5"
          @click="loginGoogleAccount"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/ec3d822fa3a24e8687a1fab7765c30ec/adab7d174c0e84bf78ae36675d39e9301d771068c5d65ba61730a95ae5d93407?apiKey=ec3d822fa3a24e8687a1fab7765c30ec&"
            alt=""
            class="object-contain shrink-0 aspect-square w-[19px]"
          />
          Google
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { signIn } from '@/stores/api/authService'
import { googleTokenLogin } from 'vue3-google-login'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/useUserStore'

const router = useRouter()
const step = ref(1)
const countryCode = ref('UAE (+971)')
const phoneNumber = ref('')
const password = ref('')
const errorMessage = ref('')

function nextStep() {
  if (phoneNumber.value) {
    step.value = 2
  }
}

const countryCodeValue = computed(() => {
  const match = countryCode.value.match(/\(?(\d+)\)?/)
  return match ? match[1] : null
})

async function submit() {
  try {
    const phone = countryCodeValue.value + phoneNumber.value
    // Giả lập xác thực tài khoản - thay thế bằng API thực tế
    const response = await signIn(phone, password.value)
    const { token } = response.data
    localStorage.setItem('token', token) // Lưu token
    if (errorMessage.value) {
      errorMessage.value = ''
    }
    useUserStore().login(token)
    ElMessage({
      message: 'Sign in successful!',
      type: 'success',
      duration: 4000
    })
    router.push('/')
  } catch (error) {
    console.error('Error during authentication:', error)
    errorMessage.value = 'An error occurred. Please try again.'
  }
}

const loginGoogleAccount = () => {
  googleTokenLogin().then((response) => {
    console.log('Handle the response', response)
  })
}
</script>

<style scoped>
.border-dash {
  height: 1px;
  border-top: 1px solid #e0e2e6;
}
#phoneNumber:focus-visible {
  border: none;
  outline: none;
}
.passswordInput :deep(.el-input__wrapper) {
  box-shadow: none;
  padding: 1px 0;
}
</style>
