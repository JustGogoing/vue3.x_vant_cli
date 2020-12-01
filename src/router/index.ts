import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Tabbar from "@/Layout/Tabbar/index.vue";
import Home from "@/views/home/index.vue";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "tabbar",
        component: Tabbar,
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "Home",
                component: Home
            },
            {
                path: "/intro",
                name: "intro",
                component: Home
            },
            {
                path: "/discover",
                name: "discover",
                component: Home
            },
            {
                path: "/mine",
                name: "mine",
                component: Home
            }
        ]
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Home
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
