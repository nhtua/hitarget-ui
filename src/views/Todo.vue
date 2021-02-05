<template>
  <div class="section">
    <div class="container inner-section" name="Summary">
      <h1 class="title">Today is {{today}}</h1>
      <h2 class="subtitle">
        you have {{inProgressCount}} routine{{inProgressCount>1?'s':''}} todo,
        or you can <span class="tag is-warning" @click="isOpenForm=!isOpenForm">add</span> one more...
      </h2>
    </div>
    <div v-if="isOpenForm" class="container inner-section" name="NewTaskForm">
      <form @submit.prevent="onSubmit">
        <FieldText v-model="newTask.summary" hint="summary"/>
        <FieldLongText v-model="newTask.note" hint="note"/>
        <FieldText v-model="newTask.duration" :validator="checkDuration" hint="hours each day? 2 hours 30 mins"/>
        <div class="field">
          <button @click.prevent="toggleEndDate" class="button is-light is-small" v-if="!needEndDate"><span class="fas fa-plus"></span> <span>repeat every day until?</span></button>
          <button @click.prevent="toggleEndDate" class="button is-light is-small" v-else><span class="fas fa-minus"></span> <span>no end date</span></button>
        </div>
        <FieldDateTime v-model="newTask.endDate" hint="choose the end of routine" v-if="needEndDate"/>
        <div class="field">
          <p class="control buttons has-addons is-right">
            <button class="button is-primary">
              <span class="fas fa-plus"></span> <span>Add</span>
            </button>
            <button class="button is-light" @click.prevent="isOpenForm=false">
              <span class="fas fa-times"></span> <span>Cancel</span>
            </button>
          </p>
        </div>
      </form>
    </div>
  </div>

  <div class="section">
    <div class="container" name="TaskList">
      <div class="columns is-1-mobile is-2-tablet is-3-desktop">
        <div class="column is-four-fifths">
          <Card
            :routine="task"
            v-for="task in todoList" :key="task.id"/>
        </div>
        <div class="column is-one-fifths" v-if="tags.length > 0">
          <div class="right-panel is-rounded tag-list has-background-light">
            <div class="tag-item" v-for="(tag, index) in tags" :key="index"><span class="hash">#</span> {{tag}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'
import {mapState, mapActions} from 'vuex'

import {dehumanize} from '@/helpers/time'
import Card from '@/components/Card.vue'
import FieldText from '@/components/form/FieldText.vue'
import FieldLongText from '@/components/form/FieldLongText.vue'
import FieldDateTime from '@/components/form/FieldDateTime.vue'


export default {
  name: "PageTodo",
  components: {Card, FieldText, FieldLongText, FieldDateTime},
  data() {
    return {
      isOpenForm: false,
      newTask: {
        summary:"",
        note:"",
        endDate:null,
        duration: ''
      },
      needEndDate: false,
      tags: []
    }
  },
  created() {
    this.fetchTodoList()
  },
  computed: {
    ...mapState('User', ['currentUser']),
    ...mapState('Routine', ['todoList']),
    today() {
      return format(new Date(), 'MMM d');
    },
    inProgressCount() {
      return this.todoList.length;
    }
  },
  watch: {
    currentUser(u) {
      if (!u) this.$router.push({name:'Home'})
    }
  },
  methods: {
    ...mapActions('Routine', ['fetchTodoList', 'addRoutine']),
    onSubmit() {
      this.addRoutine(this.newTask)
      this.resetForm()
      this.isOpenForm = false
    },
    resetForm() {
      this.newTask = {
        summary:"",
        note:"",
        endDate:null,
        duration: ''
      };
      this.needEndDate = false;
    },
    toggleEndDate() {
      this.needEndDate = !this.needEndDate;
      if (this.needEndDate == false) {
        this.newTask.endDate = null;
      }
    },
    checkDuration(d) {
      const v = dehumanize(d)
      if (isNaN(v))
        return {
          isValid: false,
          message: "Does not recognize time format"
        }
      if (v > 8*60*60)
        return {
          isValid: false,
          message: "Max duration is 8 hours"
        }

      return {
        isValid: true,
        message: ""
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  span.tag {
    cursor: pointer;
    &:hover {
      background: $soil-fire;
    }
  }
  button {
    margin-right: 6px;
    span {
      margin: 0px 6px;
    }
  }
  .inner-section {
    margin: 15px auto;
  }
  .right-panel {
    border: solid 1px $soil-dark;
    color: $soil-light;
    margin: auto;
    padding: 10px;
    &.is-rounded {
      border-radius: 5px;
    }
  }
  .tag-list {
    .hash {
      color:  $soil-dark;
      font-style: italic;
    }
  }
</style>
