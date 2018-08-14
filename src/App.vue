<template>
  <div id="app">
      <router />
      <Form />
  </div>
</template>

<script>
import Form from './components/Form'

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
