<script setup>
import { toRefs } from 'vue'
const props = defineProps(['question'])
const { question } = toRefs(props)
const emit = defineEmits(['selectedOption'])

const emitSelectedOption = (isCorrect, option) => {
  emit('selectedOption', isCorrect, option)
}
</script>

<template>
  <main class="questions">
    <div class="container">
      <dl class="questions__container">
        <dt class="questions__title">{{ question.text }}</dt>
        <dd class="questions__list">
          <ol class="questions__options">
            <li
              v-for="answer in question.options"
              :key="answer.id"
              @click="emitSelectedOption(answer.isCorrect, answer.label)"
              class="questions__option"
            >
              <span class="questions__definition">{{ answer.text }}</span>
            </li>
          </ol>
        </dd>
      </dl>
    </div>
  </main>
</template>
