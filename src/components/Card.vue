<template>
  <div>
    <b-card class="pl-5 pr-5" header=" " header-text-variant="white" header-tag="header" header-bg-variant="dark" footer="Karma Score" footer-tag="footer" footer-bg-variant="dark" footer-border-variant="dark">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h2>{{post.title}}</h2>
          </b-col>
          <b-col>
            <h4 class="topic">{{post.topic}}</h4>
          </b-col>
        </b-row>
      </b-container>
      <p class="card-text pl-5 pr-5">{{post.story}}</p>
      <b-container>
        <b-row>
          <b-col>
            <h6>{{post.karma}}</h6>
          </b-col>
          <b-col>
            <h6 class="topic">{{post.date}}</h6>
          </b-col>
        </b-row>
      </b-container>
      <h4>
        <div>
          <b-card @submit="onSubmit()">
            <b-form-textarea id="textarea1" v-model="text" placeholder="Add a comment..." :rows="3" :max-rows="6">
              {{post.comments}}
            </b-form-textarea>
            <pre class="mt-3">{{ text }}</pre>
            <b-button href="#" variant="primary">Submit</b-button>
          </b-card>
        </div>
      </h4>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
      }
    },
    props: ['post']
  }
</script>

<style>
  .card {
    max-width: auto;
  }
  
  h4 {
    color: grey;
  }
  
  .topic {
    float: right;
  }
  
  .btn-primary {
    color: black;
    background: linear-gradient(90deg, rgba(255, 185, 28, 1) 0%, rgba(255, 221, 58, 1) 50%, rgba(255, 215, 45, 1) 100%);
    ;
  }
</style>