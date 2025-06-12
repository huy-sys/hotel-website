import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false as boolean,
    token: '' as string
  }),
  actions: {
    login(token: string) {
      this.isLoggedIn = true
      this.token = token
    },
    logout() {
      this.isLoggedIn = false
      this.token = ''
    },
    persist: {
      key: 'userStore', // Tên key trong localStorage
      storage: localStorage // Lưu vào localStorage
    }
  }
})
