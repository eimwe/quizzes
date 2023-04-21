<script setup>
  import { RouterLink } from 'vue-router';

  const {
    numberOfCorrectAnswers,
    questionsLength,
    questions
    } = defineProps([
     'numberOfCorrectAnswers',
     'questionsLength',
     'questions'
    ]);
</script>

<template>
  <main class="results">
    <div class="container">
      <p class="results__intro">Your results:</p>
      <strong class="results__total">{{ numberOfCorrectAnswers }}/{{ questionsLength }}</strong>
      <table>
        <caption>Answer keys:</caption>
        <tr v-for="question in questions" :key="question.id">
          <td>{{ question.id }}</td>
          <td
            v-for="option in question.options"
            :key="option.id"
            v-show="option.isCorrect"
          >{{ option.label }}</td>
        </tr>
      </table>
      <RouterLink to="/" class="link">Return to the Home page</RouterLink>
    </div>
  </main>
</template>