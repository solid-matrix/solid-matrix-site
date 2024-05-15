<script setup lang="ts">
useHead({
  titleTemplate: (productCategory) => {
    return productCategory
      ? `${productCategory} | SolidMatrix`
      : 'SolidMatrix'
  }
})
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
