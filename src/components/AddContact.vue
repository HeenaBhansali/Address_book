<template>
  <div id="contact-form">
    <form @submit.prevent="handleSubmit">
      <label>First Name</label>
      <input
        ref="first"
        type="text"
        :class="{ 'has-error': submitting && invalidFirstName }"
        v-model="user.fname"
        @focus="clearStatus"
        @keypress="clearStatus"
        placeholder="Enter first name"
      />

      <label>Last Name</label>
      <input
        ref="last"
        type="text"
        :class="{ 'has-error': submitting && invalidLastName }"
        v-model="user.lname"
        @focus="clearStatus"
        @keypress="clearStatus"
        placeholder="Enter last name"
      />

      <label>Email address</label>
      <input
        :class="{ 'has-error': submitting && invalidEmail }"
        v-model="user.email"
        type="email"
        placeholder="Enter email"
        @focus="clearStatus"
      />

      <label>Phone Number</label>
      <input
        :class="{ 'has-error': submitting && invalidPhoneNo }"
        v-model="user.phoneNo"
        type="text"
        placeholder="Enter Phone No"
        @focus="clearStatus"
      />

      <label>Notes</label>
      <input
        :class="{ 'has-error': submitting && invalidNotes }"
        v-model="user.notes"
        type="text"
        placeholder="Enter Notes"
        @focus="clearStatus"
      />

      <label>Date of birth </label>
      <input
        :class="{ 'has-error': submitting && invalidDOB }"
        v-model="user.dob"
        type="date"
        required
        placeholder="Enter DOB"
        @focus="clearStatus"
      />

      <p v-if="error && submitting" class="error-message">
        ❗Please fill out all required fields
      </p>

      <button>Add Contact</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "contact-form",
  data() {
    return {
      error: false,
      submitting: false,
      success: false,
      user: {
        fname: "",
        lname: "",
        email: "",
        notes: "",
        dob: "",
        phoneNo: ""
      }
    }
  },
  computed: {
    invalidFirstName() {
      return this.user.fname === ""
    },
    invalidLastName() {
      return this.user.lname === ""
    },
    invalidEmail() {
      return this.user.email === ""
    },
    invalidPhoneNo() {
      return this.user.phoneNo === ""
    },
    invalidNotes() {
      return this.user.notes === ""
    },
    invalidDOB() {
      return this.user.dob === ""
    }
  },

  methods: {
    handleSubmit() {
      this.clearStatus()
      this.submitting = true

      if (
        this.invalidFirstName ||
        this.invalidLastName ||
        this.invalidEmail ||
        this.invalidPhoneNo ||
        this.invalidNotes ||
        this.invalidDOB
      ) {
        this.error = true
        return
      }

      this.$emit("add:contact", this.user)
      this.$refs.first.focus()
      this.user = {
        fname: "",
        lname: "",
        email: "",
        dob: "",
        phoneNo: "",
        notes: ""
      }
      this.clearStatus()
      this.submitting = false
    },

    clearStatus() {
      this.success = false
      this.error = false
    }
  }
}
</script>
<style scoped>
form {
  margin-bottom: 2rem;
}

.error-message {
  color: #d33c40;
}
</style>
