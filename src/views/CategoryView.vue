<script setup>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import quizData from '../data/quizzes.json'
  import Question from '../components/Question.vue';
  import QuestionHeader from '../components/QuestionHeader.vue';

  const categoryRoute = useRoute();
  const category = quizData.find(category => category.id === parseInt(categoryRoute.params.id));
  const currentQuestionIndex = ref(0);

  const quizProgress = computed(() => {
    return `${currentQuestionIndex.value}/${category.questions.length}`;
  });
</script>

<template>
  <QuestionHeader :quizProgress="quizProgress" />
  <Question :question="category.questions[currentQuestionIndex]"/>
</template>
