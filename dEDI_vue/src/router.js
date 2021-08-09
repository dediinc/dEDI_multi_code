import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Login from './views/login'
import CreateOrg from './views/create_org'
import CreateUser from './views/create_user'
import Forms from './views/forms'
import Dashboard from './views/dashboard'
import Messages from './views/messages'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'login',
      path: '/',
      component: Login,
    },
    {
      name: 'create_org',
      path: '/create_org',
      component: CreateOrg,
    },
    {
      name: 'create_user',
      path: '/create_user',
      component: CreateUser,
    },
    {
      name: 'forms',
      path: '/forms',
      component: Forms,
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard,
    },
    {
      name: 'messages',
      path: '/messages',
      component: Messages,
    },
  ],
})
