<template>
  <div>
    <h1>Home</h1>
    <p>Token: {{ token }}</p>
    <p>User list: {{ users }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    users: []
  }),
  computed: {
    token () {
      console.log(this.$store)
      return this.$store.state.auth.apiToken
    }
  }
}
</script>

<style scoped>

</style>
