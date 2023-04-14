export const useAppStore = defineStore("app", {
  state: () => ({
    isCollapse: false,
  }),
  actions: {
    toggleSideBarHide(status) {
      console.log(status);
      this.isCollapse = status;
    },
  },
});
