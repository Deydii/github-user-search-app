<script setup>
  import HeaderApp from './components/HeaderApp.vue';
  import SearchBar from './components/SearchBar.vue';
  import ResultCard from './components/ResultCard.vue';
</script> 

<template>
  <div class="flex flex-col md:min-h-screen md:px-[98px] md:pb-56 lg:px-[355px] lg:pb-0 lg:h-screen items-center bg-blue-100 dark:bg-cyan-blue-950">
    <HeaderApp />
    <SearchBar />
    <ResultCard />
  </div>
</template>

<style scoped>
</style>
