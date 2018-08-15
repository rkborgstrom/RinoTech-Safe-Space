<template>
<div>
<b-card @submit="onSubmit">
    <b-form-textarea id="textarea1"
                    v-model="text"
                    placeholder="Enter something"
                    :rows="3"
                    :max-rows="6">
    </b-form-textarea>
    <!-- <pre class="mt-3">{{ text }}</pre> -->
    <b-button href="#" variant="primary">Submit your Post</b-button>



</b-card>

</div>
</template>


<script>
const API_URL = "https://rinotech-safe-space.herokuapp.com/";

export default {
    name: "Register",
    data() {
    return {
        registerURL: "https://rinotech-safe-space.herokuapp.com/",
        form: {
        username: "",
        password: ""
    },
        show: true
        // users: [],
    };
},
    mounted() {
    fetch(this.registerURL, {
        method: "get",
        mode: "cors",
        credentials: "same-origin",
        headers: new Headers({ "Content-Type": "application/json" })
    }).then(resp => {
      // if (!resp.ok) {
      //   if (resp.status >= 400 || resp.status < 500) {
      //     return resp.json().then(data => {
      //       const err = { errorMessage: data.message };
      //       throw err;
      //     });
      //   }
      //   const err = { errorMessage: 'Blah' };
      //   throw err;
      // }
      return resp.json().then(resp => {
        console.log(resp);
      });
    });
  }
};
</script>