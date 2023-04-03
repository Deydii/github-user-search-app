<script setup lang="ts">
  import { onMounted } from 'vue';
  import { store } from '../store/store';
  import SummaryCard from './SummaryCard.vue';
  import LinksCard from './LinksCard.vue';

  onMounted(() => {
    store.loadData("octocat");
  });

</script>

<template>
  <div class="flex items-center mt-5 text-cyan-blue-800 text-base lg:text-lg dark:text-white" v-if="store.loading">
    <svg class="animate-spin mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path class="fill-cyan-blue-800 dark:fill-white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Loading...
 </div>
  <main v-if="!store.loading && store.result" class="w-full min-h-[517px] mt-6 px-4 pb-10 rounded-2xl bg-white min-[375px]:px-5 min-[425px]:px-6 md:min-h-[481px] md:px-10 lg:min-h-[444px] lg:px-12 lg:pb-12 dark:bg-blue-900">
    <div class="mt-8 md:mt-10 lg:mt-12">
      <img 
        class="float-left w-[70px] h-[70px] rounded-full md:w-[117px] md:h-[117px]"
        :src="store.result.avatar"
        :alt="`${store.result.name} avatar`"
      />
    </div>
    <div class="relative mt-8 md:mt-[52px] lg:mt-11 lg:ml-40">
      <div class="ml-24 md:ml-40 lg:ml-0">
        <h1 class="text-cyan-blue-950 text-base capitalize md:text-xl dark:text-white">{{ store.result.name ? store.result.name : store.result.login }}</h1>
        <p class="text-xs  text-cyan-blue-500 md:text-base">@{{ store.result.login }}</p>
        <p class="top-2 right-0 text-cyan-blue-800 text-xs md:text-sm lg:absolute dark:text-white">Joined {{ store.result.created_at }}</p>
      </div>
      <p 
        class="mt-8 text-cyan-blue-800 text-xs md:text-sm md:mt-[38px] lg:mt-5 dark:text-white"
        v-if="store.result.bio"
      >
        {{ store.result.bio }}
      </p>
      <p 
        class="mt-8 text-cyan-blue-800 text-xs md:text-sm md:mt-[38px] lg:mt-5 dark:text-white"
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