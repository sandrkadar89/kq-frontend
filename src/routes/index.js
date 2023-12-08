import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import Contact from "../pages/contacts/Contact.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/contact",
    component: Contact,
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
