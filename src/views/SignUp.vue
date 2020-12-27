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
        <FieldPassword :withConfirmation="true"></FieldPassword>
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
import FieldPassword from '@/components/form/FieldPassword.vue'
export default {
  components: {FieldEmail, FieldPassword}
}
</script>

<style lang="scss" scoped>
</style>
