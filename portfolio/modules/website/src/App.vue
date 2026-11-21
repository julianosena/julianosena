<script setup>
import PortfolioHeader from './components/PortfolioHeader.vue'
import PortfolioIntro from './components/PortfolioIntro.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import TechnologySection from './components/TechnologySection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProfileSection from './components/ProfileSection.vue'
import ContactFooter from './components/ContactFooter.vue'
</script>

<template>
  <PortfolioHeader />
  <main id="main">
    <PortfolioIntro />
    <ProjectsSection />
    <TechnologySection />
    <ExperienceSection />
    <ProfileSection />
  </main>
  <ContactFooter />
</template>
