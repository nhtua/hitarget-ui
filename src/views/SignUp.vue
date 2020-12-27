<template lang="html">
  <section class="section">
    <div class="container">
      <h1 class="title">Are you ready for new targets?</h1>
      <h2 class="subtitle">
        Use your email address to verify and create new account.
      </h2>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <form class="" action="" method="post">
        <FieldEmail></FieldEmail>
        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left">
            <input class="input is-rounded" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Confirm password</label>
          <div class="control has-icons-left">
            <input class="input is-rounded" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-primary">
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import FieldEmail from '@/components/form/FieldEmail.vue'
export default {
  components: {FieldEmail}
}
</script>

<style lang="scss" scoped>
</style>
