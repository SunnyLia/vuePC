import * as types from './mutation-types.js'
import axios from 'axios';
const url="http://127.0.0.1:8081"
const menus = [
    {
        title: "首页",
        lists: [],
        url: "/dashboard",
        icon:"el-icon-menu"
    }, {
        title: "内容管理",
        url: "",
        icon:"el-icon-tickets",
        lists: [
            {
                listName: "客户查询",
                url: "/user",
                listItems: []
            },
            {
                listName: "工具处理",
                url: "",
                listItems: [{
                    itemName: "上传中心",
                    url: "/uploader"
                },
                {
                    itemName: "编辑中心",
                    url: "/editor"
                }]
            }
        ]
    }
]
export default {
    getNavMenu({ commit, state }) {
        commit(types.NAV_MENUS, menus)
    },
    getAddress({ commit, state }) {
        axios.get(url+"/getAddress")
        .then(function(result) {
            if (result.data.code == "200") {
                commit(types.ADDRESS, result.data.data)
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    getUserLists({ commit, state }) {
        axios.get(url+"/getUserLists")
        .then(function(result) {
            if (result.data.code == "200") {
                commit(types.USER_LISTS, result.data.data)
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    }
}