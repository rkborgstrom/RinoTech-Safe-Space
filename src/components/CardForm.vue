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

export default {
    data () {
    return {
        text: '',
        methods: {
    getUserData(){
        fetch('https://rinotech-safe-space.herokuapp.com/')
        .then(resp => resp.json())
        .then(resp => this.userData = resp)            

        }
    }    
    }
}
}
</script>
