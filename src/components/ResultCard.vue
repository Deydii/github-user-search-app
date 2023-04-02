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
  <div class="text-cyan-blue-950 text-lg dark:text-white" v-if="store.loading">Loading...</div>
  <main v-if="!store.loading && store.result" class="w-full h-[517px] mt-6 p-4 rounded-2xl bg-white min-[375px]:px-5 min-[425px]:px-6 md:h-[481px] md:px-10 lg:h-[444px] lg:px-12 dark:bg-blue-900">
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