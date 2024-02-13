<script lang="ts" setup>
import { getArticle } from '@/article-index';

const { name } = defineProps({ name: String })
const article = getArticle(name!);
</script>
<template>
    <router-link :to="{ name: 'article', params: { name } }">{{ article.title }}</router-link>
</template>