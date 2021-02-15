<template>
  <div class="field">
    <label class="label">{{label}}</label>
    <div class="control">
      <input
        :value="modelValue"
        @keyup="onChanged"
        class="input" :class='{"is-rounded": isRounded}' type="text" :placeholder="hint" :maxlength="!isNaN(max)?max:''" >
      <p class="help is-danger" v-if="!isValid">{{msg}}</p>
      <span class="show-max-length" v-if="!isNaN(max)">{{modelValue.length}}/{{max}}</span>
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
    },
    max: {
      type: Number,
      require: false
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
  .show-max-length {
    position: absolute;
    right: 5px;
    top: 10px;
    font-size: 0.8em;
    color: gray;
  }
</style>
