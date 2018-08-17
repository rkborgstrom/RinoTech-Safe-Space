<template>
  <div id="app">
    <Header />
    <Modal v-on:posted="getPosts" v-bind:post="posts" />
    <Card v-for="post in posts" :key="post.id" v-bind:post="post" />
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
  
    methods: {
      getPosts() {
        console.log('yooo')
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
    },
  
    data() {
      return {
  
        posts: [],
        apiURL: "https://rinotech-safe-space.herokuapp.com/posts"
      }
    },
    mounted() {
      this.getPosts()
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
