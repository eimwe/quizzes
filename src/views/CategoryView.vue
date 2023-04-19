<script setup>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import quizData from '../data/quizzes.json'
  import Question from '../components/Question.vue';
  import QuestionHeader from '../components/QuestionHeader.vue';
  import Result from '../components/Result.vue';

  const categoryRoute = useRoute();
  const category = quizData.find(category => category.id === parseInt(categoryRoute.params.id));
  const currentQuestionIndex = ref(0);
  const numberOfCorrectAnswers = ref(0);
  const showResults = ref(false);

  const quizProgress = computed(() => {
    return `${currentQuestionIndex.value}/${category.questions.length}`;
  });

  const barProgress = computed(() => {
    return parseInt(`${currentQuestionIndex.value / category.questions.length * 100}`).toFixed();
  });

  const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
      numberOfCorrectAnswers.value++;
    }

    if ((category.questions.length - 1)  === currentQuestionIndex.value) {
      showResults.value = true;
    }

    currentQuestionIndex.value++;
  }
</script>

<template>
  <QuestionHeader :quizProgress="quizProgress" :barProgress="barProgress"/>
  <Question
    v-if="!showResults"
    :question="category.questions[currentQuestionIndex]"
    @selectedOption="onOptionSelected"
  />
  <Result
    v-else
    :numberOfCorrectAnswers="numberOfCorrectAnswers"
    :questionsLength="category.questions.length"
  />
</template>
