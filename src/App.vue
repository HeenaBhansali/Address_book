<template>
  <div id="app">
    <h1>Address Book</h1>
    <AddContact @add:contact="addContact" />
    <ContactList :contacts="contacts" @show:contact="setCurrentContact" />
    <ContactDetails :contact="currentContact" />
  </div>
</template>

<script>
import AddContact from "./components/AddContact.vue"
import ContactList from "./components/ContactList.vue"
import ContactDetails from "./components/ContactDetails.vue"
import { getContacts, setContacts, generateId } from "./utils/utils.js"

export default {
  name: "app",
  components: {
    AddContact,
    ContactList,
    ContactDetails
  },

  data() {
    return {
      contacts: getContacts(),
      currentContact: null
    }
  },

  methods: {
    addContact(contact) {
      let id = generateId()
      this.contacts = { ...this.contacts, [id]: contact }
      setContacts(this.contacts)
    },

    setCurrentContact(id) {
      this.currentContact = this.contacts[id]
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
