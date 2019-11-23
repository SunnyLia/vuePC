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
    },
    [types.FILTER_QUERY](state, result) {//筛选
        let { user, region, date, currentPage, currentSize } = result;
        var queryList = state.userLists;
        // state.userLists = result.lists.map((item) => {
        if (user != "") { //筛选姓名
            queryList = queryList.filter((item) => {
                return item.name == user
            })
        }
        if (region != "") { //筛选地址
            queryList = queryList.filter((item) => {
                return item.address.indexOf(region) != -1
            })
        }
        if (date != "") { //筛选日期
            queryList = queryList.filter((item) => {
                let dateItem = (new Date(item.date + " 00:00:00")).getTime();               
                return (date[0].getTime() <= dateItem) && (dateItem <= date[1].getTime())
            })
        }
        state.filterQuery = queryList
        // })
    },
}
