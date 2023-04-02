<script setup>
  defineProps({
    repos: Number,
    followers: Number,
    following: Number
  });
</script>

<template>
  <div class="flex justify-around h-[85px] mt-8 py-[15px] bg-blue-100 rounded-[10px] dark:bg-cyan-blue-950">
    <div>
      <p class="text-cyan-blue-800 text-xs dark:text-white">Repos</p>
      <p class="text-cyan-blue-950 text-lg dark:text-white">{{ repos }}</p>
    </div>
    <div>
      <p class="text-cyan-blue-800 text-xs dark:text-white">Followers</p>
      <p class="text-cyan-blue-950 text-lg dark:text-white">{{ followers }}</p>
    </div>
    <div>
      <p class="text-cyan-blue-800 text-xs dark:text-white">Following</p>
      <p class="text-cyan-blue-950 text-lg dark:text-white">{{ following }}</p>
    </div>
  </div>
</template>