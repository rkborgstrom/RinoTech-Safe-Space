<template>
  <div>
    <b-btn variant="success" v-b-modal.modal1>POST</b-btn>
    <b-modal id="modal1" title="What are you going through?">
      <b-form>
        <input required placeholder="Title">
      </b-form>
      <br />
  
      <div>
    <select v-model="selected">
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
        <b-form-textarea id="textarea2" v-model.trim="text" placeholder="Tell us about it..." :rows="3">
        </b-form-textarea>
        <h6>We keep posts anonymous</h6>
      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
        selected: ''
      }
    }
  }
</script>

<style>
  #modal1 {
    color: #007aff;
  }

h6{
  color: rosybrown;
}



</style>
