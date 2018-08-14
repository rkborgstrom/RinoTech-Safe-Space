 <template>
    <div style="margin-top: 20px; padding: 10px;">
      <b-button variant="primary" v-b-modal.newSwapShiftModal>New Swap Shift</b-button>
      <b-modal id="newSwapShiftModal" title="New Swap Edit" >
        <div class="d-block text-center">
            <h3>Hello From My Modal!</h3>
        </div>
      </b-modal>
    </div>
 </template>

 <script>

 export default {
    data() {
       return {
          swapshift: {
            id: 1,
            status: {
                id: 1,
                description: 'Requested'
            }
          }
        }
    },
    computed: {   
    },
    methods: {
    },
    async created() {
       console.log('...in modal-sample1');
    }
  }
 </script>