<script setup>
  import SummaryCard from './SummaryCard.vue';
  import LinksCard from './LinksCard.vue';
</script>

<template>
  <main class="w-full h-[444px] mt-6 p-12 rounded-2xl bg-white">
    <img 
      class="float-left w-[117px] h-[117px] rounded-full"
      src="https://avatars.githubusercontent.com/u/583231?v=4"
      alt="user avatar"
    />
    <div class="relative ml-40">
      <h1 class="text-cyan-blue-950 text-xl dark:text-white">The Octocat</h1>
      <p class="absolute top-2 right-0 text-cyan-blue-800 text-sm dark:text-white">Joined 25 Jan 2011</p>
      <p class="text-base text-cyan-blue-500">@octocat</p>
      <p class="mt-5 text-cyan-blue-800 text-sm dark:text-white">This profile has no bio</p>
      <SummaryCard />
      <LinksCard />
    </div>
  </main>
</template>