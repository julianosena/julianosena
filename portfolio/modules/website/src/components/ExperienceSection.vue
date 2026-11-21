<script setup>
import ExperienceRole from './ExperienceRole.vue'
import { recentRoles, earlierRoles } from '../data/experience.js'
</script>

<template>
  <section id="experience" class="section shell">
    <h2>Experience</h2>
    <ExperienceRole
      v-for="role in recentRoles"
      :key="role.dates"
      v-bind="role"
    />
    <details>
      <summary>Earlier experience</summary>
      <ExperienceRole
        v-for="role in earlierRoles"
        :key="role.dates"
        v-bind="role"
      />
    </details>
  </section>
</template>
