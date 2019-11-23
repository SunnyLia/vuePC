import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import Dashboard from '@/components/dashboard'
import User from '@/components/userList'
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
        component: Dashboard
      },
      {
        path: '/user',
        component: User
      },
      {
        path: '/editor',
        component: User
      },
      {
        path: '/lists',
        component: User
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
