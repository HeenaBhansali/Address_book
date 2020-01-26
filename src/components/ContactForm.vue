<template>
  <div id="contact-form">
    <form @submit="handleSubmit" novalidate="true">
      <label>First Name</label>
      <input
        ref="first"
        name="firstname"
        type="text"
        v-model.trim="$v.details.firstName.$model"
        placeholder="Enter first name"
      />
      <p v-if="$v.details.firstName.$error">Enter valid First Name</p>

      <label>Last Name</label>
      <input
        ref="last"
        name="lastname"
        type="text"
        v-model.trim="$v.details.lastName.$model"
        placeholder="Enter last name"
      />
      <p v-if="$v.details.lastName.$error">Enter valid Last Name</p>

      <label>Email address</label>
      <input
        v-model="$v.details.emailId.$model"
        type="email"
        placeholder="Enter email"
      />
      <p v-if="$v.details.emailId.$error">Enter valid Email Address</p>

      <label>Phone Number</label>
      <input
        v-model="$v.details.phoneNumber.$model"
        type="text"
        placeholder="Enter Phone Number"
      />
      <p v-if="$v.details.phoneNumber.$error">Enter valid Phone Number</p>

      <label>Notes</label>
      <input v-model="details.notes" type="text" placeholder="Enter Notes" />

      <label>Date of birth </label>
      <input
        v-model="$v.details.dateOfBirth.$model"
        type="date"
        placeholder="Enter DOB"
      />
      <p v-if="$v.details.dateOfBirth.$error">Enter valid Date of Birth</p>

      <button v-if="!contactInfo">Add Contact</button>
      <button type="button" v-else @click="editContact">Save</button>
    </form>
  </div>
</template>

<script>
import {
  email,
  required,
  minLength,
  maxLength,
  numeric
} from "vuelidate/lib/validators"
import { validationMixin } from "vuelidate"

export default {
  mixins: [validationMixin],

  name: "contact-form",
  data() {
    return {
      errors: {},
      isError: false,
      success: false,
      details: this.contactInfo || {
        firstName: "",
        lastName: "",
        emailId: "",
        notes: "",
        dateOfBirth: "",
        phoneNumber: ""
      }
    }
  },
  props: {
    contactInfo: Object
  },

  validations: {
    details: {
      firstName: {
        required,
        maxLength: maxLength(50)
      },
      lastName: {
        required,
        maxLength: maxLength(50)
      },
      emailId: {
        email,
        required
      },
      phoneNumber: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(12)
      },
      dateOfBirth: {
        required,
        maxValue: value => value < new Date().toISOString().slice(0, 10)
      }
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$emit("add:contact", {
          ...this.details
        })
        this.details = {
          firstName: "",
          lastName: "",
          emailId: "",
          notes: "",
          dateOfBirth: "",
          phoneNumber: ""
        }
      }
      this.$refs.first.focus()
    },
    editContact() {
      if (!this.$v.$invalid)
        this.$emit("edit:contact", this.contactInfo.id, this.contactInfo)
    }
  }
}
</script>
<style>
.error-message {
  color: #d33c40;
}

label {
  font-weight: 500;
  font-size: 1.25rem;
  display: block;
  margin: 1rem 0 0.5rem;
}

input {
  display: block;
  border: 1px solid #dedede;
  border-radius: 4px;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  width: 100%;
  max-width: 100%;
}

button {
  background: #0d8c80;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
}
</style>
