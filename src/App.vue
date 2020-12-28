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
