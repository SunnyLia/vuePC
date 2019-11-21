import * as types from './mutation-types';
export default {
    [types.NAV_MENUS](state, result) {
        state.navMenus = result
    },
    [types.ADDRESS](state, result) {
        state.address = result
    },
    [types.USER_LISTS](state, result) {
        state.userLists = result
    },
}
