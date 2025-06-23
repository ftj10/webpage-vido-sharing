<script setup>
import { ElMessage } from 'element-plus';
import { ref ,watch} from 'vue';
import { useUserStore } from '@/store/user';
import { useModalStore } from '@/store/modal';

const account = ref("");
const password = ref("");
const rePassword = ref("");

const user = useUserStore();
const modal = useModalStore();

watch(() => modal.regVisible, (isVisible) => {
  if (isVisible) {
    account.value = "";
    password.value = "";
    rePassword.value = "";
  }
});

function handleFinish() {
    if (password.value !== rePassword.value) {
        ElMessage.warning("Two passwords don't match");
        return;
    }

    if (user.users.account === account.value) {
        ElMessage.warning("Username already exists");
        return;
    }

    user.register(account.value, password.value);
    account.value = "";
    password.value = "";
    rePassword.value = "";
    modal.closeAllModals();
    ElMessage.success("Register successful!");
}
</script>

<template>
    <el-dialog width="400px" v-model="modal.regVisible" class="relative">
        <h1 class="text-center text-[#404040] text-22px font-normal mb-1.5">Register</h1>
        <div class="pb-44px flex items-center justify-center w-full">
            <el-form name="register" autoComplete="off" @submit.prevent="handleFinish">
                <el-form-item name="account">
                    <el-input placeholder="Enter username" v-model="account"></el-input>
                </el-form-item>
                <el-form-item name="password">
                    <el-input type="password" placeholder="Enter password" v-model="password"></el-input>
                </el-form-item>
                <el-form-item name="re-password">
                    <el-input type="password" placeholder="Confirm password" v-model="rePassword"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit"
                        class="flex w-full items-center justify-center bg-[#444b52] text-white rounded-full">
                        Register Now
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <div
            class="absolute w-full h-44px bottom-0 left-0 bg-[rgba(77,85,93,0.1)] flex items-center justify-center gap-1">
            <span>Already have an account?</span>
            <span class="text-blue-400 cursor-pointer" @click="modal.showLogin">
                Sign in
            </span>
        </div>
    </el-dialog>
</template>