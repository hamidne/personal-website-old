<template>
  <div>
    <header-section />
    <about-section />
    <resume-section />
    <project-section />
    <Section7 />
    <contact-section />
  </div>
</template>

<script>
import Section7 from "~/components/pages/index/Section7";
import AboutSection from "~/components/pages/index/AboutSection";
import ResumeSection from "~/components/pages/index/ResumeSection";
import HeaderSection from "~/components/pages/index/HeaderSection";
import ProjectSection from "~/components/pages/index/ProjectSection";
import CounterSection from "~/components/pages/index/CounterSection";
import ContactSection from "~/components/pages/index/ContactSection";
export default {
  components: {
    Section7,
    AboutSection,
    HeaderSection,
    ResumeSection,
    ProjectSection,
    CounterSection,
    ContactSection
  }
};
</script>
