<script setup>
  import { RouterLink } from 'vue-router';

  const {
    numberOfCorrectAnswers,
    questionsLength
    } = defineProps([
     'numberOfCorrectAnswers',
     'questionsLength'
    ]);
</script>

<template>
  <div class="container">
    <p>Your results:</p>
    <strong>{{ numberOfCorrectAnswers }}/{{ questionsLength }}</strong>
    <RouterLink to="/">Return to the Home page</RouterLink>
  </div>
</template>