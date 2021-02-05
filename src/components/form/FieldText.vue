<template>
  <div class="field">
    <label class="label">{{label}}</label>
    <div class="control">
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="input" :class='{"is-rounded": isRounded}' type="text" :placeholder="hint">
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
    }
  }
}
</script>

<style lang="css" scoped>
</style>
