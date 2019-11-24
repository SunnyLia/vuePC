import * as types from './mutation-types.js'
import axios from 'axios';
const url="http://127.0.0.1:8081"
const menus = [
    {
        name: "首页",
        children: [],
        path: "/dashboard",
        icon:"el-icon-menu"
    }, {
        name: "内容管理",
        path: "",
        icon:"el-icon-tickets",
        children: [
            {
                name: "客户查询",
                path: "/user",
                children: []
            },
            {
                name: "工具处理",
                path: "",
                children: [{
                    name: "上传中心",
                    path: "/uploader"
                },
                {
                    name: "编辑中心",
                    path: "/editor"
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