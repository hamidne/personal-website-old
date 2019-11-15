<template>
  <section class="ftco-section ftco-project" id="projects-section">
    <div class="container-fluid px-md-0">
      <b-row class="no-gutters justify-content-center pb-5">
        <b-col md="12" class="heading-section text-center ">
          <h1 class="big big-2">پروژه ها</h1>
          <h2 class="mb-4">پروژه های من</h2>
          <p>
            بخشی از پروژه هایی که بر روی آن ها کار کرده ام.
          </p>
        </b-col>
      </b-row>
      <div class="row no-gutters">
        <div class="col-md-4" v-for="(project, index) in projects" :key="index" data-aos="fade-up" :data-aos-delay="index * 200" data-aos-duration="600">
          <div
            :id="`${project.slug}-project`"
            class="project img  d-flex justify-content-center align-items-center"
          >
            <div class="overlay"></div>
            <div class="text text-center p-4">
              <h3><a :href="project.link" v-text="project.title" target="blank" /></h3>
              <span>Web Design</span> | <span>Web Design</span> |
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projects from "~/data/projects";
export default {
  data() {
    return {
      projects
    };
  }
};
</script>

<style>
#cafimafi-project {
  background-image: url("../../../assets/img/projects/cafimafi.png");
}
#tarhan-project {
  background-image: url("../../../assets/img/projects/tarhan.png");
}
#gerama-project {
  background-image: url("../../../assets/img/projects/gerama.png");
}
#irangfx-project {
  background-image: url("../../../assets/img/projects/irangfx.png");
}
#taakproject-project {
  background-image: url("../../../assets/img/projects/taakproject.png");
}
#vuejsconf-project {
  background-image: url("../../../assets/img/projects/vuejsconf.png");
}
</style>
