export const useHomeStore = defineStore('home', {
  state: () => ({
    activeItem: {},
  }),
  getters: {},
  actions: {
    setActiveItem(obj) {
      this.activeItem = obj;
    },
  },
  persist: true,
});
