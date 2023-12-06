<script setup></script>

<template>
  <div class="flex flex-col gap-8 md:gap-12 lg:gap-20 xl:gap-28 3xl:gap-40">
    <div class="flex justify-between items-center">
      <img src="/images/home/company-1.jpg" alt="" />
      <div
        class="grow max-w-[708px] flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10 3xl:gap-12 x-80"
      >
        <router-link class="big-link" to="/about">
          Компания
          <i class="icon-maximize"></i>
        </router-link>
        <p class="text-lg xl:text-xl 3xl:text-2xl uppercase">
          Концерн «SHANGHAI KAIQUAN PUMP (GROUP)» был основан в 1995 году и
          является крупной насосной компанией с капиталом в 4,5 млрд юаней,
          объединяющей разработку, производство, продажу и сервисное
          обслуживание насосного оборудования для водоснабжения, водоотведения и
          других отраслей промышленности
        </p>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div
        class="grow flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10 3xl:gap-12 x-80 items-start pl-6 md:pl-8 lg:pl-12 xl:pl-24 2xl:pl-32 3xl:pl-60"
      >
        <p class="text-lg xl:text-xl 3xl:text-2xl uppercase max-w-[597px]">
          Компания владеет
          <span class="text-secondary font-bold"
            >7 предприятиями в 5 промышленных зонах</span
          >
          в провинциях и городах Шанхай, Чжэцзян, Хэфей, Шицзячжуан и Шэньян
        </p>
        <router-link class="btn-large inline-flex" to="/about">
          подробнее о компании
        </router-link>
      </div>
      <div class="w-full max-w-[708px] relative">
        <img src="/images/home/company-2.jpg" alt="" />
        <img
          src="../../assets/images/lines-green.png"
          alt=""
          class="absolute bottom-16 -right-20"
        />
      </div>
    </div>
  </div>
</template>
