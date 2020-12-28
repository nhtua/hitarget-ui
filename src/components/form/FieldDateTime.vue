<template lang="html">
  <div class="field">
    <div class="control">
        <datepicker
          v-model="selected"
          :placeholder="hint"
        />
    </div>
  </div>
</template>

<script>
import datepicker from 'vue3-datepicker';
export default {
  name: 'FieldDateTime',
  components: { datepicker },
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
