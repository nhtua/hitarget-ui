<template lang="html">
  <div class="field">
    <div class="control">
        <datepicker
          v-model="selected"
          :placeholder="hint"
          @selected="$emit('update:modelValue', $event.target.value)"
        />
    </div>
  </div>
</template>

<script>
import datepicker from 'vue3-datepicker';
export default {
  name: 'FieldDateTime',
  components: { datepicker },
  emits: ['update:modelValue'],
  props: {
    hint: {
      type: String,
      require: false,
      default: 'choose a date'
    },
  },
  data() {
    return {
      selected: null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~vue3-datepicker/dist/vue3-datepicker.css';
</style>
