<script setup>
  import { RouterLink } from 'vue-router';
  import coverImage from '../assets/images/no-cover.jpg';
</script>

<template>
  <figure class="deadend">
    <img class="deadend__image" :src="coverImage" alt="Not Found">
    <figcaption>
      <span class="deadend__title">404 You got lost</span>
      <RouterLink to="/" class="link">Return to the Home page</RouterLink>
    </figcaption>
  </figure>
</template>