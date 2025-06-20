import { defineStore } from "pinia";
import{ref} from 'vue'

export default useUserStore = defineStore("user", ()=>{
    const token = ref("123");
    return{token}
});