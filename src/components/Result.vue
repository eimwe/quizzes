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
  <main class="results">
    <div class="container">
      <p class="results__intro">Your results:</p>
      <strong class="results__total">{{ numberOfCorrectAnswers }}/{{ questionsLength }}</strong>
      <RouterLink to="/" class="link">Return to the Home page</RouterLink>
    </div>
  </main>
</template>