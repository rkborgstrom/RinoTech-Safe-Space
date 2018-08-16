import Vue from 'vue'
import Router from 'vue-router'
import Card from 'vue-router'
import Footer from '@/components/Footer'
import Header from 'vue-router'
import Modal from '@/components/Modal'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/App',
      name: 'Header',
      component: Header
    },
    {
      path: '/',
      name: 'Card',
      component: Card,
      props: true
    },
    {
      path: '/',
      name: 'Modal',
      component: Modal
    },
    {
      path: '/',
      name: 'Footer',
      component: Footer
    },
  ]
})
