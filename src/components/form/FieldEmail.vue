<template lang="html">
  <div class="field">
    <label class="label">{{label}}</label>
    <div class="control has-icons-left has-icons-right">
      <input :value="modelValue" @focusout="validate" class="input is-rounded" :class='{"is-danger":!isValid}' type="email" placeholder="Email input">
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right" v-if="!isValid">
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
    },
    withValidation: {
      type: Boolean,
      default: true,
      require: false
    },
    modelValue: {
      type: String,
      require: true,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      v_email: "" //a.k.a validating_email
    }
  },
  computed: {
    isValid() {
      if (this.v_email.trim() == "") return true;
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.v_email);
    }
  },
  methods: {
    validate(e) {
      if (this.withValidation) {        
        //just update value to trigger computed function isValid()
        this.v_email = e.target.value;
      }
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
