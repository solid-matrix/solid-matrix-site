<script setup lang="ts">
import { defineAsyncComponent, ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getArticle } from '@/article-index'

const route = useRoute()
const name = ref(route.params.name as string)

const article = computed(() => getArticle(name.value))
const articleComponent = computed(() => defineAsyncComponent(article.value.component))

watch(() => route.params.name, (newName) => name.value = newName as string)


</script>

<template>
    <h1>{{ article.title }}</h1>
    <article>
        <article-component />
    </article>
</template>

<style scoped lang="scss"></style>