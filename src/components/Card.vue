<template lang="html">
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <div class="progress-clock is-64x64"><span>80%</span></div>
        </figure>
      </div>
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
  .progress-clock  {
    width: 64px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    border-radius: 50%;
    background: $nickel-sulphate;
    font-size: 24px;
  }
</style>
