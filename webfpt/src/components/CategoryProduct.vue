<template>
  <div class="CategoryProduct">
    <Carousel
      :value="productTitles"
      :numVisible="5"
      :numScroll="1"
      :showIndicators="false"
      style="width: 100%"
      :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
        <ProductTitle :slotProps="slotProps"></ProductTitle>
      </template>

      <!-- <div class="MoreProduct">
      <a href="#" style="text-decoration: none; color: black">
        <h3>Tivi</h3>
        <img src="../assets/tivi.png" alt="Error img" />
      </a>
    </div> -->

      <!-- <div class="itemInclude">
      <div class="itemlager">
        <a href="#">
          <h3>Máy lạnh - Điều hòa</h3>
          <img src="../assets/dieuhoa.png" alt="Error img" />
        </a>
      </div>
      <div class="itemSmall">
        <a href="">
          <h3>Robot hút bụi</h3>
          <img src="../assets/robot.png" alt="Error img"
          /></a>
        </div>
      </div> -->
    </Carousel>
  </div>
</template>
<script setup>
import { ref } from "vue";
const responsiveOptions = ref([
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);
import ProductTitle from "./ProductTitle";
const productTitles = [
  {
    isColumn: true,
    items: [
      {
        title: "Laptop",
        img: require("../assets/laptop_cate_thumb_f8bef6898b.png"),
      },
    ],
  },
  {
    isColumn: false,
    items: [
      {
        title: "Dien thoai",
        img: require("../assets/dienthoai.png"),
      },

      {
        title: "Dien thoai 2",
        img: require("../assets/dienthoai.png"),
      },
    ],
  },
  {
    items: [
      {
        title: "May tinh",
        img: require("../assets/maytin1.jpg"),
      },
    ],
    isColumn: true,
  },
  {
    isColumn: false,
    items: [
      {
        title: "Dong ho",
        img: require("../assets/dongho.png"),
      },
      {
        title: "Phu kien",
        img: require("../assets/phukien.png"),
      },
    ],
  },

  {
    isColumn: true,
    items: [
      {
        title: "Ti vi",
        img: require("../assets/tivi.png"),
      },
    ],
  },
  {
    isColumn: false,
    items: [
      {
        title: "May lanh - Dieu Hoa",
        img: require("../assets/dieuhoa.png"),
      },
      {
        title: "Robot hu bui",
        img: require("../assets/robot.png"),
      },
    ],
  },
  {
    isColumn: false,
    items: [
      {
        title: "Sim FPT",
        img: require("../assets/sim.png"),
      },
      {
        title: "PC lắp ráp",
        img: require("../assets/caymaytinh.png"),
      },
    ],
  },
  {
    isColumn: false,
    items: [
      {
        title: "Màn hình",
        img: require("../assets/manhinhpc.png"),
      },
      {
        title: "Linh kiện",
        img: require("../assets/linhkien.png"),
      },
    ],
  },
  {
    isColumn: false,
    items: [
      {
        title: "Máy Giặt",
        img: require("../assets/maygiat.png"),
      },
      {
        title: "Tủ Lạnh",
        img: require("../assets/tulanh.png"),
      },
    ],
  },
  {
    isColumn: false,
    items: [
      {
        title: "Máy lọc nước",
        img: require("../assets/maylocnuoc.png"),
      },
      {
        title: "Quạt điều hòa",
        img: require("../assets/quathoinuoc.png"),
      },
    ],
  },
  {
    isColumn: false,
    items: [
      {
        title: "Diện gia dụng ",
        img: require("../assets/amsieutoc.png"),
      },
      {
        title: "Máy cũ",
        img: require("../assets/mayu.png"),
      },
    ],
  },
];
</script>
<style scoped>
.CategoryProduct {
  margin-top: 12%;
  margin-left: 3vw;
  display: flex;
}
</style>
