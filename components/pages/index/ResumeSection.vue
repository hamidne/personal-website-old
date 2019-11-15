<template>
  <section class="ftco-section ftco-no-pb goto-here" id="resume-section">
    <div class="container">
      <div class="row">
        <b-col md="3">
          <nav id="navi">
            <ul>
              <li><a class="current" href="#page-1">تحصیلات</a></li>
              <li><a href="#page-2">تجربیات</a></li>
              <li><a href="#page-3">مهارت ها</a></li>
            </ul>
          </nav>
        </b-col>
        <div class="col-md-9">
          <div id="page-1" class="page one">
            <h2 class="heading">تحصیلات</h2>
            <div class="resume-wrap d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="flaticon-ideas"></span>
              </div>
              <div class="text pr-3">
                <span class="date">1390-1394</span>
                <h2>دوره دبیرستان</h2>
                <span class="position">دبیرستان کمال دانشگاه صنعتی اصفهان</span>
                <p>
                  تحصیل در دوره چهار ساله دبیرستان در دبیرستان کمال دانشگاه
                  صنعتی اصفهان در رشته ریاضی و فیزیک.
                </p>
              </div>
            </div>
            <div class="resume-wrap d-flex ">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="flaticon-ideas"></span>
              </div>
              <div class="text pr-3">
                <span class="date">1394-1398</span>
                <h2>دوره کارشناسی</h2>
                <span class="position">دانشگاه دولتی شهرکرد</span>
                <p>
                  تحصیل در دوره چهار ساله کارشناسی در دانشگاه دولتی شهرکرد در
                  رشته مهندسی نرم افزار.
                </p>
              </div>
            </div>
          </div>

          <div id="page-2" class="page two">
            <h2 class="heading">تجربیات</h2>
            <div
              class="resume-wrap d-flex"
              v-for="(experience, index) in experiences"
              :key="index"
            >
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="flaticon-ideas"></span>
              </div>
              <div class="text pr-3">
                <span class="date" v-text="experience.date" />
                <h2 v-text="experience.title" />
                <span class="position" v-text="experience.position" />
                <p v-text="experience.description" />
              </div>
            </div>
          </div>
          <div id="page-3" class="page three">
            <h2 class="heading">مهارت ها</h2>
            <div class="row">
              <div class="col-md-6 animate-box">
                <div class="progress-wrap ">
                  <h3>Photoshop</h3>
                  <div class="progress">
                    <div
                      class="progress-bar color-1"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width:90%"
                    >
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 animate-box">
                <div class="progress-wrap ">
                  <h3>jQuery</h3>
                  <div class="progress">
                    <div
                      class="progress-bar color-2"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width:85%"
                    >
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 animate-box">
                <div class="progress-wrap ">
                  <h3>HTML5</h3>
                  <div class="progress">
                    <div
                      class="progress-bar color-3"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width:95%"
                    >
                      <span>95%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 animate-box">
                <div class="progress-wrap ">
                  <h3>CSS3</h3>
                  <div class="progress">
                    <div
                      class="progress-bar color-4"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width:90%"
                    >
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 animate-box">
                <div class="progress-wrap ">
                  <h3>WordPress</h3>
                  <div class="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width:70%"
                    >
                      <span>70%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 animate-box">
                <div class="progress-wrap ">
                  <h3>SEO</h3>
                  <div class="progress">
                    <div
                      class="progress-bar color-6"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width:80%"
                    >
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import experiences from "~/data/experiences";
export default {
  data() {
    return {
      experiences
    };
  }
};
</script>

<style></style>
