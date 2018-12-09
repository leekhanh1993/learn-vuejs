import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage/HomePage.vue'
import ViewImage from './components/ViewImage/ViewImage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/viewimage',
      name: 'viewimage',
      component: ViewImage
    }
  ]
})