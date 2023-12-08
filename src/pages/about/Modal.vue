<script setup>
defineEmits(["closeModal"]);
defineProps(["item", "index"]);
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-[2000] flex items-center justify-center p-4"
    @click="$emit('closeModal')"
  >
    <div class="max-w-5xl bg-white py-14 relative shadow-xl rounded">
      <button @click="$emit('closeModal')" class="absolute top-0 right-1 p-2">
        <i class="icon-close text-3xl"></i>
      </button>
      <img :src="item.image" alt="" class="w-full" />
      <div
        class="mt-4 xl:mt-6 px-4 xl:px-8 3xl:px-10 flex flex-col gap-6 lg:gap-8 3xl:gap-12"
      >
        <h3
          class="font-bold text-xl lg:text-3xl 2xl:text-[40px] uppercase leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight"
        >
          {{ item.title }}
        </h3>
        <p class="text-lg lg:text-xl 2xl:text-2xl font-bold" v-if="index !== 4">
          {{ item.short }}
        </p>
        <p class="text-lg lg:text-xl 2xl:text-2xl">{{ item.full }}</p>
        <button
          class="btn self-start bg-primary text-white"
          @click="$emit('closeModal')"
        >
          Закрыть
        </button>
      </div>
    </div>
  </div>
</template>
