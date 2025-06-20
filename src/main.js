import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { createPinia } from 'pinia'

import  ElementPlus from 'element-plus'
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

const app = createApp(App);

// import icons from elementplusiconsvue automatically add to component
Object.keys(ElementPlusIconsVue).forEach((key => {
    app.component(key,ElementPlusIconsVue[key]);
}));


const pinia = createPinia();
app.use(router).use(pinia).use(ElementPlus);
app.mount('#app')
