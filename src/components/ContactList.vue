<template>
  <div id="contacts">
    <p v-if="Object.keys(contacts).length < 1" class="empty-list">
      No Contacts
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Phone No</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="contactId in orderedContacts"
          v-bind:key="contactId"
          @click="$emit('show:contact', contactId)"
        >
          <td>{{ contacts[contactId].firstName }}</td>
          <td>{{ contacts[contactId].phoneNo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "contacts",
  props: {
    contacts: Object
  },
  computed: {
    orderedContacts() {
      let contactIds = Object.keys(this.contacts)
      return contactIds.sort((c1, c2) => {
        if (
          this.contacts[c1].firstName.toLowerCase() >
          this.contacts[c2].firstName.toLowerCase()
        )
          return 1
        return -1
      })
    }
  }
}
</script>
