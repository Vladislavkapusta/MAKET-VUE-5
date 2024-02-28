import Vue from 'vue'
import VueRouter from 'vue-router'
// import AllRecipes from '../views/AllRecipes.vue'
import AllRecipes from '../views/'
import FavoriteRecipes from '../views/FavoriteRecipes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/all-recipes'
  },
  {
    path: '/all-recipes',
    name: 'AllRecipes',
    component: AllRecipes
  },
  {
    path: '/favorite-recipes',
    name: 'FavoriteRecipes',
    component: FavoriteRecipes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
