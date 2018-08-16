<template>
  <div>
    <section class="button">
      <b-btn variant="warning" v-b-modal.modal1>POST</b-btn>
    </section>
    <b-modal id="modal1" title="What are you going through?">
      <b-form v-on:submit.prevent='onSubmit' v-on:submit="resetForm">
        {{post.title}}
        <input v-model="title" name="title" required placeholder="Title">
    
        <br />
        <div>
          <select v-model="topics" name="topics">
                <option disabled value="">Topics</option>
                <option>Depression</option>
                <option>Anxiety</option>
                <option>Stress</option>
                <option>LGBT</option>
                <option>PTSD</option>
                <option>Alcohol</option>
                <option>Marital</option>
                <option>Death</option>
                <option>Loneliness</option>
                <option>Family Issues</option>
                <option>Other</option>
            </select>
          <br />
          <br />
          <span><strong>Selected:</strong> {{ selected }}</span>
        </div>
        <br />
        <div>
          <b-form-textarea id="textarea2" v-model="story" name="story" placeholder="Tell us about it..." :rows="3">
          </b-form-textarea>
          <h6>We keep posts anonymous</h6>
        </div>
        <b-button name="submit" value="submit" type="submit" variant="success">Submit</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
  export default {
    props: ['post'],
    name: "Modal",
    data() {
      return {
        posts: [],
        apiURL: "https://rinotech-safe-space.herokuapp.com/posts",
        text: null,
        selected: null,
        title: null,
        topics: null,
        story: null
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
    },

    methods: {
      onSubmit() {
        console.log('hello')
        let newPost = {
          "title": this.title,
          "topics": this.topics,
          "story": this.story
        }
        console.log(newPost)
        this.$emit('addPost', newPost)
      },
      resetForm() {
        this.title = null;
        this.topics = null;
        this.story = null;
      }
    },
  }
</script>

<style>
  #modal1 {
    color: #007aff;
  }
  
  h6 {
    color: rosybrown;
  }
  
  .btn {
    width: 100%;
    margin-top: 0;
  }
  
  .btn-warning {
    background: linear-gradient(90deg, rgba(255, 185, 28, 1) 0%, rgba(255, 221, 58, 1) 50%, rgba(255, 215, 45, 1) 100%);
  }
  
  .btn-warning:hover {
    background-color: #e1ac74;
  }
  
  .btn-primary {
    display: none;
  }
  
  .btn-success {
    background-color: #ffdc36;
  }
</style>
