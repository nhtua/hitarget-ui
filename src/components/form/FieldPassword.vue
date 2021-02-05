<template>
  <div class="field">
    <label class="label">Password</label>
    <div class="control has-icons-left">
      <input :value="modelValue" @keyup="onPasswordChanged" class="input is-rounded" :class='{"is-danger":!isValid}' type="password" placeholder="Password">
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="!isValid">Password must be 6 character at least</p>
  </div>
  <div class="field" v-if="withConfirmation">
    <label class="label">Confirm password</label>
    <div class="control has-icons-left">
      <input v-model="confirmedPassword" @keyup="onPasswordConfirmationChanged" class="input is-rounded" :class='{"is-danger":!isConfirmed}' type="password" placeholder="Password">
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
    },
    withValidation: {
      type: Boolean,
      default: true,
      require: false
    },
    modelValue: {
      type: String,
      default: "",
      require: true
    }
  },
  data() {
    return {
      confirmedPassword: "",
    }
  },
  computed: {
    isValid() {
      if (this.modelValue == "")
        return true;
      if (this.modelValue.length < 6)
        return false;
      return true;
    },
    isConfirmed() {
      if (this.modelValue != this.confirmedPassword)
        return false;
      return true;
    }
  },
  methods: {
    onPasswordChanged(e) {
      this.$emit("update:modelValue", e.target.value)
    },
    onPasswordConfirmationChanged(e) {
      this.confirmedPassword = e.target.value
    }
  }
}
</script>

<style lang="css" scoped>
</style>
