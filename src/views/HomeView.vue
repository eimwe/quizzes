<script setup>
import QuizCard from '../components/QuizCard.vue'
import QuizLoader from '../components/QuizLoader.vue'
import { ref, computed } from 'vue'
import getData from '../composables/getData'
import URL from '../api/config'

const { data: quizzes, error, loader, load } = getData()

load(URL)

const searchQuery = ref('')

const filteredCards = computed(() => {
  return quizzes.value.filter((quiz) =>
    quiz.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <div v-if="loader" class="focused">Loading <QuizLoader /></div>
  <div v-else-if="error" class="focused">{{ error }}</div>
  <div v-else>
    <header class="page-header">
      <div class="container">
        <div class="page-header__container">
          <h1 class="page-header__title">Quizzes</h1>
          <form class="search" @submit.prevent="$event.preventDefault()" action="#" method="GET">
            <input
              class="search__bar"
              v-model.trim="searchQuery"
              type="search"
              name="search"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </header>
    <main class="cards">
      <div class="container">
        <div class="cards__container">
          <QuizCard :filteredCards="filteredCards" />
        </div>
      </div>
    </main>
  </div>
</template>
