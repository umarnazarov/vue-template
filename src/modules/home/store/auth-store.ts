import { defineStore } from "pinia";

export const useHomeStore = defineStore(
  "home",
  () => {
    return {};
  },
  {
    persist: true,
  }
);
