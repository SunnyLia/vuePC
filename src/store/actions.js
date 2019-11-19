import * as types from './mutation-types.js'
const menus = [
    {
        title: "首页",
        lists: [],
        url: "/main",
        icon:"el-icon-menu"
    }, {
        title: "内容管理",
        url: "/manage",
        icon:"el-icon-tickets",
        lists: [
            {
                listName: "消息中心",
                url: "/news",
                listItems: []
            },
            {
                listName: "列表中心",
                url: "/lists",
                listItems: [{
                    itemName: "记录列表",
                    url: ""
                },
                {
                    itemName: "客户查询",
                    url: ""
                }]
            }
        ]
    }
]
export default {
    getIsLogin({ commit, state }) {
        commit(types.IS_LOGIN, true)
    },
    getNavMenu({ commit, state }) {
        commit(types.NAV_MENUS, menus)
    }
}