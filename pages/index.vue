<template>
  <div>
    <Section1 />
    <about-section />
    <resume-section />
    <project-section />
    <Section7 />
    <contact-section />
  </div>
</template>

<script>
import Section1 from "~/components/pages/index/Section1";
import AboutSection from "~/components/pages/index/AboutSection";
import ResumeSection from "~/components/pages/index/ResumeSection";
import ProjectSection from "~/components/pages/index/ProjectSection";
import Section6 from "~/components/pages/index/Section6";
import Section7 from "~/components/pages/index/Section7";
import ContactSection from "~/components/pages/index/ContactSection";
export default {
  components: { Section1, AboutSection, ResumeSection, ProjectSection, Section6, Section7, ContactSection }
};
</script>
