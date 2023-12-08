<script setup>
defineProps(["current"]);
</script>

<template>
  <div
    class="flex gap-2 xl:gap-3 my-6 lg:my-8 2xl:my-10 items-center uppercase"
  >
    <router-link to="/"> Главная </router-link>
    <i class="icon-right text-[10px]"></i>
    <a href="!#" class="text-primary"> {{ current }} </a>
  </div>
</template>
