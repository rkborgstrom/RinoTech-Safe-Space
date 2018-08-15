<template>
  <div id="app">
      <Header />
      <Form />
      <Modal />
      <Footer/>
  </div>
</template>

<script>
import Form from './components/Form'
import Modal from './components/Modal'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Form,
    Modal,
    Footer
  },
  data(){
    return {
      
    }
  }
}
</script>

<style>

</style>
