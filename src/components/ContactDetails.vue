<template>
  <div id="contacts" v-if="contact !== null">
    <p>First Name : {{ contact.firstName }}</p>
    <p>Last Name : {{ contact.lastName }}</p>
    <p>Phone No : {{ contact.phoneNo }}</p>
    <p>Email Id : {{ contact.emailId }}</p>
    <p>Notes : {{ contact.notes }}</p>
    <p>Date Of Birth : {{ contact.dateOfBirth }}</p>
  </div>
</template>

<script>
export default {
  name: "contacts",
  props: {
    contact: Object
  }
}
</script>
