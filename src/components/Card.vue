<template>
  <div class="box">
    <article class="media">
      <div class="media-left"  @mouseover="showControl=true" @mouseleave="showControl=false">
        <figure class="image is-64x64">
          <div  class="progress-clock is-64x64" :class="isCompleted" v-show="!showControl"><span>{{percentage}}%</span></div>
          <div class="progress-control" :class="isCompleted" v-show="showControl" @click.stop="toggleControl">
            <span v-show="!isRunning"><i class="fas fa-running"></i></span>
            <span v-show="isRunning"><i class="fas fa-hand-paper"></i></span>
          </div>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{routine.summary}}</strong> <small v-if="routine.end_date">End of {{deadline}}</small>
            <br>
            {{routine.note}}
          </p>
        </div>
      </div>
    </article>
    <div class="progress-bar" :class="colorStatus()" :style='{"width": percentage+"%"}'>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'
import {mapActions} from 'vuex'

export default {
  name: "TodoCard",
  props: {
    routine: Object
  },
  data() {
    return {
      isRunning: false,
      showControl: false,
    }
  },
  computed: {
    percentage() {
      const cp = this.getCurrentCheckpoint()
      return cp == null ?0 :cp.percentage
    },
    deadline() {
      if (!this.routine.end_date)
        return null
      return format(this.routine.end_date, 'MMM d')
    },
    isCompleted() {
      if (this.percentage>=100) return 'is-completed'
      return ''
    }
  },
  methods: {
    ...mapActions('Routine', ['addCheckpoint']),
    toggleControl() {
      this.isRunning = !this.isRunning
      this.addCheckpoint({routine_id: this.routine.id, is_running: this.isRunning})
    },
    colorStatus() {
      let cssClass = ""
      if (this.isCompleted) {
        cssClass += "is-completed "
      }
      if (this.isRunning && !this.isCompleted) {
        cssClass += "is-running "
      }
      return cssClass
    },
    getCurrentCheckpoint() {
      const today = format(new Date(), 'yyyy-MM-dd')
      const result = this.routine.repeat.map((v)=>{
        if (today == v.date) return v
      })
      if (result.length > 0)
        return result[0]
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    background: $soil-lightest;
    position: relative;
    &:hover {
      background: $soil-lighter;
      transition: linear 250ms background;
    }
  }
  .progress-clock, .progress-control  {
    cursor: pointer;
    width: 64px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    border-radius: 50%;
    background: $soil-fire;
    font-size: 24px;
    &.is-completed {
      background: $nickel-sulphate;
    }
  }
  .progress-bar {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 6px;
    background: $soil-fire;
    border-radius: 0px 0px 0px 6px;
    transition: linear 400ms all;
    &.is-completed {
      background: $nickel-sulphate;
      border-radius: 0px 0px 6px 6px;
    }
  }
  @keyframes backgroundAmbientPallete {
    @for $i from 0 through 10 {
      #{$i*10}% {
        background: radial-gradient(circle at $i*10%, $soil-lighter, $soil-fire);
      }
    }
  }
  .is-running {
    animation-name: backgroundAmbientPallete;
    animation-duration: 1200ms;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

</style>
