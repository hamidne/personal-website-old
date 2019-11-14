<template>
  <section
    class="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
    id="about-section"
  >
    <b-container>
      <b-row class="d-flex no-gutters">
        <b-col md="6" class="d-flex">
          <div class="img-about img d-flex align-items-stretch">
            <div class="overlay"></div>
            <div
              class="img d-flex align-self-stretch align-items-center"
              id="personal-image"
            ></div>
          </div>
        </b-col>
        <b-col md="6" class="pl-md-5 py-5">
          <b-row class="justify-content-start pb-3">
            <b-col md="12" class="heading-section ftco-animate">
              <h1 class="big">About</h1>
              <h2 class="mb-4">About Me</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <ul class="about-info mt-4 px-md-0 px-2">
                <li class="d-flex">
                  <span>Name:</span> <span>Ronaldo Fredrickson</span>
                </li>
                <li class="d-flex">
                  <span>Date of birth:</span> <span>November 28, 1989</span>
                </li>
                <li class="d-flex">
                  <span>Address:</span> <span>San Francisco CA 97987 USA</span>
                </li>
                <li class="d-flex"><span>Zip code:</span> <span>1000</span></li>
                <li class="d-flex">
                  <span>Email:</span> <span>ronaldo@gmail.com</span>
                </li>
                <li class="d-flex">
                  <span>Phone: </span> <span>+1-2234-5678-9-0</span>
                </li>
              </ul>
            </b-col>
          </b-row>
          <div class="counter-wrap ftco-animate d-flex mt-md-3">
            <div class="text">
              <p class="mb-4">
                <span class="number" data-number="120">0</span>
                <span>Project complete</span>
              </p>
              <p>
                <a href="#" class="btn btn-primary py-3 px-3">Download CV</a>
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {};
</script>

<style>
#personal-image {
  background-image: url("../../../assets/img/about.jpg");
}
</style>
