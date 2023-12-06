<script setup>
defineEmits(["toggle"]);
</script>

<template>
  <button
    @click="$emit('toggle')"
    class="px-1 md:px-4 xl:px-5 3xl:px-6 hover:text-primary 2xl:hidden ml-auto"
  >
    <i class="icon-menu w-10 h-10 flex items-center justify-center"></i>
  </button>
</template>
