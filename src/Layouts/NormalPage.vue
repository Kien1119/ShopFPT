<template>
  <div class="App">
    <!-- <div> -->
    <!-- <slot></slot> -->
    <router-view />
    <!-- </div> -->
    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<style scoped>

</style>
