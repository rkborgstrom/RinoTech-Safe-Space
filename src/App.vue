<template>
  <div id="app">
  
      <Header />
      <CardForm />
      <Card />
      <Modal />
      <Footer />
      
  </div>
</template>

<script>
import Header from './components/Header'
import Card from './components/Card'
import CardForm from './components/CardForm'
import Modal from './components/Modal'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    CardForm, 
    Footer,
    Card,
    Header,
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
