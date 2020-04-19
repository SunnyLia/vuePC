import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/layout/home'
import Login from '@/view/login/login'
import Dashboard from '@/view/home/dashboard'
import User from '@/view/list/userList'
import Editor from '@/view/editor/editor'
import Upload from '@/view/editor/uploader'
import Thing from '@/view/list/thingList'

import Test from '@/view/test/index'

import VueRouter from "vue-router";
// 解决两次访问相同路由地址报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/user',
        component: User,
        meta: {
          title: '客户查询'
        }
      },
      {
        path: '/test',
        component: Test,
        meta: {
          title: '测试用的'
        }
      },
      {
        path: '/thing',
        component: Thing,
        meta: {
          title: '事务查询'
        }
      },
      {
        path: '/editor',
        component: Editor,
        meta: {
          title: '编辑中心'
        }
      },
      {
        path: '/uploader',
        component: Upload,
        meta: {
          title: '上传中心'
        }
      }
    ]
  }, {
    path: '/login',
    component: Login
  }, {
    path: '*', // 页面不存在的情况下
    redirect: "/"
  }
  ]
})
