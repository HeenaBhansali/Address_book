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
          v-for="(contact, contactId) in contacts"
          v-bind:key="contactId"
          @click="$emit('show:contact', contactId)"
        >
          <td>{{ contact.firstName }}</td>
          <td>{{ contact.phoneNo }}</td>
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
  }
}
</script>
