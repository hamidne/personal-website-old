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
            <div
              data-aos="fade-up"
              class="resume-wrap d-flex"
              v-for="(education, index) in educations"
              :key="index"
            >
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="flaticon-ideas"></span>
              </div>
              <div class="text pr-3">
                <span class="date" v-text="education.date" />
                <h2 v-text="education.title" />
                <span class="position" v-text="education.position" />
                <p v-text="education.description" />
              </div>
            </div>
          </div>

          <div id="page-2" class="page two">
            <h2 class="heading">تجربیات</h2>
            <div
              data-aos="fade-up"
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
            <b-row>
              <b-col
                md="4"
                class="animate-box"
                v-for="(skill, index) in skills"
                :key="index"
                data-aos="fade-left"
                data-aos-duration="500"
                :data-aos-delay="index * 100"
              >
                - <strong class="font-12" v-text="skill" />
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import skills from "~/data/skills";
import educations from "~/data/educations";
import experiences from "~/data/experiences";
export default {
  data() {
    return {
      skills,
      educations,
      experiences
    };
  }
};
</script>

<style></style>
