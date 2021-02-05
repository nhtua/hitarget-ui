<template>
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
      <div class="columns">
        <div class="column is-one-thirds">
          <form @submit.prevent="onSubmit">
          <FieldEmail v-model="form.email"></FieldEmail>
          <FieldText v-model="form.name" label="Your name"></FieldText>
          <FieldPassword v-model="form.password" :withConfirmation="true"></FieldPassword>
          <div class="field">
            <p class="control">
              <button class="button is-primary">
                Register
              </button>
            </p>
          </div>
        </form>
        </div>
        <div class="column is-two-thirds"></div>
      </div>
    </div>
    <vue-final-modal
      v-model="showMsg"
      classes="modal-container"
      content-class="modal-content"
    >
      <button class="button modal__close" @click="clearErrors">
        <i class="fas fa-window-close"></i>
      </button>
      <span class="modal__title">Oops!!</span>
      <div class="modal__content">
        <p>
          <ul>
            <li v-for="(error, index) in errorMsgs" :key="index">{{error}}</li>
          </ul>
        </p>
      </div>
    </vue-final-modal>
  </section>
</template>

<script>
import FieldEmail from '@/components/form/FieldEmail.vue'
import FieldText from '@/components/form/FieldText.vue'
import FieldPassword from '@/components/form/FieldPassword.vue'
import {mapActions, mapState} from 'vuex'
export default {
  name: 'PageSignUp',
  components: {FieldEmail, FieldPassword, FieldText},
  data() {
    return {
      form:{
        email: "",
        name: "",
        password: "",
      }
    }
  },
  computed: {
    ...mapState('User', ['errorMsgs']),
    showMsg() {
      return this.errorMsgs.length > 0
    }
  },
  methods: {
    ...mapActions('User', ['register', 'clearErrors']),
    onSubmit() {
      this.register(this.form)
    }
  }
}
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
