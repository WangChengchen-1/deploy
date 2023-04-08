/*
 * new page
 * @author: wangcc
 * @since: 2023-04-08
 * @name: 顶部导航栏
*/
<template>
  <div class="navbar">
    <div class="left">面包屑位置</div>
    <div class="right-menu">
      <div class="avatar-container">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar  shape="square" :size="50"> {{ userStore.avatar }} </el-avatar>
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

const userStore = useUserStore();
const router = useRouter();

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
</script>

<style scoped lang="scss">
.navbar {
  height: 84px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  .el-dropdown-link {
    cursor: pointer;
    .icon-arrow-down{
      position: relative;
      top: 20px;
    }
  }
}
</style>
