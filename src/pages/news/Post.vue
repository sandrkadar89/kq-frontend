<script setup>
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import NewsSection from "../home/NewsSection.vue";
import PostSlider from "./PostSlider.vue";
</script>

<template>
  <div class="2xl:px-10 xl:px-8 lg:px-6 px-4">
    <Breadcrumbs
      :current="[
        {
          title: 'Новости',
          url: '/news',
        },
        {
          title: 'Участие в 1-м Петербургском...',
        },
      ]"
    />
    <div
      class="flex flex-col xl:flex-row gap-4 md:gap-6 xl:gap-10 2xl:gap-32 3xl:gap-60 items-start"
    >
      <router-link
        to="/news"
        class="flex gap-4 xl:gap-6 whitespace-nowrap items-center text-2xl"
      >
        <img src="../../assets/icons/left.png" alt="" />
        К НОВОСТЯМ
      </router-link>
      <h2 class="max-w-[908px]">
        Участие в 1-м Петербургском профессиональном семинаре для проектировщиков
      </h2>
    </div>
    <div
      class="my-4 md:my-6 lg:my-8 xl:my-10 3xl:my-12 flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 3xl:gap-12"
    >
      <img src="/images/news/post-full.jpg" class="w-full" alt="" />
      <div
        class="flex flex-col gap-3 lg:gap-4 2xl:gap-6 max-w-[908px] mx-auto lg:text-xl"
      >
        <p>
          5 декабря 2023 года наши коллеги Дмитрий Назаров и Андрей Паламарчук поучаствовали 
          в масштабном мероприятии – 1-м Петербургском профессиональном семинаре для проектировщиков, 
          который состоялся в музее “Вселенная Воды” при поддержке ГК “WESER” и партнёров. 
        </p>
        <p>
          Для нас показалась интересной возможность выступить с докладами перед аудиторией совместно 
          с коллегами из таких известных и профессиональных компаний как WESER и Rubooster. 
        </p>
        <p>
          В рамках делового выступления региональный директор Дмитрий Назаров представил общую 
          корпоративную презентацию о китайском концерне Kaiquan, рассказал об этапах её развития, 
          мощностях производства и амбициозных планах, в том числе на рынке РФ.
        </p>
        <p>
          Андрей Паламарчук ознакомил присутствующих с ассортиментом продукции и выделил преимущества 
          и уникальных технические характеристики насосного оборудования для различных областей применения.
        </p>
        <p>
          Семинар оказался весьма продуктивным, т.к. наряду с представленными докладами нашим коллегам удалось 
          обсудить планы и перспективы на следующий год и партнёрство с представителями компаний WESER и Rubooster.
        </p>
         <p>
          На площадке семинара была организована выставка инженерного оборудования. После деловой программы все 
          участники были приглашены посетить здание водонапорной башни, где состоялся обед с видом на Санкт-Петербург и экскурсии.
        </p>
      </div>
      <img src="/images/news/banner.jpg" alt="" class="mx-auto" />
    </div>
    <PostSlider />
    <NewsSection title="Другие новости" />
  </div>
</template>
