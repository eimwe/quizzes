<script setup>
  import { defineProps } from 'vue';

  const { question } = defineProps(['question']);
</script>

<template>
  <main>
    <dl>
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