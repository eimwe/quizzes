<script setup>
  import { RouterLink } from 'vue-router';
  import noImage from '../assets/images/default-cover.png';
</script>

<template>
  <figure class="deadend">
    <img class="deadend__image" :src="noImage" alt="Not Found">
    <figcaption>
      <span class="deadend__title">404 You got lost</span>
      <RouterLink to="/" class="link">Return to the Home page</RouterLink>
    </figcaption>
  </figure>
</template>