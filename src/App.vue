<template>
  <div id="app">
  
    <Header />
    <Modal />
    <Footer />
  
  </div>
</template>

<script>
  import Header from './components/Header'
  import Modal from './components/Modal'
  import Footer from './components/Footer'
  
  const API_URL = "https://rinotech-safe-space.herokuapp.com/posts";
  
  export default {
    name: 'App',
    components: {
      Header,
      Modal,
      Footer
    },
  
    data() {
      return {
        posts: [],
        apiURL: "https://rinotech-safe-space.herokuapp.com/posts"
      }
    },
  
    mounted() {
      fetch(this.apiURL, {
          method: 'get',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
          this.posts = data
          console.log(this.posts)
        })
    }
  }

</script>

<style>
  
</style>
