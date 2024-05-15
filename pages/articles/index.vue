<script setup lang="ts">
const { data: articles } = await useAsyncData('home', () => queryContent('/articles').find())
</script>

<template>
  <h1>日志</h1>
  <ul>
    <li v-for="article in articles">
      <nuxt-link :to="article._path">

        {{ article.title }}
      </nuxt-link>
      <span style="color:gray; font-style: italic; padding: 0 0.5em;"> By {{ article.author }}</span>
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>