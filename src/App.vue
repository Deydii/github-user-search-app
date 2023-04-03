<script setup lang="ts">
  import HeaderApp from './components/HeaderApp.vue';
  import SearchBar from './components/SearchBar.vue';
  import ResultCard from './components/ResultCard.vue';
</script> 

<template>
  <div class="flex flex-col min-h-screen px-6 pb-20 items-center bg-blue-100 md:px-[98px] md:pb-56 lg:px-[355px] lg:pb-44 3xl:px-[600px] dark:bg-cyan-blue-950">
    <HeaderApp />
    <SearchBar />
    <ResultCard />
  </div>
</template>

<style scoped>
</style>
