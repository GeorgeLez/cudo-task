import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/random-album',
      name: 'random-album',
      component: require('@/components/RandomAlbum').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
