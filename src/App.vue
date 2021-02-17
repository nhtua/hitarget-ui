<template>
  <NavBar/>
  <div class="global-padding">
    <router-view/>
  </div>
</template>

<style lang="scss">
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
