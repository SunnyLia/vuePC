import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        requiresAuth:true // 表示当前路由需要校验
      }
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'*', // 页面不存在的情况下
      redirect: "/"
    }
  ]
})
