<script setup></script>

<template>
  <div class="mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
    <h2 class="line">ТОПОВЫЕ ПРОДУКТЫ</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <div class="relative">
        <img class="mx-auto" src="/images/about/top1.png" alt="" />
        <h4
          class="text-xl lg:text-2xl 2xl:text-[32px] font-bold absolute bottom-14 w-full text-center"
        >
          KQH
        </h4>
      </div>
      <div class="relative">
        <img class="mx-auto" src="/images/about/top2.png" alt="" />
        <h4
          class="text-xl lg:text-2xl 2xl:text-[32px] font-bold absolute bottom-14 w-full text-center"
        >
          KQWH
        </h4>
      </div>
      <div class="relative">
        <img class="mx-auto" src="/images/about/top3.png" alt="" />
        <h4
          class="text-xl lg:text-2xl 2xl:text-[32px] font-bold absolute bottom-14 w-full text-center"
        >
          KQDS
        </h4>
      </div>
      <div class="relative">
        <img class="mx-auto" src="/images/about/top4.png" alt="" />
        <h4
          class="text-xl lg:text-2xl 2xl:text-[32px] font-bold absolute bottom-14 w-full text-center"
        >
          KQDS
        </h4>
      </div>
    </div>
    <div class="flex justify-center">
      <router-link to="/" class="btn-large mt-10 mx-auto">
        смотреть все продукты
      </router-link>
    </div>
  </div>
</template>
