<template>
  <section
    class="ftco-section ftco-hireme img"
  >
    <div class="overlay"></div>
    <b-container class="container">
      <b-row class="row justify-content-center">
        <b-col md="7" class="text-center">
          <h2 class="font-weight-normal">
            من برای <strong class="text-success">همکاری</strong> در پروژه ها آماده هستم.
          </h2>
          <p>
            رودخانه كوچك به نام دادن در جاي خود جاري مي شود و رجياليا لازم را
            تأمين مي كند.
          </p>
          <p class="mb-0">
            <b-button variant="primary" class="px-3" v-scroll-to="'#contact-section'">تماس با من</b-button>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  background-image: url("../../../assets/img/handshake.jpg");
}
</style>
