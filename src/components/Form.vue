<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="exampleInputGroup1" label="Email address:" label-for="exampleInput1" description="We'll never share your email with anyone else.">
                <b-form-input id="exampleInput1" type="email" v-model="form.email" required placeholder="Enter email">
                </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2" label="Your Name:" label-for="exampleInput2">
                <b-form-input id="exampleInput2" type="text" v-model="form.name" required placeholder="Enter name">
                </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup3" label="Food:" label-for="exampleInput3">
                <b-form-select id="exampleInput3" :options="foods" required v-model="form.food">
                </b-form-select>
            </b-form-group>
            <b-form-group id="exampleGroup4">
                <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
                    <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: "",
                    name: "",
                    food: null,
                    checked: []
                },
                foods: [{
                        text: "Select One",
                        value: null
                    },
                    "Carrots",
                    "Beans",
                    "Tomatoes",
                    "Corn"
                ],
                show: true
            };
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
            onReset(evt) {
                evt.preventDefault();
                /* Reset our form values */
                this.form.email = "";
                this.form.name = "";
                this.form.food = null;
                this.form.checked = [];
                /* Trick to reset/clear native browser form validation state */
                this.show = false;
                this.$nextTick(() => {
                    this.show = true;
                });
            }
        }
    };
</script>
