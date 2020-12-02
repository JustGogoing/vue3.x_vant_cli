/**
 * 用户信息模块
 */
export const state: State = {
    user: {
        avatar: "",
        name: "",
        id: 0,
        uuid: "",
        token: ""
    }
};

export interface State {
    user: User;
}
export interface User {
    avatar: string;
    name: string;
    id: string | number;
    uuid: string;
    token: string;
}
