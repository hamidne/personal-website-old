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
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">Resume</b-nav-item>
          <b-nav-item href="#">Services</b-nav-item>
          <b-nav-item href="#">Projects</b-nav-item>
          <b-nav-item href="#">My Blog</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style></style>
