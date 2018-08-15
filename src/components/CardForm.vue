<template>

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
