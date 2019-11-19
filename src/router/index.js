import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import Main from '@/components/main'
import Manage from '@/components/manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        requiresAuth: true // 表示当前路由需要校验
      }
    },{
      path: '/',
      component: Home,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/main',
          component: UserProfile
        },
        {
          path: '/manage',
          component: UserPosts
        },
        {
          path: '/news',
          component: UserProfile
        },
        {
          path: '/lists',
          component: UserPosts
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
