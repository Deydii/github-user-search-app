<script setup lang="ts">
  defineProps({
    repos: { type: Number, required: true },
    followers: { type: Number, required: true },
    following: { type: Number, required: true }
  });
</script>

<template>
  <div class="flex justify-center space-x-6 mt-8 py-[15px] bg-blue-100 rounded-[10px] max-[320px]:space-x-4 md:justify-around md:space-x-0 h-[85px] dark:bg-cyan-blue-950">
    <div>
      <p class="text-cyan-blue-800 text-xs dark:text-white">Repos</p>
      <p class="text-cyan-blue-950 text-center text-base font-bold md:text-lg md:text-left dark:text-white">{{ repos }}</p>
    </div>
    <div>
      <p class="text-cyan-blue-800 text-xs dark:text-white">Followers</p>
      <p class="text-cyan-blue-950 text-center text-base font-bold md:text-lg md:text-left dark:text-white">{{ followers }}</p>
    </div>
    <div>
      <p class="text-cyan-blue-800 text-xs dark:text-white">Following</p>
      <p class="text-cyan-blue-950 text-center text-base font-bold md:text-lg md:text-left dark:text-white">{{ following }}</p>
    </div>
  </div>
</template>