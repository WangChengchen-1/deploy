/*
 * new page
 * @author: wangcc
 * @since: 2023-04-07
 * @name: 登录页面
*/
<template>
  <div class="login">
    <!-- svg logo -->
    <StudyIcon class="svg-icon" />
    <!-- 毛玻璃： https://glassgenerator.netlify.app/# -->
    <div class="glass-container">
      <el-form class="login-form" label-width="100px">
        <h3 class="title">CC HOME</h3>
        <el-form-item label="Userame">
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="loginForm.password" type="password" />
        </el-form-item>
        <el-checkbox v-model="loginForm.rememberMe" class="remember-password"
          >记住登录状态</el-checkbox
        >
        <el-form-item style="width: 100%">
          <el-button
            :loading="loading"
            size="large"
            type="primary"
            style="width: 100%"
            @click="handleLogin"
          >
            <span v-if="!loading">登 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import useUserStore from "@/stores/modules/user";
import StudyIcon from "@/assets/images/svg/study.svg";

const router = useRouter();
const userStore = useUserStore();
const loading = ref(false);
const loginForm = ref({
  username: "",
  password: "",
  rememberMe: false,
});

userStore.login(loginForm.value);

function handleLogin() {
  const { password, username, rememberMe } = loginForm.value;

  if (rememberMe) {
    localStorage.setItem("isAuthenticated", "Authenticated");
  } else {
    sessionStorage.setItem("isAuthenticated", "Authenticated");
  }

  if (!username) {
    showElMessage("你猜猜username是不是:admin", "warning");
    return;
  } else if (!password) {
    showElMessage("你猜猜password是不是:123456", "warning");
    return;
  } else {
    loading.value = true;
    showElMessage("恭喜你，大聪明");
    userStore.login(loginForm.value);
    let timer = setTimeout(() => {
      router.push("/");
      //清理 回收
      loading.value = false;
      clearTimeout(timer);
      timer = null;
    }, 1000);
  }
}
function showElMessage(message = "提示信息", type = "success") {
  ElMessage({
    message: message,
    type: type,
  });
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: url("@/assets/images/login-background.jpg");
  background-size: cover;
  .svg-icon {
    position: absolute;
    top: 60px;
    width: 100%;
    fill: #d5dce6; //修改sgv的颜色
  }
  .glass-container {
    width: 700px;
    height: 375px;
    color: #d5dce6;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 191, 255, 0.081);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255, 255, 255, 0.4) solid;
    border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
    border-right: 2px rgba(40, 40, 40, 0.35) solid;
    box-sizing: border-box;
    padding: 0 100px;
  }
  .login-form {
    .title {
      text-align: center;
      margin-top: 50px;
      margin-bottom: 30px;
    }
    :deep(.el-form-item) {
      .el-form-item__label {
        color: #d5dce6;
      }
      .el-input__wrapper {
        background-color: transparent;
        .el-input__inner {
          color: #d5dce6;
          &:-webkit-autofill {
            transition: background-color 5000s ease-in-out 0s;
          } //解决自动填充密码的背景色
          -webkit-text-fill-color: #d5dce6; //颜色是设置成你需要的颜色
        }
      }
    }
    .remember-password {
      margin-left: 24px;
      color: #d5dce6;
    }
  }
}
</style>