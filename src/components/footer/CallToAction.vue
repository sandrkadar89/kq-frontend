<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const show = ref(false);

router.afterEach(() => {
  if (
    router.currentRoute.value.path === "/contact" ||
    router.currentRoute.value.path === "/news"
  ) {
    show.value = false;
  } else {
    show.value = true;
  }
});
</script>

<template>
  <div
    v-if="show"
    class="relative bg-cover bg-center"
    style="background-image: url('/src/assets/images/call-to-action.jpg')"
  >
    <div
      class="w-full h-full flex flex-col items-center justify-center top-0 text-white gap-6 py-12 md:py-16 2xl:py-32"
    >
      <h2
        class="font-bold text-2xl md:text-3xl lg:text-[40px] uppercase text-center"
      >
        Обсудить сотрудничество
      </h2>
      <p class="max-w-[586px] text-center lg:text-xl 2xl:text-2xl">
        Наша продукция присутствует во многих городах РФ, в том числе
        Калининград, Владивосток, Якутск и Севастополь, а также на территории
        Республики Беларусь.
      </p>
      <button class="btn-large mt-10 lg:mt-[66px]">связаться с нами</button>
    </div>
  </div>
</template>
