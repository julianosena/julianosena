<script setup>
defineProps({ label: String, url: String, source: String })
</script>

<template>
  <aside class="client-scale" :aria-label="label">
    <span class="scale-label">{{ label }}</span>
    <p><slot /></p>
    <a :href="url">{{ source }}</a>
  </aside>
</template>
