<template>
  <section class="hero-wrap">
    <div class="overlay"></div>
    <b-container>
      <b-row
        class="min-vh-100 slider-text justify-content-center align-items-center"
      >
        <b-col lg="8" md="6" class=" d-flex align-items-center">
          <div class="text text-center">
            <span class="subheading" data-aos="zoom-in" data-aos-delay="300"
              >سلام، من</span
            >
            <h1 data-aos="fade-up" data-aos-delay="700">حمید نصر</h1>
            <h2
              class="d-flex font-20 justify-content-center"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <vue-typed-js
                class="font-weight-semi-bold"
                :strings="strings"
                :loop="true"
                :type-speed="100"
                :start-delay="1000"
                :back-speed="20"
              >
                <span
                  class="typing font-weight-normal text-decoration-none"
                /> </vue-typed-js
              >هستم.
            </h2>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <a class="mouse">
      <a v-scroll-to="'#about-section'" class="mouse-icon">
        <div class="mouse-wheel">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="long-arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-long-arrow-down fa-w-10 fa-3x"><path fill="currentColor" d="M300.3 327.5l-19.6-19.6c-4.8-4.8-12.5-4.7-17.1.2L186 388.8V44c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12v344.8l-77.5-80.7c-4.7-4.8-12.4-4.9-17.1-.2l-19.6 19.6c-4.7 4.7-4.7 12.3 0 17l131.8 131.8c4.7 4.7 12.3 4.7 17 0l131.8-131.8c4.6-4.7 4.6-12.3-.1-17z" class=""></path></svg>
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

<style lang="scss" scoped>
.mouse-wheel svg {
  width: 20px;
}
</style>
