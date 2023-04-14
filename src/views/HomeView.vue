<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__container">
        <h1 class="page-header__title">
          Quizzes
        </h1>
        <form action="#" class="search" method="GET">
          <input class="search__bar" type="search" name="search" placeholder="Search">
        </form>
      </div>
    </div>
  </header>
  <main class="cards">
    <div class="container">
      <div class="cards__container">
        <article class="card">
          <div class="card__image-container">
            <img class="card__image" src="../assets/images/no-cover.jpg" alt="">
          </div>
          <div class="card__info">
            <h2 class="card__title">Quiz category</h2>
            <span class="card__note">Number of questions</span>
          </div>
        </article>
        <article class="card">
          <div class="card__image-container">
            <img class="card__image" src="../assets/images/no-cover.jpg" alt="">
          </div>
          <div class="card__info">
            <h2 class="card__title">Quiz category</h2>
            <span class="card__note">Number of questions</span>
          </div>
        </article>
      </div>
    </div>
    <TheWelcome />
  </main>
</template>
