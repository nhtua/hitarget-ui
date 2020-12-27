<template lang="html">
  <div class="field">
    <label class="label">{{label}}</label>
    <div class="control has-icons-left has-icons-right">
      <input v-model="email" class="input is-rounded" :class='{"is-danger":!isValid}' type="email" placeholder="Email input">
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="!isValid">This email is invalid</p>
  </div>
</template>

<script>
export default {
  name: "FieldEmail",
  props: {
    label: {
      type: String,
      require: false,
      default: 'Email'
    }
  },
  data() {
    return {
      email: ""
    }
  },
  computed: {
    isValid() {
      if (this.email.trim() == "") return true;
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
