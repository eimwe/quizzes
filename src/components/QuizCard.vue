<script setup>
import { RouterLink } from 'vue-router'
import noImage from '../assets/images/default-cover.png'

const props = defineProps(['filteredCards'])
</script>

<template>
  <RouterLink
    v-for="quiz in props.filteredCards"
    :key="quiz.id"
    :to="`./category/${quiz.id}`"
    class="card"
  >
    <div class="card__image-container" :style="{ backgroundImage: `url(${noImage})` }">
      <img class="card__image" :src="quiz.img" :alt="quiz.name" />
    </div>
    <article class="card__info">
      <h2 class="card__title">{{ quiz.name }}</h2>
      <span class="card__note">{{ quiz.questions.length }} questions</span>
    </article>
  </RouterLink>
</template>
