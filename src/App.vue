<template>
  <div id="app">
    <h1>Address Book</h1>
    <button v-if="this.$route.path === '/'" @click="addContact">
      Add Contact
    </button>
    <router-view> </router-view>
  </div>
</template>

<script>
import { getContacts, setContacts } from "./utils/utils.js"

export default {
  name: "app",
  data() {
    return {
      contacts: getContacts(),
      currentContact: null
    }
  },

  methods: {
    addContact() {
      this.$router.push({ path: "/add-contact" })
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
