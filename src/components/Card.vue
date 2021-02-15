<template>
  <div class="box">
    <div class="progress-bar" :class="colorStatus()" :style='{"width": percentage+"%"}'></div>
    <article class="media">
      <div class="media-left"  @mouseover="showControl=true" @mouseleave="showControl=false">
        <figure class="image is-64x64">
          <div  class="progress-clock is-64x64" :class="isCompleted" v-show="!showControl"><span>{{clockDisplay}}</span></div>
          <div class="progress-control" :class="isCompleted" v-show="showControl" @click.stop="toggleControl">
            <span v-show="!isRunning"><i class="fas fa-play"></i></span>
            <span v-show="isRunning"><i class="fas fa-pause"></i></span>
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
  </div>
</template>

<script>
import format from 'date-fns/format'
import {mapActions} from 'vuex'

import {getCurrentCheckpoint} from '@/helpers/checkpoint'
import {seconds2string} from '@/helpers/time'

export default {
  name: "TodoCard",
  props: {
    routine: Object
  },
  data() {
    return {
      isRunning: false,
      showControl: false,
      clock: 0,
      intervalClock: null
    }
  },
  mounted() {
    const checkpoint = getCurrentCheckpoint(this.routine)
    if (checkpoint) {
      this.clock = checkpoint.gain
      if (checkpoint.is_running) {
        this.isRunning = false
        this.toggleControl()
      }
    }

  },
  computed: {
    clockDisplay() {
      if (this.clock % 10 == 0)
        return this.percentage+"%"
      return seconds2string(this.clock)
    },
    percentage() {
      let percent = (this.clock / this.routine.duration)*100
      return parseFloat(percent.toFixed(1))
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
      if (this.intervalClock != null) {
        clearInterval(this.intervalClock)
      }
      if (this.isRunning) {
        this.intervalClock = setInterval(()=>{
          this.clock+=1
          if (this.clock % 30 == 0) {
            if (this.percentage < 100) {
              this.addCheckpoint({routine_id: this.routine.id, is_running: true})
            } else {
              this.addCheckpoint({routine_id: this.routine.id, is_running: false})
              clearInterval(this.intervalClock)
            }
          }
        },1000)
      }
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    background: $soil-lightest;
    position: relative;
    min-height: 100px;
    &:hover {
      background: $soil-lighter;
      transition: linear 250ms background;
    }
    &:hover .progress-clock,
    &:hover .progress-control {
      background: $soil-lightest;
      transition: linear 250ms background;
    }
    .media {
      position: absolute;
    }
  }
  .progress-clock, .progress-control  {
    cursor: pointer;
    width: 64px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    border-radius: 50%;
    background:$soil-lighter;
    font-size: 24px;
    &.is-completed {
      background: $copper-sulphate;
    }
  }
  .progress-bar {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: $soil-fire;
    border-radius: 6px;
    transition: linear 400ms all;
    &.is-completed {
      background: $nickel-sulphate;
      border-radius: 6px;
    }
    z-index: 0;
  }
  @keyframes backgroundAmbientPallete {
    @for $i from 0 through 10 {
      #{$i*10}% {
        background: radial-gradient(circle at $i*20%, $soil-lighter, $soil-fire);
      }
    }
  }
  .is-running {
    animation-name: backgroundAmbientPallete;
    animation-duration: 1200ms;
    animation-iteration-count: infinite;
    animation-direction: normal;
  }

</style>
