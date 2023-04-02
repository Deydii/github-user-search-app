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
  <main v-if="!store.loading && store.result" class="w-full h-[517px] md:h-[481px] lg:h-[444px] mt-6 p-4 min-[375px]:px-5 min-[425px]:px-6 md:px-10 lg:px-12 rounded-2xl bg-white dark:bg-blue-900">
    <div class="mt-8 md:mt-10 lg:mt-12">
      <img 
        class="float-left w-[70px] h-[70px] md:w-[117px] md:h-[117px] rounded-full"
        :src="store.result.avatar"
        :alt="`${store.result.name} avatar`"
      />
    </div>
    <div class="relative mt-8 md:mt-[52px] lg:mt-11 lg:ml-40">
      <div class="ml-24 md:ml-40 lg:ml-0">
        <h1 class="text-cyan-blue-950 text-base md:text-xl capitalize dark:text-white">{{ store.result.name ? store.result.name : store.result.login }}</h1>
        <p class="text-xs md:text-base text-cyan-blue-500">@{{ store.result.login }}</p>
        <p class="lg:absolute top-2 right-0 text-cyan-blue-800 text-xs md:text-sm dark:text-white">Joined {{ store.result.created_at }}</p>
      </div>
      <p 
        class="mt-8 md:mt-[38px] lg:mt-5 text-cyan-blue-800 text-xs md:text-sm dark:text-white"
        v-if="store.result.bio"
      >
        {{ store.result.bio }}
      </p>
      <p 
        class="mt-8 md:mt-[38px] lg:mt-5 text-cyan-blue-800 text-xs md:text-sm dark:text-white"
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