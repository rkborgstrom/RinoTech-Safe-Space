import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer'
import Header from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/App',
      name: 'Header',
      component: Header
    }
  ]
})
