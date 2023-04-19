<script setup>
  import { useRoute } from 'vue-router';
  import quizData from '../data/quizzes.json'
  import Question from '../components/Question.vue';
  import QuestionHeader from '../components/QuestionHeader.vue';

  const categoryRoute = useRoute();
  const category = quizData.find(category => category.id === parseInt(categoryRoute.params.id));
</script>

<template>
  <QuestionHeader />
  <Question :category="category"/>
</template>
