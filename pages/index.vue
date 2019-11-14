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
import HeaderSection from "~/components/pages/index/HeaderSection";
import AboutSection from "~/components/pages/index/AboutSection";
import ResumeSection from "~/components/pages/index/ResumeSection";
import ProjectSection from "~/components/pages/index/ProjectSection";
import CounterSection from "~/components/pages/index/CounterSection";
import Section7 from "~/components/pages/index/Section7";
import ContactSection from "~/components/pages/index/ContactSection";
export default {
  components: { HeaderSection, AboutSection, ResumeSection, ProjectSection, CounterSection, Section7, ContactSection }
};
</script>
