import { defineStore } from "pinia";
import { ref } from 'vue';
import { ElMessage } from "element-plus";

export const useUserStore = defineStore("user", () => {
    const currentUser = ref("");
    const isLogin = ref(false);
    const users = ref({
        account: "",
        password: "",
    });

    const register = (account, password) => {
        users.value = { account, password };
        currentUser.value = account;
        isLogin.value = true;

        localStorage.setItem("tommy_sharing_user", JSON.stringify(users.value));
        localStorage.setItem("tommy_sharing_is_login", "true");
    };

    const login = (account, password) => {
        if (users.value.account === account && users.value.password === password) {
            isLogin.value = true;
            currentUser.value = account;
            localStorage.setItem("tommy_sharing_is_login", "true");
            ElMessage.success("Login successful!");
            return true;
        }
        return false;
    };

    const logout = () => {
        isLogin.value = false;
        currentUser.value = "";
        localStorage.removeItem("tommy_sharing_is_login");
        ElMessage.success("Logged out successfully");
    };

    const checkLoginStatus = () => {
        const storedLogin = localStorage.getItem("tommy_sharing_is_login");
        if (storedLogin === "true") {
            isLogin.value = true;
            const userData = localStorage.getItem("tommy_sharing_user");
            if (userData) {
                users.value = JSON.parse(userData);
                currentUser.value = users.value.account;
            }
        }
    };

    return {
        currentUser,
        isLogin,
        users,
        register,
        login,
        logout,
        checkLoginStatus
    };
});