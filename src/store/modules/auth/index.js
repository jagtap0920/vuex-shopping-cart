import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

const authModule = {
    namespaced: true,
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: mutations,
    actions: actions,
    getters: getters,
};

export default authModule;
