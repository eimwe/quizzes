<script setup>
  import { RouterLink } from 'vue-router'; 
  import coverImage from '../assets/images/no-cover.jpg';

  const { filteredCards } = defineProps(['filteredCards']);
</script>

<template>
  <RouterLink :to="`./category/${quiz.id}`" class="card" v-for="quiz in filteredCards" :key="quiz.id">
    <div class="card__image-container">
      <img class="card__image" :src="quiz.img.length ? quiz.img : coverImage" :alt="quiz.name">
    </div>
    <article class="card__info">
      <h2 class="card__title">{{ quiz.name }}</h2>
      <span class="card__note">{{ quiz.questions.length }} questions</span>
    </article>
  </RouterLink>
</template>