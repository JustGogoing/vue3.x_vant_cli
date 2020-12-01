<template>
    <div class="container">
        <keep-Alive class="view" :include="url">
            <transition mode="fade">
                <router-view />
            </transition>
        </keep-Alive>
        <van-tabbar
            class="tab"
            v-model="index"
            :fixed="false"
            :safe-area-inset-bottom="true"
            route
        >
            <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/intro">普法</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/discover"
                >发现</van-tabbar-item
            >
            <van-tabbar-item icon="setting-o" to="mine">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "tabbar",
    setup() {
        const index = ref(0);
        const url = ["/home", "intro", "discover", "mine"];
        return {
            index,
            url
        };
    }
});
</script>

<style lang="less" scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
    .view {
        flex: 1;
        background-color: red;
    }
    .tab {
        flex: none;
        width: 100vw;
    }
}
</style>
