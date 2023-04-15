export const useAppStore = defineStore("app", {
  state: () => ({
    isCollapse: false,
  }),
  actions: {
    toggleSideBarHide(status) {
      this.isCollapse = status;
    },
  },
});
