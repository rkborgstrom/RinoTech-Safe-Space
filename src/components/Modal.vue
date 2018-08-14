<template>
  <div>
    <b-btn variant="success" v-b-modal.modal1>POST</b-btn>
    <b-modal id="modal1" title="What are you going through?">
      <p class="my-4"></p>
      <div>
  
        <b-dropdown id="ddown-divider" text="Topics" class="m-2">
          <b-dropdown-item-button>Depression</b-dropdown-item-button>
          <b-dropdown-item-button>Anxiety</b-dropdown-item-button>
          <b-dropdown-item-button>Stress</b-dropdown-item-button>
          <b-dropdown-item-button>LGBT</b-dropdown-item-button>
          <b-dropdown-item-button>PTSD</b-dropdown-item-button>
          <b-dropdown-item-button>Alcohol</b-dropdown-item-button>
          <b-dropdown-item-button>Marital</b-dropdown-item-button>
          <b-dropdown-item-button>Death</b-dropdown-item-button>
          <b-dropdown-item-button>Loneliness</b-dropdown-item-button>
          <b-dropdown-item-button>Family Issues</b-dropdown-item-button>
          <b-dropdown-item-button>Other</b-dropdown-item-button>
        </b-dropdown>
      </div>
      <div>
        <b-form-textarea id="textarea1" v-model="text" placeholder="Tell us about it..." :rows="3" :max-rows="6">
        </b-form-textarea>
        <pre class="mt-3">{{ text }}</pre>
      </div>
    </b-modal>
  </div>
</template>