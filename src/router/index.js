import Vue from 'vue'
import Router from 'vue-router'
import CardForm from '@/components/CardForm'
import Footer from '@/components/Footer'
import Header from 'vue-router'
import Modal from '@/components/Modal'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'CardForm',
      component: CardForm
    },
    {
      path: '/',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/App',
      name: 'Header',
      component: Header
    },
    {
      path: '/',
      name: 'Modal',
      component: Modal
    },
  ]
})
