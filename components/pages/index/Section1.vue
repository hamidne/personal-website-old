<template>
  <section class="hero-wrap">
    <div class="overlay"></div>
    <b-container>
      <b-row
        class="min-vh-100 slider-text justify-content-center align-items-center"
      >
        <b-col lg="8" md="6" class=" d-flex align-items-center">
          <div class="text text-center">
            <span class="subheading">سلام، من</span>
            <h1>حمید نصر</h1>
            <h2 class="d-flex font-20 justify-content-center">
              <vue-typed-js
                class="font-weight-semi-bold"
                :strings="strings"
                :loop="true"
                :type-speed="100"
                :start-delay="1000"
                :back-speed="20"
              >
                <span class="typing font-weight-normal text-decoration-none" />
              </vue-typed-js>هستم.
            </h2>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <a class="mouse">
      <a href="#" class="mouse-icon">
        <div class="mouse-wheel">
          <span class="ion-ios-arrow-round-down">77</span>
        </div>
      </a>
    </a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      strings: ["طراح وب", "برنامه نویس"]
    };
  }
};
</script>
