import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import Contact from "../pages/contacts/Contact.vue";
import About from "../pages/about/About.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/about",
    component: About,
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
