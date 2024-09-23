<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script setup>
import { computed } from "vue";

import DefaultPage from "../src/Layouts/DefaultPage";
import NormalPage from "./Layouts/NormalPage.vue";

import { useRoute } from "vue-router";
const route = useRoute();

const layout = computed(() => {
  console.log(route);
  return route.meta.layout?.__name === "NormalPage" ? NormalPage : DefaultPage;
});
</script>

<style scoped></style>
