<script setup>
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import { useHead } from "@vueuse/head";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import NewsItem from "./NewsItem.vue";
import Pagination from "./Pagination.vue";
import { newsData } from "./newsDummyData";

useHead({
  title: "KQ Pumps :: Новости",
  meta: [
    {
      name: `description`,
      content: "this is news page",
    },
  ],
});

const route = useRoute();
const router = useRouter();

const activeType = ref(0);
const activePage = ref(route.params.page ? +route.params.page : 1);

const changePage = (num) => (activePage.value = num);

router.afterEach(() => {
  activePage.value = route.params.page;
  console.log(route.params.page);
});
</script>

<template>
  <div class="2xl:px-10 xl:px-8 lg:px-6 px-4">
    <Breadcrumbs current="Новости" />

    <h1>Новости</h1>
    <div
      class="flex flex-col 2xl:flex-row gap-4 xl:gap-6 mb-4 lg:mb-6 xl:mb-10 2xl:mb-16 3xl:mb-20"
    >
      <div
        class="flex flex-col 2xl:flex-row gap-4 md:gap-6 xl:gap-10 2xl:gap-14 3xl:gap-24"
      >
        <div class="news-types 3xl:grow 3xl:w-80 3xl:shrink-0">
          <button :class="{ active: activeType === 0 }" @click="activeType = 0">
            ВСЕ
          </button>
          <button :class="{ active: activeType === 1 }" @click="activeType = 1">
            НОВОСТИ
          </button>
          <button :class="{ active: activeType === 2 }" @click="activeType = 2">
            ПУБЛИКАЦИИ
          </button>
          <button :class="{ active: activeType === 3 }" @click="activeType = 2">
            ВИДЕО
          </button>
        </div>
        <div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6"
          >
            <NewsItem v-for="(item, index) in newsData" :item="item" />
          </div>
          /*
          <Pagination
            :key="$route.path"
            :current="activePage"
            :total="10"
            :changePage="changePage"
          />
          */
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.news-types {
  @apply flex gap-6 2xl:flex-col;
}
.news-types button {
  @apply text-lg lg:text-xl 2xl:text-2xl font-bold text-shade-200 flex whitespace-nowrap;
}
.news-types button.active {
  @apply text-lg lg:text-xl 2xl:text-2xl font-bold text-shade-900 flex;
}
</style>
