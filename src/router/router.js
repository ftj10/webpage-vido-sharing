import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes=[
    {path: "/", redirect: "/home"},
    {path: "/home", component:()=> import("../pages/home.vue")},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router