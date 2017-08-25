import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Homepage from '@/components/Homepage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Header,
      children:[
        {
          path: '/',
          name: 'homepage',
          component: Homepage
        }
      ]
    }
  ]
})
