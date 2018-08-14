<template>
  <div id="app">
      <router />
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
    Form
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
