<template>
  <div id="app">
      <Header />
      <Modal />
      <Card />
      <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Card from './components/Card'
import Modal from './components/Modal'
import Footer from './components/Footer'

const API_URL = "https://rinotech-safe-space.herokuapp.com/posts";

export default {
  name: 'App',
  components: {
    Header,
    Card,
    Modal,
    Footer
  },
  data(){
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

#app {
    height: 100%;
    min-height: 100vh;
    background: url("./assets/bgimage.jpg") repeat center center fixed;
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
}
</style>
