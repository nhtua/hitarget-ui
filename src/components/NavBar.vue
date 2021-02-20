<template>
  <nav class="navbar" role="navigation" aria-label="main navigation" @click="hitBurger=!hitBurger">
    <div class="navbar-brand">
      <span  @click.stop="hitBurger=false">
        <router-link to="/" class="navbar-item">
          <img src="images/hitarget-logo-small.png" height="28">
        </router-link>
      </span>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="mainNav">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="mainNav" class="navbar-menu" :class='{"is-active": hitBurger}'>
      <div class="navbar-start">
        <router-link :to="{name: 'Home'}" class="navbar-item">
          Home
        </router-link>

        <router-link :to="{name: 'About'}" class="navbar-item">
          About
        </router-link>

        <a class="navbar-item" :href="contactLink" target="_blank">
          Support
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" v-if="currentUser">
          {{currentUser.name}}
        </a>

        <div class="navbar-dropdown" v-if="currentUser">
          <router-link :to="{name: 'PageTodo'}" class="navbar-item">
            Todos
          </router-link>
          <a class="navbar-item">
            Strikes
          </a>
          <a class="navbar-item">
            Settings
          </a>
          <a class="navbar-item" @click="logout">
            Log-out
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" :href="contactLink" target="_blank">
            <i class="fas fa-lightbulb"></i>
            <span>Report issues</span>
          </a>
        </div>
      </div>
        <div class="navbar-item" v-if="!currentUser">
          <div class="buttons">
            <router-link :to="{name:'SignUp'}" class="button is-primary">
              <strong>Sign up</strong>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapActions} from 'vuex'

  export default {
    name: "MainNav",
    data() {
      return {
        hitBurger: false,
      }
    },
    computed: {
      currentUser() {
        return this.$store.state.User.currentUser
      },
      contactLink() {
        return this.$store.state.Config.data.CONTACT_LINK
      }
    },
    methods: {
      ...mapActions('User', ['logout'])
    }
  }
</script>
