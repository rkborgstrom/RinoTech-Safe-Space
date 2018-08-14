<template>
  <div id="app">
      <router />
      <Header/>
      <Form/>
  </div>
</template>

<script>
import Form from './components/Form'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Form,
    Header
  },
  data(){
    return {
      
    }
  }
}
</script>

<style>

</style>
