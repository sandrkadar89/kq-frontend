<script setup>
import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";
import CallToAction from "./components/footer/CallToAction.vue";
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";

const metaData = reactive({
  title: "KQ",
  description: "KQ description",
});

useHead({
  title: computed(() => metaData.title),
  meta: [
    {
      name: "description",
      content: computed(() => metaData.description),
    },
  ],
});
</script>

<template>
  <div class="container text-shade-900 overflow-x-hidden">
    <Header />
    <router-view></router-view>
    <CallToAction />
    <Footer />
  </div>
</template>
