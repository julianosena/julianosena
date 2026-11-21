<script setup>
import { technologies } from '../data/technologies.js'
</script>

<template>
  <section id="technologies" class="section shell">
    <h2>Technologies</h2>
    <div class="tech-grid">
      <article v-for="technology in technologies" :key="technology.title">
        <h3>{{ technology.title }}</h3>
        <p>{{ technology.description }}</p>
      </article>
    </div>
  </section>
</template>
