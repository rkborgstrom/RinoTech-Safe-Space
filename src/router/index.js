import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Header from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path: '/App',
      name: 'Header',
      component: Header
    }
  ]
})
