<template>
  <div id="contact-form">
    <form @submit="handleSubmit">
      <label>First Name</label>
      <input
        ref="first"
        name="firstname"
        type="text"
        v-model="firstName"
        placeholder="Enter first name"
      />
      <p v-if="errors.firstName === true">First Name cannot be empty</p>

      <label>Last Name</label>
      <input
        ref="last"
        name="lastname"
        type="text"
        v-model="lastName"
        placeholder="Enter last name"
      />
      <p v-if="errors.lastName === true">Last Name cannot be empty</p>

      <label>Email address</label>
      <input v-model="emailId" type="email" placeholder="Enter email" />
      <p v-if="errors.emailId === true">Email address cannot be empty</p>

      <label>Phone Number</label>
      <input v-model="phoneNo" type="text" placeholder="Enter Phone No" />
      <p v-if="errors.phoneNo === true">Phone Number cannot be empty</p>

      <label>Notes</label>
      <input v-model="notes" type="text" placeholder="Enter Notes" />

      <label>Date of birth </label>
      <input
        v-model="dateOfBirth"
        type="date"
        required
        placeholder="Enter DOB"
      />
      <p v-if="errors.dateOfBirth === true">Enter Date of Birth</p>

      <button>Add Contact</button>
    </form>
  </div>
</template>

<script>
export default {
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
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      const requiredFields = [
        "firstName",
        "lastName",
        "emailId",
        "dateOfBirth",
        "phoneNo"
      ]

      for (const field of requiredFields) {
        this.errors[field] = false
      }

      for (const field of requiredFields) {
        if (this[field] === "") this.errors[field] = true
        else this.errors[field] = false
      }

      if (!Object.values(this.errors).includes(true))
        this.$emit("add:contact", {
          firstName: this.firstName,
          lastName: this.lastName,
          emailId: this.emailId,
          dateOfBirth: this.dateOfBirth,
          notes: this.notes,
          phoneNo: this.phoneNo
        })
      this.$refs.first.focus()
      if (Object.values(this.errors).includes(true)) this.isError = true

      if (!Object.values(this.errors).includes(true)) {
        this.firstName = ""
        this.lastName = ""
        this.emailId = ""
        this.note = ""
        this.dateOfBirth = ""
        this.phoneNo = ""
      } else {
        this.isError = true
      }
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
