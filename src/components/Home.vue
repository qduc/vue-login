<template>
  <div>
    <h1>Home</h1>
    <p>Token: {{ token }}</p>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'Home',
  computed: {
    token () {
      return store.state.apiToken
    }
  }
}
</script>

<style scoped>

</style>
