<template lang="html">
  <div class="field">
    <div class="control">
      <DatePicker v-model="date" @update:modelValue="onSelect" />
    </div>
  </div>
</template>

<script>
import { DatePicker } from 'v-calendar';
export default {
  name: 'FieldDateTime',
  components: {
    DatePicker
  },
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
      date: new Date(),
    }
  },
  methods: {
    onSelect(e) {
      this.$emit('update:modelValue', e)
    }
  }
}
</script>

<style lang="scss">

</style>
