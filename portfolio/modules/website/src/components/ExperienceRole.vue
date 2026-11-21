<script setup>
defineProps({ dates: String, title: String, description: String })
</script>

<template>
  <div class="role">
    <span>{{ dates }}</span>
    <div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
