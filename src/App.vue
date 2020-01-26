<template>
  <div id="app">
    <h1>Address Book</h1>
    <ContactForm @add:contact="addContact" @edit:contact="editContact" />
    <ContactList :contacts="contacts" @show:contact="setCurrentContact" />
    <ContactDetails
      :contact="currentContact"
      @delete:contact="deleteContact"
      :editContact="editContact"
    />
  </div>
</template>

<script>
import ContactForm from "./components/ContactForm.vue"
import ContactList from "./components/ContactList.vue"
import ContactDetails from "./components/ContactDetails.vue"
import { getContacts, setContacts, generateId } from "./utils/utils.js"

export default {
  name: "app",
  components: {
    ContactForm,
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
      const id = generateId()
      contact.id = id
      this.contacts = { ...this.contacts, [id]: contact }
      setContacts(this.contacts)
    },

    setCurrentContact(id) {
      this.currentContact = this.contacts[id]
    },

    editContact(id, editedContact) {
      this.contacts[id] = editedContact
      this.updateData()
    },

    deleteContact(id) {
      delete this.contacts[id]
      this.updateData()
    },

    updateData() {
      setContacts(this.contacts)
      this.contacts = getContacts()
      this.currentContact = null
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
