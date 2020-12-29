<template lang="html">
  <div class="section">
    <div class="container inner-section" name="Summary">
      <h1 class="title">Today is {{today}}</h1>
      <h2 class="subtitle">
        you have {{inProgressCount}} routine task{{inProgressCount>1?'s':''}} todo,
        or you can <span class="tag is-warning" @click="isOpenForm=!isOpenForm">add</span> one more...
      </h2>
    </div>
    <div v-if="isOpenForm" class="container inner-section" name="NewTaskForm">
      <form @submit.prevent="onSubmit">
        <FieldText v-model="newTask.summary" hint="summary"/>
        <FieldLongText v-model="newTask.note" hint="note"/>
        <FieldText v-model="newTask.duration" hint="hours each day? 2 hours 30 mins"/>
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
            :summary="task.summary"
            :note="task.note"
            :endDate="task.endDate || null"
            :duration="task.duration"
            v-for="task in todo" :key="task.id"/>
        </div>
        <div class="column is-one-fifths">
          <div class="right-panel is-rounded tag-list has-background-light">
            <div class="tag-item" v-for="(tag, index) in tags" :key="index"><span class="hash">#</span> {{tag}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import FieldText from '@/components/form/FieldText.vue';
import FieldLongText from '@/components/form/FieldLongText.vue';
import FieldDateTime from '@/components/form/FieldDateTime.vue';
import format from 'date-fns/format';
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
      tags: ["docker","kubernetes", "CNCF", "translator"],
      todo: [
        {
          id: 1,
          summary: "anim enim velit multos anim",
          note: "nulla elit dolore dolor illum veniam quis aliqua legam velit anim minim export culpa anim cillum noster legam fugiat magna",
          endDate: new Date('2021-01-15 00:00:00')
        },
        {
          id: 2,
          summary: "sunt elit nisi dolor dolor amet fugiat sunt",
          note: "culpa nisi anim minim labore aliqua fore sint irure ipsum",
          endDate: new Date('2021-01-15 00:00:00')
        },
        {
          id: 3,
          summary: "quid tamen fore magna",
          note: "nulla quem sint duis sint tempor noster summis illum ipsum export dolore amet aliqua duis",
          endDate: new Date('2021-01-15 00:00:00')
        }
      ]
    }
  },
  computed: {
    today() {
      return format(new Date(), 'MMM d');
    },
    inProgressCount() {
      return this.todo.length;
    }
  },
  methods: {
    onSubmit() {
      const {summary, note, endDate} = this.newTask;
      console.log({summary, note, endDate});
      this.todo.unshift({
        id: this.todo.length + 1,
        summary,
        note,
        endDate,
        percent: 0
      });
      this.resetForm();
      this.isOpenForm = false;
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
