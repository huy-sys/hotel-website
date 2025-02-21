import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false as boolean,
    token: '' as string,
  }),
  actions: {
    login(token: string) {
      this.isLoggedIn = true;
      this.token = token;
    },
    logout() {
      this.isLoggedIn = false;
      this.token = '';
    },
    persist: true, // Tùy chọn này cho phép lưu trạng thái store vào localStorage
  },
});
