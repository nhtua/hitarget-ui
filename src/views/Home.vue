<template>
  <section name="Introduction" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds" id="intro">
          <div class="container">
            <img alt="Vue logo" src="images/hitarget-logo.png" width="260">
          </div>
          <div class="container">
            <h1 class="title">
              Keep up your good progress
            </h1>
            <p class="subtitle">
              until reaching the goal by <strong>tracking</strong> the time you spent on
            </p>
          </div>
        </div>
        <div class="column is-one-thirds" id="loginForm" v-if="!currentUser">
          <form @submit.prevent="onSubmit">
            <FieldEmail v-model="user.email" :withValidation="false"></FieldEmail>
            <FieldPassword v-model="user.password" :withValidation="false"></FieldPassword>
            <div class="field">
              <p class="control">
                <button class="button is-primary">
                  Login
                </button>

                <router-link :to="{name:'SignUp'}" class="button is-warning">
                  <strong>Sign up</strong>
                </router-link>
              </p>
            </div>
            <div class="field">
              <span class="tag is-warning is-light">By logging in to hiTarget, you agree to</span>
              <span class="tag is-warning is-light"><router-link :to="{name: 'PrivacyPolicy'}">Privacy Policy</router-link> and <router-link :to="{name: 'TermsOfService'}">Terms of service</router-link></span>
            </div>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import FieldEmail from '@/components/form/FieldEmail.vue'
import FieldPassword from '@/components/form/FieldPassword.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PageHome',
  components: {FieldEmail, FieldPassword},
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState('User', ['currentUser'])
  },
  methods: {
    ...mapActions('User', ['loginUser']),
    onSubmit() {
      this.loginUser(this.user).then(()=>{
        if (this.currentUser) {
          this.$router.push({name:'PageTodo'});
        }
      });
    }
  }
}
</script>

<style scoped>
  #intro {
    text-align: center;
  }
  .field .control .button {
    margin: 0 8px 0 0;
  }
  span.tag a {
    padding: 0 6px;
  }
</style>
