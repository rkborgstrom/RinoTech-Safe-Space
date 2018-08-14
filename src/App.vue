<template>
  <div id="app">
      <Header />
      <Form />
      <Modal />
  </div>
</template>

<script>
import Form from './components/Form'
import Modal from './components/Modal'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
    Form,
    Modal
  },
  data(){
    return {
      
    }
  }
}
</script>

<style>

</style>
