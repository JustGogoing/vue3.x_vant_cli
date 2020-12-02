import { ActionContext } from "vuex";
import { State } from "./state";
import * as TYPES from "./types";

const actions = {
    /**
     * 初始化本地数据一系列操作
     */
    async INIT({ commit }: ActionContext<State, any>) {
        // 这里初始化本地数据
        console.log("INIT");
        commit(TYPES.INIT, "log");
    },
    /**
     * 退出登录一系列操作
     */
    async EXIT() {
        // 这里清除本地数据
    }
};
export default actions;
