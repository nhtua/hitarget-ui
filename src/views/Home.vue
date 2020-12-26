<template>
  <section class="section">
    <div class="container">
      <img alt="Vue logo" src="@/assets/hitarget-logo.png" width="260">
    </div>
    <div class="container">
      <h1 class="title">
        {{ msg }}
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      msg: "HiTarget"
    }
  }
}
</script>
