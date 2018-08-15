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
      Card,
      Header,
      Modal,
      Footer
    },

    data(){
    return {
        posts: [],
        apiURL:"https://rinotech-safe-space.herokuapp.com/posts"
    }
  },

  mounted(){
    fetch(this.apiURL)
    .then(res => res.json())
    .then((res)=>{
      this.posts = res.reverse()
      console.log(this.posts)
    })
    }
}

  const logThis = (input) => {
    console.log(input);
    return input;
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
