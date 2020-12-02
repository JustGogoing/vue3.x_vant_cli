import { State } from "./state";
const getters = {
    token({ user }: State) {
        return user.token;
    }
};
export default getters;
