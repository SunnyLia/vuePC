import * as types from './mutation-types';
export default {
    [types.IS_LOGIN](state,result){
        state.isLogin = result
    },
    [types.NAV_MENUS](state,result){
        state.NAV_MENUS = result
    },
}