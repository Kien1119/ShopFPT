<template>
  <div class="productPage">
    <div class="product-iphone16">
      <div class="statusProduct">
        <div
          style="margin-right: 20px"
          v-for="category in categories"
          :key="category.key"
          class="flex items-center"
        >
          <RadioButton
            v-model="selectedCategory"
            :inputId="category.key"
            name="dynamic"
            :value="category.name"
          />
          <label :for="category.key" class="ml-2">{{ category.name }}</label>
        </div>
      </div>
      <div class="titleProduct">
        <router-link to="/"><span>Trang chủ</span> </router-link>
        <p>/</p>
        <router-link to="/iphone16"><span>Điện thoại</span></router-link>
        <p>/</p>
        <p>Iphone16 Pro Max 256GB</p>
      </div>
      <div class="section">
        <div class="imgSectionProduct">
          <SectionProduct :section="section"></SectionProduct>
        </div>
        <div class="contentSectionProduct">
          <!-- Truyền mảng title ở đây -->
          <TitleProductSection
            :title="title"
            :quantity="quantity"
          ></TitleProductSection>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import TitleProductSection from "@/components/TitleProductSection.vue";
import SectionProduct from "../components/SectionProduct.vue";
import { ref } from "vue";
const selectedCategory = ref("Máy mới");
function formatVND(amount) {
  if (typeof amount !== "number" || isNaN(amount)) {
    return "-";
  }

  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}
const title = ref([
  {
    title1: "iPhone 16 Pro Max 256GB",
    code: "No.00904369",
    titleButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
      { name: "1 TB", value: 3 },
    ],
    productButton: [
      { image: require("../assets/b1.jpg"), name: "Titan Trắng", value: 4 },
      { image: require("../assets/a1.jpg"), name: "Titan Xanh", value: 5 },
      { image: require("../assets/c1.jpg"), name: "Titan Tự nhiên", value: 6 },
      { image: require("../assets/d1.jpg"), name: "Titan Đen", value: 7 },
    ],
  },
]);
const quantity = ref([
  {
    title: "Mua nay với giá",
    price: formatVND(29490000),
    OriginalPrice: formatVND(34990000),
    sale: "16%",
    bonus: `${"+7.372"} Điểm thưởng`,
    Discount: formatVND(300000),
    installment: `${formatVND(1663000)}/tháng`,
  },
]);
const section = ref([
  require("../assets/b2.jpg"),
  require("../assets/b1.jpg"),
  require("../assets/b3.jpg"),
  require("../assets/b4.jpg"),
  require("../assets/b5.jpg"),
  require("../assets/b6.jpg"),
  require("../assets/b7.jpg"),
  require("../assets/b9.jpg"),
  require("../assets/b10.jpg"),
]);
const categories = ref([
  { name: "Máy mới", key: "M" },
  { name: "Máy cũ", key: "C" },
]);
</script>
<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.productPage {
  width: 100%;
  background: #ffffff;
}
.product-iphone16 {
  margin: 0 10%;
  padding: 0 20px;
  background: #ffffff;
}
.statusProduct {
  display: flex;
  align-items: center;
  color: black;
  height: 30px;
  background: #ffffff;
  padding: 12px 16px;
  margin-bottom: 20px;
}
.titleProduct {
  display: flex;
  top: 0;
  margin-top: 20px;
}
.titleProduct p {
  margin: 0 10px;
  color: black;
  font-size: 28px;
}
.titleProduct span {
  color: #1250dc;
  font-size: 24px;
  line-height: 20px;
  font-weight: 500;
}

.imgSectionProduct {
  width: 40%;
  margin-top: 30px;
  padding-bottom: 40px;
}
.section {
  display: flex;

  justify-content: space-between;
}
.contentSectionProduct {
  width: 40%;
}
</style>
