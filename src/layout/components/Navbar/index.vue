/*
 * new page
 * @author: wangcc
 * @since: 2023-04-08
 * @name: 顶部导航栏
*/
<template>
  <div class="navbar">
    <div class="left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
          <span v-if="item.redirect === 'noRedirect'">{{ item.meta.title }}</span>
          <a :href="item.path" v-else>{{ item.meta.title }}</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-menu">
      <div class="avatar-container">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar shape="square" :size="40"> {{ userStore.avatar }} </el-avatar>
            <i class="iconfont icon-arrow-down"></i>
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
</template>

<script setup >
import { ElMessageBox } from "element-plus";
import useUserStore from "@/stores/modules/user";
import { watchEffect } from "vue";

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
const breadcrumbList = ref([]);


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
  breadcrumbList.value = route.matched.filter(item => item.meta && item.meta.title);
  if (matched[1].meta.title !== '首页') {
    breadcrumbList.value.unshift({ path: '/', meta: { title: '首页' } })
  }
}
watchEffect(()=>{
  getBreadcrumbList();
})
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  height: 84px;
  padding: 5px 10px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);

  .el-dropdown-link {
    cursor: pointer;

    .icon-arrow-down {
      position: relative;
      top: 18px;
    }
  }
}
</style>
