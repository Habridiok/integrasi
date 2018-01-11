import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import About from '@/pages/About'
import PropsAndEvents from '@/pages/PropsAndEvent.vue'
import LearnApi from '@/pages/LearnApi.vue'
import LoopTest from '@/pages/LoopTest.vue'
import LearnVuex from '@/pages/LearnVuex.vue'




Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/about',
    	name: 'About',
    	component: About
    },
    {
    	path: '/belajar-props',
    	name: 'Belajar-Props',
    	component: PropsAndEvents
    },
    {
      path: '/learn-api',
      name: 'LearnApi',
      component: LearnApi
    },
    {
      path: '/looptest',
      name: 'LoopTest',
      component: LoopTest
    },
    {
      path: '/learn-vuex',
      name: 'LearnVuex',
      component: LearnVuex
    }
  ]
})
