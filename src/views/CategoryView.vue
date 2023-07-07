<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import loadedData from '../api/fetchData'
import QuestionContent from '../components/QuestionContent.vue'
import QuestionHeader from '../components/QuestionHeader.vue'
import QuizResult from '../components/QuizResult.vue'
import NotFound from '../views/404View.vue'

const categoryRoute = useRoute()
const category = loadedData.find((category) => category.id === parseInt(categoryRoute.params.id))
const currentQuestionIndex = ref(0)
const numberOfCorrectAnswers = ref(0)
const numberOfAnswers = ref([])
const showResults = ref(false)

const quizProgress = computed(() => {
  return `${currentQuestionIndex.value}/${category.questions.length}`
})

const barProgress = computed(() => {
  return parseInt(`${(currentQuestionIndex.value / category.questions.length) * 100}`).toFixed()
})

const onOptionSelected = (isCorrect, option) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++
  }

  if (category.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true
  }

  currentQuestionIndex.value++

  numberOfAnswers.value.push({
    id: currentQuestionIndex.value,
    label: option
  })
}
</script>

<template>
  <div v-if="category">
    <QuestionHeader :quizProgress="quizProgress" :barProgress="barProgress" />
    <QuestionContent
      v-if="!showResults"
      :question="category.questions[currentQuestionIndex]"
      @selectedOption="onOptionSelected"
    />
    <QuizResult
      v-else
      :numberOfCorrectAnswers="numberOfCorrectAnswers"
      :questionsLength="category.questions.length"
      :questions="category.questions"
      :answers="numberOfAnswers"
    />
  </div>
  <div v-else>
    <NotFound />
  </div>
</template>
