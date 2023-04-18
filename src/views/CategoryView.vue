<script setup>
  import { useRoute } from 'vue-router';
  import quizData from '../data/quizzes.json'

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
  <main>
    <dl v-for="question in category.questions" :key="question.id">
      <dt>{{ question.text }}</dt>
      <dd>
        <ul>
          <li v-for="answer in question.options" :key="answer.id">
            <span>{{ answer.text }}</span>
          </li>
        </ul>
      </dd>
    </dl>
  </main>
</template>
