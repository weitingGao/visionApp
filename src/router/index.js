import Vue from 'vue'
import Router from 'vue-router'

import register from '@/components/register'
import login from '@/components/login'
import header from '@/components/header'
import find from '@/components/find'
import follow from '@/components/follow'
import inspiration from '@/components/inspiration'

Vue.use(Router)
// Vue.component('header-box',{
//   props:['nowPage'],
//   template:header
// })
Vue.component('header-box',header)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/follow',
      name: 'follow',
      component: follow
    },{
      path: '/inspiration',
      name: 'inspiration',
      component: inspiration
    },
  ]

})
