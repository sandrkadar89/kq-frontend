<script setup>
const cities = [
  {
    name: "МИНСК",
    person: "Афанасьев Павел",
    phone: "8(495)183-88-83 доб. 122",
    email: "p.afanasiev@kaiquan.com.cn",
  },
  {
    name: "Санкт-Петербург",
    person: "Паламарчук Андрей",
    phone: "8(495)183-88-83 доб. 113",
    email: "a.palamarchuk@kaiquan.com.cn",
  },
  {
    name: "Воронеж",
    person: "Ханина Ольга",
    phone: "8(495)183-88-83 доб. 116",
    email: "o.hanina@kaiquan.com.cn",
  },
  {
    name: "Ярославль",
    person: "Багранов Михаил",
    phone: "8(495)183-88-83 доб. 109",
    email: "m.bagranovo@kaiquan.com.cn",
  },
  {
    name: "Краснодар",
    person: "Крюков Денис",
    phone: "8(495)183-88-83 доб. 111",
    email: "d.krukov@kaiquan.com.cn",
  },
  {
    name: "Курск",
    person: "Попков Вадим",
    phone: "8(495)183-88-83 доб. 115",
    email: "v.popkov@kaiquan.com.cn",
  },
  {
    name: "Пермь",
    person: "Пепеляев Александр",
    phone: "8(495)183-88-83 доб. 105",
    email: "a.pepelyaev@kaiquan.com.cn",
  },
  {
    name: "Екатеринбург",
    person: "Катаева Елена",
    phone: "8(495)183-88-83 доб. 110",
    email: "e.kataeva@kaiquan.com.cn",
  },
  {
    name: "Новосибирск",
    person: "Серяк Иван",
    phone: "8(495)183-88-83 доб. 120",
    email: "i.seryak@kaiquan.com.cn",
  },
  {
    name: "Казань",
    person: "Стрелков Михаил",
    phone: "8(495)183-88-83 доб. 121",
    email: "m.strelkov@kaiquan.com.cn",
  },
];
</script>

<template>
  <div class="mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
    <h2 class="line">ПРЕДСТАВИТЕЛЬСТВА В РФ И РБ</h2>
    <div class="-mx-4 lg:-mx-6 xl:-mx-8 2xl:-mx-10">
      <img src="/images/contact/map.jpg" alt="" />
    </div>
    <div class="my-8 lg:my-10 xl:my-12 3xl:my-14">
      <div v-for="item in cities">
        <div
          class="flex 3xl:gap-32 2xl:gap-24 xl:gap-20 lg:gap-16 md:gap-12 gap-4 flex-col md:flex-row"
        >
          <h3 class="w-[340px] text-2xl lg:text-3xl uppercase font-bold">
            {{ item.name }}
          </h3>
          <div class="text-sm text-shade-300 font-medium">
            <h4
              class="uppercase font-normal text-shade-900 text-base mb-2 lg:mb-3 2xl:mb-4"
            >
              {{ item.person }}
            </h4>
            <p>
              {{ item.phone }}
            </p>
            <p>
              {{ item.email }}
            </p>
          </div>
        </div>
        <div class="h-px bg-shade-900 my-4 lg:my-6 2xl:my-8"></div>
      </div>
    </div>
  </div>
</template>
