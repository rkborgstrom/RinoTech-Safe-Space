<template>
  <div id="app">
  
      <Header />
      <CardForm />
      <Form />
      <Modal />
      <Footer />
      
  </div>
</template>

<script>
import Header from './components/Header'
import Form from './components/Form'
import CardForm from './components/CardForm'
import Modal from './components/Modal'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    Form, CardForm, Footer,
    Header, Modal
  },
  data(){
    return {
      
    }
  }
}
</script>

<style>

</style>
