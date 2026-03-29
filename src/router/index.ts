import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../views/Home/Home.vue";
import About from "../views/About/About.vue";
import List from "../views/List/List.vue";
import Counter from "../views/Counter/Counter.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/list", name: "List", component: List },
  { path: "/counter", name: "Counter", component: Counter },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
