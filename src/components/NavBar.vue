<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="@/assets/hitarget-logo-small.png" height="28">
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMain">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navMain" class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{name: 'Home'}" class="navbar-item">
          Home
        </router-link>

        <router-link :to="{name: 'About'}" class="navbar-item">
          About
        </router-link>

        <router-link :to="{name: 'SupportMe'}" class="navbar-item">
          Support
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
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
