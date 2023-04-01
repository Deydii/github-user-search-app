<script setup>
  import { onMounted } from 'vue';
  import { store } from '../store/store';
  import SummaryCard from './SummaryCard.vue';
  import LinksCard from './LinksCard.vue';

  onMounted(() => {
    store.loadData("octocat");
  });

</script>

<template>
  <div v-if="store.loading">Loading...</div>
  <main v-else class="w-full h-[444px] mt-6 p-12 rounded-2xl bg-white">
    <img 
      class="float-left w-[117px] h-[117px] rounded-full"
      :src="store.result.avatar"
      :alt="`${store.result.name} avatar`"
    />
    <div class="relative ml-40">
      <h1 class="text-cyan-blue-950 text-xl capitalize dark:text-white">{{ store.result.name ? store.result.name : store.result.login }}</h1>
      <p class="absolute top-2 right-0 text-cyan-blue-800 text-sm dark:text-white">Joined {{ store.result.created_at }}</p>
      <p class="text-base text-cyan-blue-500">@{{ store.result.login }}</p>
      <p 
        class="mt-5 text-cyan-blue-800 text-sm dark:text-white"
        v-if="store.result.bio"
      >
        {{ store.result.bio }}
      </p>
      <p 
        class="mt-5 text-cyan-blue-800 text-sm dark:text-white"
        v-else
      >
        This profile has no bio
      </p>
      <SummaryCard 
        :repos="store.result.repos"
        :followers="store.result.followers"
        :following="store.result.following"
      />
      <LinksCard 
        :location="store.result.location"
        :twitter="store.result.twitter"
        :blog="store.result.blog"
        :company="store.result.company"
      />
    </div>
  </main>
</template>