import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  state: () => ({ name: "小明" }),
  getters: {
    double: (state) => state.name + "是猪",
  },
  actions: {
    increment(str: string) {
      this.name += str
    },
  },
})
