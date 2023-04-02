<script setup>
  import { store } from '../store/store';
</script>

<template>
  <form 
    class="w-full h-[69px] flex items-center bg-white rounded-2xl dark:bg-blue-900"
    @submit.prevent="store.loadData(store.inputValue)"
  >
    <svg class="ml-2 min-[375px]:ml-4 md:ml-8 h-5 w-[20.5px] md:h-6 md:w-[25px]" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" fill="#0079ff"/>
    </svg>
    <div class="relative sm:w-[60%] lg:w-9/12 ml-2 md:ml-6">
      <input
        class=" w-full cursor-pointer	placeholder:text-[12px] min-[425px]:text-xs md:text-base lg:text-[18px] text-cyan-blue-950 min-[425px]:placeholder:text-xs md:placeholder:text-base lg:placeholder:text-[18px] placeholder:text-cyan-blue-800 focus:outline-none caret-cyan-blue-500 dark:text-white dark:placeholder:text-white dark:bg-blue-900" 
        placeholder="Search Github username..."
        v-model="store.inputValue"
        required
      />
      <p class="absolute max-[767px]:left-0 top-5 md:top-0 lg:top-1 md:right-0 text-red-500 text-xs md:text-sm font-bold">{{ store.isError ? "No results" : "" }}</p>
    </div>
    <button
      type="submit"
      class="hidden sm:block bg-cyan-blue-500 w-14 h-8 sm:w-[84px] sm:h-[46px] min-[375px]:px-4 min-[375px]:py-3 md:ml-6 md:px-6 md:w-[106px] md:h-[50px] rounded-[10px] text-[12px] min-[375px]:text-xs md:text-base text-white font-bold hover:opacity-70"
    >
      Search
    </button>
  </form>
</template>