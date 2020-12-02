import { createStore } from "vuex";
import userModule from "./modules/user/index";

export default createStore({
    modules: {
        userModule
    }
});
