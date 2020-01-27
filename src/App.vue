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
export default {
  name: "app",
  methods: {
    addContact() {
      this.$router.push({ path: "/add-contact" })
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
