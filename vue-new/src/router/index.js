import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import Detail from '../views/detail.vue'
import SubDetail from '../views/sub-detail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/detail/sub',
    name: 'SubDetail',
    component: SubDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
