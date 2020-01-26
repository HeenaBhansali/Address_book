<template>
  <div id="contact-details" v-if="contact !== null">
    <h1>Selected Contact Details</h1>
    <div v-if="editing">
      <ContactForm :contactInfo="contact" @edit:contact="editContact" />
    </div>

    <div v-else>
      <p>First Name : {{ contact.firstName }}</p>
      <p>Last Name : {{ contact.lastName }}</p>
      <p>Phone Number : {{ contact.phoneNumber }}</p>
      <p>Email Id : {{ contact.emailId }}</p>
      <p>Notes : {{ contact.notes }}</p>
      <p>Date Of Birth : {{ contact.dateOfBirth }}</p>
    </div>

    <div v-if="editing">
      <button @click="editing = false">Cancel</button>
    </div>

    <div v-else>
      <button @click="toggleEditMode">Edit</button>
      <button @click="$emit('delete:contact', contact.id)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import ContactForm from "./ContactForm.vue"

export default {
  name: "contact-details",
  props: {
    contact: Object,
    editContact: Function
  },
  components: {
    ContactForm
  },

  data() {
    return {
      editing: false
    }
  },
  methods: {
    toggleEditMode() {
      this.editing = true
    }
  }
}
</script>

<style>
#contact-details {
  margin: 20px;
  margin-left: 0;
  padding: 20px;
  border: 1px solid black;
}
</style>
