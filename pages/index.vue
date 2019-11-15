<template>
  <div>
    <header-section />
    <about-section />
    <resume-section />
    <project-section />
    <blog-section />
    <collaboration-section />
    <contact-section />
  </div>
</template>

<script>
import BlogSection from "~/components/pages/index/BlogSection";
import AboutSection from "~/components/pages/index/AboutSection";
import ResumeSection from "~/components/pages/index/ResumeSection";
import HeaderSection from "~/components/pages/index/HeaderSection";
import ProjectSection from "~/components/pages/index/ProjectSection";
import CounterSection from "~/components/pages/index/CounterSection";
import ContactSection from "~/components/pages/index/ContactSection";
import CollaborationSection from "~/components/pages/index/CollaborationSection";

export default {
  components: {
    BlogSection,
    AboutSection,
    HeaderSection,
    ResumeSection,
    ProjectSection,
    CounterSection,
    ContactSection,
    CollaborationSection
  }
};
</script>
