<script setup>
  import Card from '../components/Card.vue'
  import { ref, computed } from 'vue';
  import quizData from '../data/quizzes.json'

  const quizzes = ref(quizData);
  const searchQuery = ref('');

  const filteredCards = computed(() => {
    return quizzes.value = quizData.filter(quiz => quiz.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
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
        <Card
          :filteredCards="filteredCards"
        />
      </div>
    </div>
  </main>
</template>
