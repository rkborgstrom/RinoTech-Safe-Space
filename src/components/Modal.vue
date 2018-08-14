<template>
  <div>
    <b-btn variant="success" v-b-modal.modal1>POST</b-btn>
    <b-modal id="modal1" title="What are you going through?">
      <b-form>
        <input required placeholder="Title">
      </b-form>
      <div>
  
        <select v-model="selected">
            <option disabled value="">Please select one</option>
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
        <span>Selected: {{ selected }}</span>
  
      </div>
      <div>
        <b-form-textarea id="textarea2" v-model.trim="text" placeholder="Enter something" :rows="3">
        </b-form-textarea>
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