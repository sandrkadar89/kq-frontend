<script setup></script>

<template>
  <div class="flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-10 relative">
    <img
      src="../../assets/images/lines-black.png"
      alt=""
      class="absolute right-0 lg:-top-10 max-w-[30%]"
    />
    <router-link class="big-link" to="/about">
      клиенты
      <i class="icon-maximize"></i>
    </router-link>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 border bg-shade-900 gap-0.5 p-0.5"
    >
      <div
        class="bg-white aspect-square flex items-center justify-center"
        v-for="n in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
      >
        <img :src="`/images/home/logo-${n}.png`" alt="" />
      </div>
    </div>
  </div>
</template>
