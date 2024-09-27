<template>
  <div class="sectionProduct">
    <Carousel
      :value="section"
      :numVisible="1"
      :numScroll="1"
      :showIndicators="false"
      :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
        <img :src="slotProps.data" alt="" />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
// eslint-disable-next-line no-undef
defineProps({
  section: Object,
});
const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>
<style lang="css" scoped>
img {
  width: 100%;
  object-fit: contain;
  height: 559px;
}
</style>
