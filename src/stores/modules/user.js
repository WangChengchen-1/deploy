// 1. 它的第一个参数要求是一个独一无二的名字：
// 2. 为了养成习惯性的用法，将返回的函数命名为 use... 是一个符合组合式函数风格的约定。
const useUserStore = defineStore("user", {
  state: () => ({
    avatar: "",
  }),
  actions: {
    login(userInfo) {
      this.avatar = userInfo.username;
    },
    logout() {
      return new Promise((resolve, reject) => {
        localStorage.removeItem("isAuthenticated");
        sessionStorage.removeItem("isAuthenticated");
        resolve();
      }).catch((err) => reject(err));
    },
  },
  //持久化store
  persist: {
    enabled: true,
  },
});

export default useUserStore;
