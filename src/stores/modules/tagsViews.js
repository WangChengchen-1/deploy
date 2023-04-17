export const useTagsViewsStore = defineStore("tags-views", {
  state: () => ({
    visitedViews: [],
  }),
  actions: {
    addVisitedView(view) {
      if (this.visitedViews.some((v) => v.path === view.path)) return;
      this.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || "no-name",
        })
      );
    },
    removeView(index){
        this.visitedViews.splice(index,1)
    }
  },
  //持久化store
  persist: {
    enabled: true,
  },
});
