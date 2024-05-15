<script setup lang="ts">
const { data: projects } = await useAsyncData('home', () => queryContent('/projects').find())

</script>

<template>
  <h1>项目</h1>
  <ul>
    <li v-for="project in projects">
      <nuxt-link :to="project._path">
        {{ project.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>