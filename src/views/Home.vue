<template>
    <div class="home">
        <img class="logo" alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <ul>
            <li>1</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
    name: "Home",
    components: {
        HelloWorld
    }
});
</script>
<style lang="less" scoped>
.logo {
    width: 375px;
}
</style>
