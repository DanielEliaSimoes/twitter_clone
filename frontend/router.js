import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index.vue'
import Todos from '~/pages/todos.vue'
import Perfil from '~/pages/perfil.vue'
import User from '~/pages/user/_username/index.vue'

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  routes: [
    {path: '/', component: Index, name: 'index'},
    {path: '/todos', component: Todos, name: 'todos'},
    {path: '/perfil', component: Perfil, name: 'perfil'},
    {path: '/user/:username', component: User, name: 'user'}
  ]
}

export function createRouter (ctx) {
  return new Router(routerOptions)
}
