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
        <FieldText hint="summary"/>
        <FieldLongText hint="note"/>
        <div class="field">
          <p class="control">
            <button class="button is-primary">
              <span class="fas fa-plus"></span> <span>Add</span>
            </button>
            <button class="button is-light" @click="isOpenForm=false">
              <span class="fas fa-times"></span> <span>Cancle</span>
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
            :title="task.title"
            :note="task.note"
            :endDate="task.endDate || null"
            v-for="(task, index) in todo" :key="index"/>
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
import format from 'date-fns/format';
export default {
  name: "PageTodo",
  components: {Card, FieldText, FieldLongText},
  data() {
    return {
      isOpenForm: false,
      tags: ["docker","kubernetes", "CNCF", "translator"],
      todo: [
        {
          id: 1,
          title: "anim enim velit multos anim",
          note: "nulla elit dolore dolor illum veniam quis aliqua legam velit anim minim export culpa anim cillum noster legam fugiat magna",
          endDate: new Date('2021-01-15 00:00:00')
        },
        {
          id: 2,
          title: "sunt elit nisi dolor dolor amet fugiat sunt",
          note: "culpa nisi anim minim labore aliqua fore sint irure ipsum",
          endDate: new Date('2021-01-15 00:00:00')
        },
        {
          id: 3,
          title: "quid tamen fore magna",
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
