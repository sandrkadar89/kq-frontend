<script setup>
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import { useHead } from "@vueuse/head";
import History from "./History.vue";
import AboutDetails from "./AboutDetails.vue";
import Slide from "./Slide.vue";
import TopProducts from "./TopProducts.vue";

useHead({
  title: "KQ Pumps :: О компании",
  meta: [
    {
      name: `description`,
      content: "this is about page",
    },
  ],
});
</script>

<template>
  <div class="2xl:px-10 xl:px-8 lg:px-6 px-4">
    <Breadcrumbs current="О компании" />
    <h1>О компании</h1>
    <History />
    <AboutDetails />
    <Slide />
    <TopProducts />
  </div>
</template>
