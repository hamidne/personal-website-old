<template>
  <b-navbar
    toggleable="lg"
    class="ftco_navbar ftco-navbar-light site-navbar-target"
  >
    <b-container>
      <nuxt-link to="/" class="navbar-brand" title="Hamid Nasr" data-aos="fade-left">
        <span>H</span>amid
      </nuxt-link>

      <b-navbar-toggle target="nav-collapse">
        <span class="oi oi-menu"></span> Menu
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav data-aos="fade-right">
        <b-navbar-nav class="mr-auto text-white">
          <b-nav-item href="#">خانه</b-nav-item>
          <b-nav-item v-scroll-to="'#about-section'">درباره من</b-nav-item>
          <b-nav-item v-scroll-to="'#resume-section'">رزومه</b-nav-item>
          <b-nav-item v-scroll-to="'#projects-section'">پروژه ها</b-nav-item>
          <b-nav-item v-scroll-to="'#blog-section'">بلاگ من</b-nav-item>
          <b-nav-item v-scroll-to="'#contact-section'">ارتباط با من</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style></style>
