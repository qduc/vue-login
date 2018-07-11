<template>
    <form @submit.prevent="onSubmit" class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <p class="message text-danger">{{ message }}</p>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input v-model="email" type="text" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password">
        <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </form>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    message: '',
    email: '',
    password: ''
  }),
  methods: {
    onSubmit: function () {
      this.message = ''
      this.$store.dispatch('login', {email: this.email, password: this.password})
        .then(() => {
          this.$router.push('/Home')
        })
        .catch(() => {
          this.message = 'Login failed'
        })
    }
  }
}
</script>

<style scoped>
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }
    .form-signin .checkbox {
        font-weight: 400;
    }
    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
    .form-signin .form-control:focus {
        z-index: 2;
    }
    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>
