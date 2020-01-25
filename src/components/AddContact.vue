<template>
  <div id="contact-form">
    <form @submit="handleSubmit" novalidate="true">
      <label>First Name</label>
      <input
        ref="first"
        name="firstname"
        type="text"
        v-model.trim="$v.firstName.$model"
        placeholder="Enter first name"
      />
      <p v-if="$v.firstName.$error">First Name cannot be empty</p>

      <label>Last Name</label>
      <input
        ref="last"
        name="lastname"
        type="text"
        v-model="lastName"
        v-model.trim="$v.lastName.$model"
        placeholder="Enter last name"
      />
      <p v-if="$v.lastName.$error">Last Name cannot be empty</p>

      <label>Email address</label>
      <input
        v-model="$v.emailId.$model"
        type="email"
        placeholder="Enter email"
      />
      <p v-if="$v.emailId.$error">Email address cannot be empty</p>

      <label>Phone Number</label>
      <input
        v-model="$v.phoneNo.$model"
        type="text"
        placeholder="Enter Phone No"
      />
      <p v-if="$v.phoneNo.$error">Phone Number cannot be empty</p>

      <label>Notes</label>
      <input v-model="notes" type="text" placeholder="Enter Notes" />

      <label>Date of birth </label>
      <input
        v-model="$v.dateOfBirth.$model"
        type="date"
        placeholder="Enter DOB"
      />
      <p v-if="$v.dateOfBirth.$error">Enter Date of Birth</p>

      <button>Add Contact</button>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators"
import { validationMixin } from "vuelidate"

export default {
  mixins: [validationMixin],

  name: "contact-form",
  data() {
    return {
      errors: {},
      isError: false,
      success: false,
      firstName: "",
      lastName: "",
      emailId: "",
      notes: "",
      dateOfBirth: "",
      phoneNo: ""
    }
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    emailId: {
      email,
      required
    },
    phoneNo: {
      required,
      minValue: 0,
      maxValue: 12
    },
    dateOfBirth: {
      required,
      maxValue: value => value < new Date().toISOString().slice(0, 10)
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$emit("add:contact", {
          firstName: this.firstName,
          lastName: this.lastName,
          emailId: this.emailId,
          dateOfBirth: this.dateOfBirth,
          notes: this.notes,
          phoneNo: this.phoneNo
        })
      }
      this.$refs.first.focus()
    }
  }
}
</script>
<style scoped>
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
