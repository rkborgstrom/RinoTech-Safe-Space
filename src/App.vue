<template>
  <div id="app">
      <Form />
  </div>
</template>

<script>
import Form from './components/Form'
import CardForm from './components/CardForm'

export default {
  name: 'App',
  components: {
    Form, CardForm
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
