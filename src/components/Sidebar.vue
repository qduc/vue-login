<template>
  <!-- Sidebar -->
  <div id="sidebar-wrapper">
    <ul class="sidebar-nav">
      <li class="sidebar-brand">
        <a href="#">
          Hito
        </a>
      </li>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <a href="#" @click="logout">Logout</a>
      </li>
    </ul>
  </div>
  <!-- /#sidebar-wrapper -->
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style scoped>

</style>
