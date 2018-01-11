import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/pages/mainPage.vue'





Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainPagen',
      component: MainPage
    }
  ]
})
