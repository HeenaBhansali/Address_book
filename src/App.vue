<template>
  <div id="app">
    <h1>Address Book</h1>
    <AddContact @add:contact="addContact" />
    <ContactList :contacts="contacts" @show:contact="showContact" />
    <ContactDetails :contact="currentContact" />
  </div>
</template>

<script>
import AddContact from "./components/AddContact.vue"
import ContactList from "./components/ContactList.vue"
import ContactDetails from "./components/ContactDetails.vue"

export default {
  name: "app",
  components: {
    AddContact,
    ContactList,
    ContactDetails
  },

  data() {
    return {
      contacts: {},
      currentContact: null
    }
  },

  mounted() {
    this.getContacts()
  },

  methods: {
    getContacts() {
      this.contacts = JSON.parse(localStorage.getItem("contacts")) || {}
    },

    addContact(contact) {
      let id = this.generateId()
      this.contacts = { ...this.contacts, [id]: contact }
      localStorage.setItem("contacts", JSON.stringify(this.contacts))
    },

    showContact(id) {
      console.log(id)
      console.log("contacts", this.contacts[id])
      this.currentContact = this.contacts[id]
    },

    generateId() {
      return (
        Math.random()
          .toString(36)
          .substring(2) + new Date().getTime().toString(36)
      )
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
