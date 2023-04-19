<script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import quizData from '../data/quizzes.json'
  import Question from '../components/Question.vue';
  import QuestionHeader from '../components/QuestionHeader.vue';

  const categoryRoute = useRoute();
  const category = quizData.find(category => category.id === parseInt(categoryRoute.params.id));
  const currentQuestionIndex = ref(0);
</script>

<template>
  <QuestionHeader />
  <Question :question="category.questions[currentQuestionIndex]"/>
</template>
