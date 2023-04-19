<script setup>
  import { defineProps } from 'vue';

  const { category } = defineProps(['category']);
</script>

<template>
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