<script setup>
  import { defineProps, defineEmits } from 'vue';

  const { question } = defineProps(['question']);
  const emit = defineEmits(['selectedOption']);

  const emitSelectedOption = (isCorrect) => {
    emit('selectedOption', isCorrect);
  }
</script>

<template>
  <main>
    <dl>
      <dt>{{ question.text }}</dt>
      <dd>
        <ul>
          <li
            v-for="answer in question.options"
            :key="answer.id"
            @click="emitSelectedOption(answer.isCorrect)"
          >
            <span>{{ answer.text }}</span>
          </li>
        </ul>
      </dd>
    </dl>
  </main>
</template>