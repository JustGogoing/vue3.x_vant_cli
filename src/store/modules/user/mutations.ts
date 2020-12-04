import { MutationTree } from "vuex";
import * as TYPES from "./types";
import { UserState } from "./index.d";
const mutations: MutationTree<UserState> = {
    [TYPES.INIT](state: UserState, info: any) {
        console.log(state, info);
    },
    [TYPES.EXIT]() {
        console.log("exit");
    }
};
export default mutations;
