<script setup>
  import HeaderApp from './components/HeaderApp.vue';
  import SearchBar from './components/SearchBar.vue';
  import ResultCard from './components/ResultCard.vue';
</script> 

<template>
  <div class="h-screen flex flex-col px-[355px] items-center bg-blue-100 dark:bg-cyan-blue-950">
    <HeaderApp />
    <SearchBar />
    <ResultCard />
  </div>
</template>

<style scoped>
</style>
