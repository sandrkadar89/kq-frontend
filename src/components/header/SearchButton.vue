<script setup>
defineEmits(["toggle"]);
</script>

<template>
  <button
    @click="$emit('toggle')"
    class="px-1 md:px-4 xl:px-5 3xl:px-6 border border-shade-300 border-t-0 border-r-shade-900 hover:text-primary"
  >
    <i class="icon-search w-10 h-10 flex items-center justify-center"></i>
  </button>
</template>
