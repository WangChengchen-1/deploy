/*
 * new page
 * @author: wangcc
 * @since: 2023-04-08
 * @name: 顶部导航栏
*/
<template>
  <div class="navbar">
    <div class="navbar-top">
      <div class="breadcrum-wrap">
        <el-icon :size="25" @click="toggle" style="cursor: pointer;">
          <Fold v-show="!isCollapse" />
          <Expand v-show="isCollapse" />
        </el-icon>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.path">
            <span v-if="item.redirect === 'noRedirect'">{{
              item.meta.title
            }}</span>
            <a @click.prevent="handleClick(item)" v-else>{{
              item.meta.title
            }}</a></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right-menu">
        <Screenfull style="margin-right: 10px; padding-top: 10px" />
        <div class="avatar-container">
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <el-avatar shape="square" :size="40">
                {{ userStore.avatar }}
              </el-avatar>
              <el-icon :size="20">
                <CaretBottom />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="navbar-bottom"></div>
  </div>
</template>

<script setup >
import { useAppStore } from "@/stores/modules/app";
import { ElMessageBox } from "element-plus";
import useUserStore from "@/stores/modules/user";
import Screenfull from "@/components/Screenfull/index.vue";

const userStore = useUserStore();
const appStore = useAppStore();
const router = useRouter();
const route = useRoute();
const breadcrumbList = ref([]);

//✅ 这样写是响应式的
const isCollapse = computed(() => appStore.isCollapse);
// 作为 action 的 toggleSideBarHide 可以直接解构
const { toggleSideBarHide } = appStore;

function handleCommand(command) {
  switch (command) {
    case "logout":
      logout();
      break;
  }
}

function logout() {
  ElMessageBox.confirm("确定注销并退出系统吗", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      userStore.logout().then(() => {
        router.push("/login");
      });
    })
    .catch(() => { });
}

function getBreadcrumbList() {
  let matched = route.matched;
  breadcrumbList.value = matched.filter((item) => item.meta && item.meta.title);
  if (matched[1].meta.title !== "首页") {
    breadcrumbList.value.unshift({ path: "/", meta: { title: "首页" } });
  }
}

function handleClick(item) {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect);
    return;
  }
  router.push(path);
}

function toggle() {
  toggleSideBarHide(!appStore.isCollapse)
}

watchEffect(() => {
  getBreadcrumbList();
});
getBreadcrumbList();
</script>

<style scoped lang="scss">
.navbar {
  height: 84px;
  box-sizing: border-box;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);

  .navbar-top {
    display: flex;
    justify-content: space-between;
    height: 50px;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    padding: 5px 0;
    box-sizing: border-box;

    .breadcrum-wrap {
      padding-left: 5px;
      display: flex;
      align-items: center;

      .el-breadcrumb {
        margin-left: 5px;
      }

      a,
      span {
        color: #97a8be;
        font-weight: normal;

        &:hover {
          color: #97a8be;
        }
      }
    }

    .right-menu {
      display: flex;

      .el-dropdown-link {
        cursor: pointer;

        .el-icon {
          top: 8px;
        }
      }
    }
  }
}
</style>
