<template>
  <div id="contact-list">
    <h1>Contacts</h1>
    <p v-if="Object.keys(contacts).length < 1" class="empty-list">
      No Contacts
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="contactId in orderedContacts"
          v-bind:key="contactId"
          @click="() => showContact(contactId)"
        >
          <td>{{ contacts[contactId].firstName }}</td>
          <td>{{ contacts[contactId].phoneNumber }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getContacts } from "../utils/utils.js"

export default {
  name: "contact-list",
  data() {
    return {
      contacts: getContacts(),
      currentContact: null
    }
  },

  computed: {
    orderedContacts() {
      let contactIds = Object.keys(this.contacts)
      if (contactIds.length > 0) {
        return contactIds.sort((c1, c2) => {
          if (
            this.contacts[c1].firstName.toLowerCase() >
            this.contacts[c2].firstName.toLowerCase()
          )
            return 1
          return -1
        })
      }
      return []
    }
  },
  methods: {
    showContact(contactId) {
      this.$router.push({
        name: "contact-details",
        params: {
          contact: { ...this.contacts[contactId] }
        }
      })
    }
  }
}
</script>

<style scoped>
#contact-list {
  margin: 20px;
  padding: 20px;
  margin-left: 0;
  border: 1px solid black;
}
</style>
