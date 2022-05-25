import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import Starships from '../views/Starships'
import StarshipFile from '../components/StarshipFile'
import store from '../store'


Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/starships',
      name: 'Starships',
      component:Starships
    },
    {
      path: '/starshipfile',
      name: 'StarshipFile',
      component: () => import(/* webpackChunkName: "starshipFile" */ '../components/StarshipFile.vue')
    },

  ]

  const router = new VueRouter({
    routes
  })

  router.beforeEach((to, from, next) => {
    
    if (to.name !== 'Home'&& !store.state.userObject){
      next({ name: 'Home' }) 
      store.commit('openModal', "showRegister")
    } 
    else next()

  })
  
  export default router