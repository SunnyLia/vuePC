import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import Dashboard from '@/components/dashboard'
import User from '@/components/userList'
import Editor from '@/components/editor'
import Upload from '@/components/uploader'
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
        meta:{
          title:'首页'
        }
      },
      {
        path: '/user',
        component: User,
        meta:{
          title:'客户查询'
        }
      },
      {
        path: '/editor',
        component: Editor,
        meta:{
          title:'编辑中心'
        }
      },
      {
        path: '/uploader',
        component: Upload,
        meta:{
          title:'上传中心'
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
