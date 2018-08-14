<template>
  <div id="app">
      <Form />
      <Modal />
  </div>
</template>

<script>
import Form from './components/Form'
import Modal from './components/Modal'


export default {
  name: 'App',
  components: {
    Form,
    Modal
  },
  data(){
    return {
      teaFlavor: 'Mint'
    }
  }
}
</script>

<style>

</style>
