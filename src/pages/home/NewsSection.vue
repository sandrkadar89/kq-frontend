<script setup>
defineProps(["title"]);

import NewsItem from "./NewsItem.vue";
import { newsData } from "./newsDummyData";
import { onMounted, ref, watch } from "vue";
import { RouterLink } from "vue-router";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

const glide1 = new Glide(".glide1", {
  focusAt: 0,
  gap: 24,
  perView: 3,
  rewind: false,
  breakpoints: {
    640: {
      perView: 1,
    },
    1180: {
      perView: 2,
    },
  },
});

onMounted(() => {
  glide1.mount();
});

const activeSlide = ref(0);

const nextSlide = () => {
  if (activeSlide.value < newsData.length - 1) {
    activeSlide.value++;
  }
};
const prevSlide = () => {
  if (activeSlide.value > 0) {
    activeSlide.value--;
  }
};

watch(activeSlide, (newSlide, oldSlide) => {
  // let i = newSlide;
  // if (i < 0) i = 0;
  // if (i > newsData.length - 1) i = newsData.length - 1;
  glide1.update({
    startAt: newSlide,
  });
});
</script>

<template>
  <div class="flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-10 relative">
    <router-link class="big-link mb-6 lg:mb-8 xl:mb-10 3xl:mb-12" to="/news">
      {{ title || "Новости" }}
      <i class="icon-maximize"></i>
    </router-link>
    <div class="news-header">
      <div class="news-filter">
        <button class="active">
          ВСЕ<span>{{ newsData.length }}</span>
        </button>
        <button>НОВОСТИ<span>2</span></button>
        <button>НОВОСТИ<span>2</span></button>
        <button>ВИДЕО<span>2</span></button>
      </div>
      <div class="news-buttons">
        <button @click="prevSlide()">
          <i class="icon-left text-lg"></i>
        </button>
        <button @click="nextSlide()">
          <i class="icon-right text-lg"></i>
        </button>
        <RouterLink to="/news">ВСЕ НОВОСТИ</RouterLink>
      </div>
    </div>
    <div class="glide1">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <NewsItem v-for="item in newsData" :item="item" />
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.glide {
  @apply flex flex-col-reverse;
}
</style>
