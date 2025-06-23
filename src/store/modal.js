import { defineStore } from "pinia";
import { ref } from 'vue';

export const useModalStore = defineStore("modal", () => {
    const regVisible = ref(false);
    const loginVisible = ref(false);

    const switchRegisterVisible = () => {
        regVisible.value = !regVisible.value;
    };

    const switchLoginVisible = () => {
        loginVisible.value = !loginVisible.value;
    };

    const closeAllModals = () => {
        regVisible.value = false;
        loginVisible.value = false;
    };

    const showRegister = () => {
        regVisible.value = true;
        loginVisible.value = false;
    };

    const showLogin = () => {
        loginVisible.value = true;
        regVisible.value = false;
    };

    return {
        regVisible,
        loginVisible,
        switchRegisterVisible,
        switchLoginVisible,
        closeAllModals,
        showRegister,
        showLogin
    };
});