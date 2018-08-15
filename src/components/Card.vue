<template>
    <div>
        <b-card class="pl-5 pr-5" header=" " header-text-variant="white" header-tag="header" 
        header-bg-variant="dark" footer="Karma Score" footer-tag="footer" footer-bg-variant="active" 
        footer-border-variant="dark">
            <b-container class="bv-example-row">
                <b-row>
                    <b-col>
                        <h2>Title</h2>
                    </b-col>
                    <b-col>
                        <h4 class="topic">Topic</h4>
                    </b-col>
                </b-row>
            </b-container>
            <p class="card-text pl-5 pr-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum."</p>
    
            <b-container class="bv-example-row">
                <b-row>

                    <b-col>
                        <h4>
                            <div>
                                <b-card @submit="onSubmit()">
                                    <b-form-textarea id="textarea1" v-model="text" placeholder="Add a comment..." :rows="3" :max-rows="6">
                                    </b-form-textarea>
                                    <pre class="mt-3">{{ text }}</pre>
                                    <b-button href="#" variant="primary">Submit</b-button>
                                </b-card>
                            </div>
                        </h4>
                    </b-col>
                </b-row>
            </b-container>
        </b-card> 
    </div>
</template>

<script>
     export default {
    data() {
      return {
        text: ''
      }
    }
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
         background: linear-gradient(90deg, rgba(255,185,28,1) 0%, rgba(255,221,58,1) 50%, rgba(255,215,45,1) 100%);;
     }
</style>