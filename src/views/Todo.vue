<template lang="html">
  <div class="columns">
    <div class="column is-four-fifths">

    </div>
    <div class="column is-one-fifths">
      <div class="right-panel tag-list">
        <div class="tag-item" v-for="(tag, index) in tags" :key="index"><span class="hash"></span>{{tag}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTodo",
  data() {
    return {
      tags: ["docker","kubernetes", "CNCF", "translator"]
    }
  }
}
</script>

<style lang="scss" scoped>
.right-panel {
  border: dotted 1px $soil-dark;
  color: $soild-light;
}
.tag-list {
  .hash {
    color:  #948356;
    font-style: italic;
  }
}
</style>
