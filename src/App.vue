<template>
  <div id="app">
      
      <CardForm />
      <Footer />
  </div>
</template>

<script>
import Form from './components/Form'
import CardForm from './components/CardForm'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Form, CardForm, Footer
  },
  data(){
    return {
      
    }
  }
}
</script>

<style>

</style>
