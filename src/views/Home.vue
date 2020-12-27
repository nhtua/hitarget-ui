<template>
  <section name="Introduction" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds" id="intro">
          <div class="container">
            <img alt="Vue logo" src="@/assets/hitarget-logo.png" width="260">
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
        <div class="column is-one-thirds" id="loginForm">
          <form @submit.prevent="onSubmit">
            <FieldEmail v-model="user.email" :withValidation="false"></FieldEmail>
            <FieldPassword v-model="user.password" :withValidation="false"></FieldPassword>
            <div class="field">
              <p class="control">
                <button class="button is-primary">
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import FieldEmail from '@/components/form/FieldEmail.vue';
import FieldPassword from '@/components/form/FieldPassword.vue';

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
  methods: {
    onSubmit() {
      console.log(this.user);
      this.$router.push({name:'PageTodo'});
    }
  }
}
</script>

<style scoped>
  #intro {
    text-align: center;
  }
</style>
