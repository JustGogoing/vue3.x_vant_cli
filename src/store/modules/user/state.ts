/**
 * 用户信息模块
 */
export const state: State = {
    user: {}
};

export interface State {
    user: User | {};
}
export interface User {
    avatar: string;
    name: string;
    id: string | number;
    uuid: string;
}
