<template>
  <div id="app">
    <h1>Address Book</h1>
    <AddContact @add:contact="addContact" />
  </div>
</template>

<script>
import AddContact from "./components/AddContact.vue"

export default {
  name: "app",
  components: {
    AddContact
  },
  data() {
    return {
      contacts: []
    }
  },

  mounted() {
    this.getContacts()
  },

  methods: {
    getContacts() {
      this.contacts = JSON.parse(localStorage.getItem("contacts")) || []
    },

    addContact(contact) {
      this.contacts = [...this.contacts, contact]
      localStorage.setItem("contacts", JSON.stringify(this.contacts))
    }
  }
}
</script>

<style scoped>
#app {
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
}
</style>
