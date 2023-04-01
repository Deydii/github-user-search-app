<script setup>
  defineProps({
    repos: Number,
    followers: Number,
    following: Number
  });
</script>

<template>
  <div class="flex justify-around h-[85px] mt-8 py-[15px]  bg-blue-100 rounded-[10px] dark:text-white">
    <div>
      <p class="text-cyan-blue-800 text-xs">Repos</p>
      <p class="text-cyan-blue-950 text-lg">{{ repos }}</p>
    </div>
    <div>
      <p class="text-cyan-blue-800 text-xs">Followers</p>
      <p class="text-cyan-blue-950 text-lg">{{ followers }}</p>
    </div>
    <div>
      <p class="text-cyan-blue-800 text-xs">Following</p>
      <p class="text-cyan-blue-950 text-lg">{{ following }}</p>
    </div>
  </div>
</template>