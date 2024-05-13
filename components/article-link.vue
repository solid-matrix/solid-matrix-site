<script lang="ts" setup>
import { getArticle } from '@/article-index';

const { name } = defineProps({ name: String })
const article = getArticle(name!);

</script>
<template>
    <nuxt-link :to="'/articles/'+name">{{ article.title }}</nuxt-link>
</template>