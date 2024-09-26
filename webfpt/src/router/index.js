import { createRouter, createWebHistory } from "vue-router";
import DefaultPage from "@/Layouts/DefaultPage.vue";
import NormalPage from "@/Layouts/NormalPage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../View/HomePage.vue"),
    meta: { layout: DefaultPage },
  },
  {
    path: "/iphone16",
    name: "Category",
    component: () => import("../View/ProductPage.vue"),
    meta: { layout: DefaultPage },
  },
  {
    path: "/admin",
    name: "Management",
    component: () => import("../View/Management .vue"),
    meta: { layout: DefaultPage },
  },
  {
    path: "/cms",
    name: "CMS",
    component: () => import("../View/CMSPage.vue"),
    meta: { layout: NormalPage },
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("../View/Category.vue"),
    meta: { layout: NormalPage },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
