<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import SummaryCard from './SummaryCard.vue';
  import LinksCard from './LinksCard.vue';

  const loading = ref(false);
  const result = ref([]);
  const isError = ref(false);

  async function loadData () {
   loading.value = true;
   await axios.get("https://api.github.com/users/octocat", {
    headers: {
      Authorization: "`Bearer ${process.env.TOKEN_API}`"
    }
   })
    .then(({ data }) => {
      const date = new Date(data.created_at).toString().split(" ");
      const newDateFormat = [date[2], date[1], date[3]];

      result.value = {
        avatar: data.avatar_url,
        name: data.name,
        login: data.login,
        created_at: newDateFormat.join(" "),
        bio: data.bio,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        type: data.type,
        location: data.location,
        twitter: data.twitter_username,
        blog: data.blog,
        company: data.company
      }
    })
    .catch(() => {
      isError.value = true
    })
    .finally(() => loading.value = false)
  };

  onMounted(() => {
    loadData();
  });

</script>

<template>
  <main class="w-full h-[444px] mt-6 p-12 rounded-2xl bg-white">
    <img 
      class="float-left w-[117px] h-[117px] rounded-full"
      :src="result.avatar"
      :alt="`${result.name} avatar`"
    />
    <div class="relative ml-40">
      <h1 class="text-cyan-blue-950 text-xl dark:text-white">{{ result.name }}</h1>
      <p class="absolute top-2 right-0 text-cyan-blue-800 text-sm dark:text-white">Joined {{ result.created_at }}</p>
      <p class="text-base text-cyan-blue-500">@{{ result.login }}</p>
      <p 
        class="mt-5 text-cyan-blue-800 text-sm dark:text-white"
        v-if="result.bio"
      >
        {{ result.bio }}
      </p>
      <p 
        class="mt-5 text-cyan-blue-800 text-sm dark:text-white"
        v-else
      >
        This profile has no bio
      </p>
      <SummaryCard />
      <LinksCard />
    </div>
  </main>
</template>