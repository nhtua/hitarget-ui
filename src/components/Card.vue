<template lang="html">
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{title}}</strong> <small v-if="endDate">End of {{deadline}}</small>
            <br>
            {{note}}
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import {format} from 'date-fns';

export default {
  name: "TodoCard",
  props: {
    title: {
      type: String,
      require: true,
      default: ''
    },
    note: {
      type: String,
      require: false,
      default: ''
    },
    endDate: {
      type: Date,
      require: false,
      default: null
    }
  },
  computed: {
    deadline() {
      if (!this.endDate )
        return null;
      return format(this.endDate, 'MMM d')
    }
  }
}
</script>

<style lang="scss" scoped>
 .box {
   background: $soil-lightest;
   &:hover {
     background: $soil-lighter;
     transition: linear 250ms background;
   }
 }
</style>
