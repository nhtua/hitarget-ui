<template>
  <div class="field">
    <div class="control">
      <textarea
        :value="modelValue"
        @input="$emit('update:modelValue',$event.target.value)"
        class="textarea" :placeholder="hint" 
        :maxlength="!isNaN(max)?max:''"></textarea>
      <span class="show-max-length" v-if="!isNaN(max)">{{modelValue.length}}/{{max}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldText',
  emits: ['update:modelValue'],
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
    },
    max: {
      type: Number,
      require: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
