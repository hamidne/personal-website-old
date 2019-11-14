<template>
  <b-navbar
    toggleable="lg"
    class="ftco_navbar ftco-navbar-light site-navbar-target"
  >
    <b-container>
      <nuxt-link to="/" class="navbar-brand" title="Hamid Nasr">
        <span>H</span>amid
      </nuxt-link>

      <b-navbar-toggle target="nav-collapse">
        <span class="oi oi-menu"></span> Menu
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-auto text-white">
          <b-nav-item href="#">خانه</b-nav-item>
          <b-nav-item href="#">درباره من</b-nav-item>
          <b-nav-item href="#">رزومه</b-nav-item>
          <b-nav-item href="#">پروژه ها</b-nav-item>
          <b-nav-item href="#">بلاگ من</b-nav-item>
          <b-nav-item href="#">ارتباط با من</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style></style>
