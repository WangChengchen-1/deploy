<!--
 * new page
 * @author: wangcc
 * @since: 2023-04-17
 * @name: tags-view
-->
<template>
  <div class="tags-view-container">
    <ScrollPane>
      <router-link
        class="tags-view-item"
        :class="{ active: isActive(tag) }"
        v-for="(tag, index) in visitedViews"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        :key="tag.path"
      >
        <span class="circle" v-if="isActive(tag)"></span>
        {{ tag.title }}
        <el-icon v-if="!isAffix(tag)" @click.prevent.stop="close(tag, index)">
          <Close />
        </el-icon>
      </router-link>
    </ScrollPane>
  </div>
</template>

<script setup>
import ScrollPane from './ScrollPane.vue';
import { useTagsViewsStore } from '@/stores/modules/tagsViews';

const route = useRoute();
const router = useRouter();
const tagsView = useTagsViewsStore();
const visitedViews = computed(() => tagsView.visitedViews);
const isAffix = computed(() => {
  return (v) => {
    return v?.meta?.affix;
  };
});

function isActive(tag) {
  return tag.path === route.path;
}
/**
 * 添加标签
 */
function addTags() {
  const { name } = route;
  if (name) {
    tagsView.addVisitedView(route);
  }
}

/**
 * 关闭
 */
function close(tag, index) {
  //close active tag
  tagsView.removeView(index);
  if (isActive(tag)) {
    GoToLastView(visitedViews, tag);
  }
}

/**
 * 跳转到最后一个标签
 */
function GoToLastView(visitedViews, view) {
  const latestView = visitedViews.value.slice(-1)[0];
  if (latestView) {
    router.push(latestView.fullPath);
  }
}

watch(route, () => {
  addTags();
});
onMounted(() => {
  addTags();
});
</script>

<style scoped lang="scss">
.tags-view-container {
  height: 34px;
  width: 100%;

  .tags-view-item {
    display: inline-block;
    height: 25px;
    line-height: 25px;
    border: 1px solid #d8dce5;
    margin-left: 10px;
    padding: 0 8px;
    font-size: 12px;
    color: #333;
    border-radius: 5px;
    white-space: nowrap;

    /* 圆 */
    .circle {
      display: inline-block;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: #fff;
    }

    /* 关闭图标 */
    i {
      top: 2px;

      &:hover {
        transform: scale(1.5);
      }
    }

    /* 激活状态 */
    &.active {
      background-color: rgb(64, 158, 255);
      color: #fff;
    }
  }
}
</style>
