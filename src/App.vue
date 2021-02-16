<template>
  <NavBar/>
  <div class="global-padding">
    <router-view/>
  </div>
</template>

<style lang="scss">
  div.global-padding {
    padding: 0px 10px;
  }
  .show-max-length {
    position: absolute;
    right: 5px;
    top: 10px;
    font-size: 0.8em;
    color: gray;
  }
</style>

<script>
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'App',
    components: {
      NavBar
    }
  }
</script>
