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
    [types.ADD_USER_LISTS](state, result) {//新增
        state.userLists.unshift(result)
    },
    [types.DEL_USER_LISTS](state, result) {//删除
        state.userLists = state.userLists.filter((item) => {
            return item.id !== result
        })
    },
    [types.EDIT_USER_LISTS](state, result) {//编辑               
        state.userLists = state.userLists.map((item) => {
            if (item.id === result.id) {
                return result
            }
            return item
        })
    }
}
