/**
 * 用户信息模块
 */
const state: State = {
    user: {
        avatar: "",
        name: "",
        id: 0,
        uuid: "",
        token: ""
    }
};

// 整个state
export interface State {
    user: User;
}
// state中的user
export interface User {
    avatar: string;
    name: string;
    id: string | number;
    uuid: string;
    token: string;
}

export default state;
