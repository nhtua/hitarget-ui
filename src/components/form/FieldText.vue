<template lang="html">
  <div class="field">
    <div class="control">
      <input :value="modelValue" class="input" type="text" :placeholder="hint">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldText',
  props: {
    hint: {
      type: String,
      require: false,
      default: ''
    },
    modelValue: {
      type: String,
      require: true,
      default: ''
    }
  }
}
</script>

<style lang="css" scoped>
</style>
