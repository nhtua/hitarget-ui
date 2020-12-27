<template lang="html">
  <div class="field">
    <label class="label">Password</label>
    <div class="control has-icons-left">
      <input v-model="password" @focusout="()=>validate()" class="input is-rounded" :class='{"is-danger":!isValid}' type="password" placeholder="Password">
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="!isValid">Password must be 6 character at least</p>
  </div>
  <div class="field" v-if="withConfirmation">
    <label class="label">Confirm password</label>
    <div class="control has-icons-left">
      <input v-model="confirmedPassword" @focusout="()=>validate()" class="input is-rounded" :class='{"is-danger":!isConfirmed}' type="password" placeholder="Password">
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="!isConfirmed">Confirmed password does not match</p>
  </div>
</template>

<script>
export default {
  name: "FieldPassword",
  props: {
    withConfirmation: {
      type: Boolean,
      default: false,
      require: false
    }
  },
  data() {
    return {
      password: "",
      v_password: "",
      confirmedPassword: "",
      v_confirmedPassword: ""
    }
  },
  computed: {
    isValid() {
      if (this.v_password == "")
        return true;
      if (this.v_password.length < 6)
        return false;
      return true;
    },
    isConfirmed() {
      if (this.v_password == "")
        return true;
      if (this.v_password != this.v_confirmedPassword)
        return false;
      return true;
    }
  },
  methods: {
    validate() {
      //just update value, computed function auto validate the input
      this.v_password = this.password;
      this.v_confirmedPassword = this.confirmedPassword;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
