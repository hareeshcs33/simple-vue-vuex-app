import Vue from 'vue'
import Router from 'vue-router'

import Contact from '../components/contact.vue'
import About from '../components/about.vue'
import Home from '../components/home.vue'
import Todo from '../todo/todo-list.vue'
import User from '../user/user.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
  ]
})
