import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Regist from './views/Regist'
import Album from './views/Album'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Login',
      component: Regist
    },
    {
      path: '/album',
      name: 'Album',
      component: Album
    }
  ]
})
