import * as types from './mutation-types.js'
export default {
    getIsLogin({commit,state}){
        commit(types.IS_LOGIN, true)
    },
    getNavMenu({commit,state}){
        commit(types.NAV_MENUS, [首页,发现,购物车,我的])
    }
}