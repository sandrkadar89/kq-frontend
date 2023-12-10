import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import Contact from "../pages/contacts/Contact.vue";
import About from "../pages/about/About.vue";
import News from "../pages/news/News.vue";
import Post from "../pages/news/Post.vue";

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
  {
    path: "/news",
    component: News,
  },
  {
    path: "/news/:page",
    component: News,
  },
  {
    path: "/post/:id",
    component: Post,
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
