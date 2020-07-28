<template>
  <div class="q-pa-md fixed-center" style="max-width: 400px" >

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="form.username"
        label="Username*"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Username is required']"
      />

      <q-input
        filled
        type="password"
        v-model="form.password"
        label="Password*"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Password is required',
          val => val.length > 5 && val.length < 100 || 'Password should be more than 6 characters'
        ]"
      />

      <q-toggle v-model="form.rememberMe" label="Remember me" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "Login",

  data () {
    return {
      form: {
        username: null,
        password: null,
        rememberMe: false
      }
    }
  },

  methods: {
    ...mapActions('pdmod6', {
      login: 'login'
    }),

    onSubmit () {
      // this.$store.dispatch('login', this.form)
      this.login(this.form)
      .then(res => {
        localStorage.setItem('token', res.id_token);
        this.$router.push('/')
      })
    },

    onReset () {
      this.form = {
        username: null,
        password: null,
        rememberMe: false
      }
    }
  }
}
</script>
