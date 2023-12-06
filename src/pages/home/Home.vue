<script setup>
import { useHead } from "@vueuse/head";
import HeroSection from "./HeroSection.vue";
import CompanySection from "./CompanySection.vue";
import ProductsSection from "./ProductsSection.vue";
import ClientsSection from "./ClientsSection.vue";
import NewsSection from "./NewsSection.vue";

useHead({
  title: "KQ :: Главная",
  meta: [
    {
      name: `description`,
      content: "this is home page",
    },
  ],
});
</script>

<template>
  <div>
    <HeroSection />
    <div
      class="flex flex-col gap-8 md:gap-12 lg:gap-20 xl:gap-28 3xl:gap-40 py-8 md:py-12 lg:py-20 xl:py-28 3xl:py-40 2xl:px-10 xl:px-8 lg:px-6 px-4"
    >
      <CompanySection />
      <ProductsSection />
      <ClientsSection />
      <NewsSection />
    </div>
  </div>
</template>
