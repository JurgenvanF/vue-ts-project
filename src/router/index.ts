import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../views/Home/Home.vue";
import About from "../views/About/About.vue";
import List from "../views/List/List.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/list", name: "List", component: List },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
