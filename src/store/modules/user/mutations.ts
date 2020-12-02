import * as TYPES from "./types";
import { State } from "./state";
const mutations = {
    [TYPES.INIT](state: State, info: any) {
        console.log(state, info);
    },
    [TYPES.EXIT]() {
        console.log("exit");
    }
};
export default mutations;
