<template>
  <div class="cardCategory">
    <Carousel
      :value="categorys"
      :numVisible="5"
      :numScroll="1"
      :showIndicators="false"
      :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
        <CardProduct :slotProps="slotProps" />
      </template>
    </Carousel>
  </div>
</template>
<script setup>
import { ref } from "vue";
import CardProduct from "./CardProduct.vue";
import { defineProps } from "vue";
import { useProductStore } from "@/stores/index"; // Import store
const productStore = useProductStore();
defineProps({
  categorys: {
    type: Array,
  },
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
.cardCategory {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  display: block;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.disCart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.disCart:hover {
  border-radius: 20px;
  border: 0.1px solid #ccc;
}
.imgCategorry {
  height: 200px;
  width: 80%;
  object-fit: contain;
}
.textCard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 30px;
}
.contentCart {
  display: flex;
  flex-direction: column;
}

hr {
  border: none;
  border-top: 1px solid #000; /* Màu của dòng kẻ */
  margin: 10px 0; /* Khoảng cách giữa dòng kẻ và các div */
}

.bankHover {
  display: flex;
  position: relative;
  gap: 20px;
  height: 100px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-around;
  align-items: center;
}

.bankItem {
  text-align: center;
  cursor: pointer;
}

.bankItem img {
  width: 50px;
  height: auto;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.bankItem img:hover {
  border: 2px solid #000;
}

.bankItem p {
  display: none;
  position: absolute;
  left: 0;

  color: rgba(0, 0, 0, 0.7);
}

.bankItem:hover > p {
  display: block;
}
.cardCategory .p-carousel-item {
  flex: 1 0 20%; /* Mỗi mục chiếm 20% chiều rộng */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0;

  box-sizing: border-box;
}

.cardCategory .p-carousel-item img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
