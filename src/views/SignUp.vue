<template lang="html">
  <section class="section">
    <div class="container">
      <h1 class="title">Are you ready for new targets?</h1>
      <h2 class="subtitle">
        Use your email address to verify and create new account.
      </h2>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <FieldEmail v-model="email"></FieldEmail>
        <FieldPassword v-model="password" :withConfirmation="true"></FieldPassword>
        <div class="field">
          <p class="control">
            <button class="button is-primary">
              Register
            </button>
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import FieldEmail from '@/components/form/FieldEmail.vue'
import FieldPassword from '@/components/form/FieldPassword.vue'
export default {
  name: 'PageSignUp',
  components: {FieldEmail, FieldPassword},
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    onSubmit() {
      console.log(this.email, this.password);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
