import { defineStore } from "pinia";
import{ref} from 'vue'
const useUserStore = defineStore("user", ()=>{
    const token = ref("123");
    return{ token }
});

export {
    useUserStore
}