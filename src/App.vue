<template>
  <NavBar/>
  <router-view/>
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
