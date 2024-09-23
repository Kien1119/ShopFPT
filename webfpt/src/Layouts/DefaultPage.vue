2
<template>
  <div class="default-layout">
    <HeaderComponent />
    <!-- Phần đầu trang -->
    <main>
      <router-view />
      <!-- Nội dung của các trang con sẽ được hiển thị ở đây -->
    </main>
    <!-- <FooterComponent /> -->
    <!-- Phần chân trang -->

    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue"; // Header cho trang
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
