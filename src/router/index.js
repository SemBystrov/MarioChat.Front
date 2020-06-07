import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Game',
    component: () => import(/* webpackChunkName: "world" */ '../views/Sandbox.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "chat" */ '../views/Chat.vue')
  },
  {
    path: '/build_connections',
    name: 'BuildConnection',
    component: () => import(/* webpackChunkName: "build_connection" */ '../views/BuildConnections')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
