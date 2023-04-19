<script setup>
  import { useRoute } from 'vue-router';
  import quizData from '../data/quizzes.json'
  import Question from '../components/Question.vue';

  const categoryRoute = useRoute();
  const category = quizData.find(category => category.id === parseInt(categoryRoute.params.id));
</script>

<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__container">
        <strong class="page-header__title">Question 1/3</strong>
        <label class="visually-hidden" for="progress-bar">Questions answered</label>
        <progress id="progress-bar" class="progress" value="33" max="100">
          <span class="visually-hidden">33%</span>
        </progress>
      </div>
    </div>
  </header>
  <Question :category="category"/>
</template>
