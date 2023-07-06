<script setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps(['numberOfCorrectAnswers', 'questionsLength', 'questions', 'answers'])

const { numberOfCorrectAnswers, questionsLength, questions, answers } = toRefs(props)
</script>

<template>
  <main class="results">
    <div class="container">
      <p class="results__intro">Your results:</p>
      <strong class="results__total">{{ numberOfCorrectAnswers }}/{{ questionsLength }}</strong>
      <table class="chart results__key">
        <caption class="chart__title">
          Answer keys:
        </caption>
        <thead>
          <tr>
            <th class="chart__column chart__header">#</th>
            <th class="chart__column chart__header">Your answer</th>
            <th class="chart__column chart__header">Correct answer</th>
          </tr>
        </thead>
        <tbody class="chart__content">
          <tr v-for="question in questions" :key="question.id" class="chart__line">
            <td class="chart__column">{{ question.id }}</td>
            <td
              v-for="answer in answers"
              :key="answer.id"
              v-show="answer.id === question.id"
              class="chart__column"
            >
              {{ answer.label }}
            </td>
            <td
              v-for="option in question.options"
              :key="option.id"
              v-show="option.isCorrect"
              class="chart__column"
            >
              {{ option.label }}
            </td>
          </tr>
        </tbody>
      </table>
      <RouterLink to="/" class="link">Return to the Home page</RouterLink>
    </div>
  </main>
</template>
