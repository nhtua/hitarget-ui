<template>
  <div class="field">
    <label class="label">{{label}}</label>
    <div class="control">
      <input
        :value="modelValue"
        @keyup="onChanged"
        class="input" :class='{"is-rounded": isRounded}' type="text" :placeholder="hint">
      <p class="help is-danger" v-if="!isValid">{{msg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldText',
  emits: ['update:modelValue'],
  props: {
    label: {
      type: String,
      require: false,
      default: ''
    },
    hint: {
      type: String,
      require: false,
      default: ''
    },
    modelValue: {
      type: String,
      require: true,
      default: ''
    },
    isRounded:  {
      type: Boolean,
      require: false,
      default: false
    },
    validator: {
      type: Function,
      require: false,
      default: ()=>{return {isValid: true, message:""}}
    }
  },
  data() {
    return {
      isValid: true,
      msg: ""
    }
  },
  methods: {
    onChanged(e) {
      const result = this.validator(e.target.value);
      this.isValid = result.isValid
      this.msg = result.message
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
