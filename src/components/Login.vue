<script setup>
import { ElMessage } from 'element-plus';
import { ref,watch } from 'vue';
import { useUserStore } from '@/store/user';
import { useModalStore } from '@/store/modal';


const account = ref("");
const password = ref("");

const user = useUserStore();
const modal = useModalStore();

watch(() => modal.loginVisible, (isVisible) => {
  if (isVisible) {
    account.value = "";
    password.value = "";
  }
});


function handleLogin() {
    if (!account.value || !password.value) {
        ElMessage.warning("Please enter both username and password");
        return;
    }

    const success = user.login(account.value, password.value);
    if (success) {
        account.value = "";
        password.value = "";
        modal.closeAllModals();
    } else {
        ElMessage.warning("Login failed");
    }
}
</script>

<template>
    <el-dialog width="400px" v-model="modal.loginVisible" class="relative">
        <h1 class="text-center text-[#404040] text-22px font-normal mb-1.5">Login</h1>
        <div class="pb-44px flex items-center justify-center w-full">
            <el-form name="login" autoComplete="off" @submit.prevent="handleLogin">
                <el-form-item name="account">
                    <el-input placeholder="Enter username" v-model="account"></el-input>
                </el-form-item>
                <el-form-item name="password">
                    <el-input type="password" placeholder="Enter password" v-model="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit"
                        class="flex w-full items-center justify-center bg-[#444b52] text-white rounded-full">
                        Login
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <div
            class="absolute w-full h-44px bottom-0 left-0 bg-[rgba(77,85,93,0.1)] flex items-center justify-center gap-1">
            <span>Don't have an account?</span>
            <span class="text-blue-400 cursor-pointer" @click="modal.showRegister">
                Sign up
            </span>
        </div>
    </el-dialog>
</template>