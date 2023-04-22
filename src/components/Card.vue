<script setup>
  import { RouterLink } from 'vue-router'; 
  import noImage from '../assets/images/default-cover.png';

  const { filteredCards } = defineProps(['filteredCards']);
</script>

<template>
  <RouterLink :to="`./category/${quiz.id}`" class="card" v-for="quiz in filteredCards" :key="quiz.id">
    <div class="card__image-container" :style="{ backgroundImage: `url(${noImage})`}">
      <img class="card__image" :src="quiz.img" :alt="quiz.name">
    </div>
    <article class="card__info">
      <h2 class="card__title">{{ quiz.name }}</h2>
      <span class="card__note">{{ quiz.questions.length }} questions</span>
    </article>
  </RouterLink>
</template>