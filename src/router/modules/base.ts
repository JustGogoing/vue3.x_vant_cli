/**
 * 基础路由
 */
import { RouteRecordRaw } from "vue-router";
import Tabbar from "@view/tabbar/index.vue";
import Home from "@view/tabbar/home.vue";
import Intro from "@view/tabbar/intro.vue";
import Discover from "@view/tabbar/discover.vue";
import Mine from "@view/tabbar/mine.vue";
const BASE_ROUTERS: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "tabbar",
        component: Tabbar,
        redirect: "/home",
        children: [
            {
                path: "home",
                name: "Home",
                component: Home
            },
            {
                path: "intro",
                name: "intro",
                component: Intro
            },
            {
                path: "discover",
                name: "discover",
                component: Discover
            },
            {
                path: "mine",
                name: "mine",
                component: Mine
            }
        ]
    }
];

export default BASE_ROUTERS;
