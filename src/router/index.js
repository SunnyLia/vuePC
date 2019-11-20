import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import Main from '@/components/main'
import Manage from '@/components/manage'
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
    redirect: '/main',
    children: [
      {
        path: '/main',
        component: Main
      },
      {
        path: '/manage',
        component: Manage
      },
      {
        path: '/news',
        component: Manage
      },
      {
        path: '/lists',
        component: Manage
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
