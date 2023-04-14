<script setup>
import TheWelcome from '../components/TheWelcome.vue'
  import { ref, computed } from 'vue';
  import q from '../data/quizzes.json'
  import coverImage from '../assets/images/no-cover.jpg';

  const quizzes = ref(q);
  const searchQuery = ref('');

  const filteredCards = computed(() => {
    return quizzes.value = q.filter(quiz => quiz.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
  });
</script>

<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__container">
        <h1 class="page-header__title">
          Quizzes
        </h1>
        <form
          class="search"
          @submit.prevent="$event.preventDefault()"
          action="#"
          method="GET"
        >
          <input class="search__bar" v-model.trim="searchQuery" type="search" name="search" placeholder="Search">
        </form>
      </div>
    </div>
  </header>
  <main class="cards">
    <div class="container">
      <div class="cards__container">
        <article class="card" v-for="quiz in filteredCards" :key="quiz.id">
          <div class="card__image-container">
            <img class="card__image" :src="quiz.img.length ? quiz.img : coverImage" :alt="quiz.name">
          </div>
          <div class="card__info">
            <h2 class="card__title">{{ quiz.name }}</h2>
            <span class="card__note">{{ quiz.questions.length }} questions</span>
          </div>
        </article>
      </div>
    </div>
    <TheWelcome />
  </main>
</template>
