import { createRouter, createWebHashHistory } from "vue-router";

import Home from "%/Home.vue";
import About from "%/About.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/about",
    component: About,
    name: "About",
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
