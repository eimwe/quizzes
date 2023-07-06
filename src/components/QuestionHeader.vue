<script setup>
import { toRefs } from 'vue'
const props = defineProps(['quizProgress', 'barProgress'])
const { quizProgress, barProgress } = toRefs(props)
</script>

<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__container">
        <strong class="page-header__title">Question {{ quizProgress }}</strong>
        <label class="visually-hidden" for="progress-bar">Questions answered</label>
        <progress id="progress-bar" class="progress" :value="barProgress" max="100">
          <span class="visually-hidden">{{ barProgress }}%</span>
        </progress>
      </div>
    </div>
  </header>
</template>
