<script setup lang="ts">
const { data: projects } = await useAsyncData('home', () => queryContent('/projects').find())

</script>

<template>
  <h1>项目</h1>
  <ul>
    <li v-for="article in projects">
      <nuxt-link :to="article._path">
        {{ article.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>