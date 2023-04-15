<script setup>
  import { defineProps } from 'vue';
  import coverImage from '../assets/images/no-cover.jpg';

  const { filteredCards } = defineProps(['filteredCards']);
</script>

<template>
  <article class="card" v-for="quiz in filteredCards" :key="quiz.id">
    <div class="card__image-container">
      <img class="card__image" :src="quiz.img.length ? quiz.img : coverImage" :alt="quiz.name">
    </div>
    <div class="card__info">
      <h2 class="card__title">{{ quiz.name }}</h2>
      <span class="card__note">{{ quiz.questions.length }} questions</span>
    </div>
  </article>
</template>