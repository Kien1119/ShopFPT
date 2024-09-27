<template>
  <div class="TitleProductSection">
    <div class="titleSection">
      <!-- Sử dụng phần tử đầu tiên của mảng title -->
      <h1>{{ title[0].title1 }}</h1>
      <p>{{ title[0].code }}</p>
    </div>
    <div class="contentSection">
      <div class="capacity">
        <p>Dung lượng</p>

        <SelectButton
          class="aaa"
          v-model="selectedValue"
          :options="title[0].titleButton"
          optionLabel="name"
          optionValue="value"
          item-content-class="hover-bg"
        >
          <template #option="slotProps">
            <div
              class="hover-bg"
              :class="selectedValue == slotProps.option.value ? 'acitve' : ''"
            >
              {{ slotProps.option.name }}
            </div>
          </template>
        </SelectButton>
      </div>

      <div class="colorProduct">
        <p>Màu sắc</p>
        <div class="buttonSelect">
          <SelectButton
            class="options"
            v-model="selectProduct"
            :options="title[0].productButton"
            optionValue="value"
            item-content-class="product-item"
          >
            <template #option="slotProps">
              <div
                class="product-item"
                :class="selectProduct == slotProps.option.value ? 'acitve' : ''"
              >
                <img
                  :src="slotProps.option.image"
                  :alt="slotProps.option.name"
                  class="product-image"
                />
                <span>{{ slotProps.option.name }}</span>
              </div>
            </template>
          </SelectButton>
        </div>
      </div>
    </div>
    <div class="quantityProduct">
      <div class="priceProduct">
        <span class="titleQuantity"> {{ quantity[0].title }}</span>
        <span class="priceQuantity"> {{ quantity[0].price }}</span>
        <div class="saleSection">
          <span class="OriginalPrice"> {{ quantity[0].OriginalPrice }}</span>
          <span class="saleQuantity"> {{ quantity[0].sale }}</span>
        </div>
        <div class="bonusSection">
          <span>{{ quantity[0].bonus }}</span>
        </div>
      </div>
      <div class="orPrice"><span>Hoặc</span></div>
      <div class="installmentSection">
        <div class="titleInstallment">
          <span>Trả góp</span>
        </div>
        <div class="installment">
          <span>{{ quantity[0].installment }}</span>
        </div>
      </div>
    </div>
    <div class="buyProduct">
      <div class="iconCart">
        <SubmitButton class="icon" icon="pi pi-cart-arrow-down" />
      </div>
      <div class="Buy">
        <SubmitButton class="buy" label="Mua Ngay" @click="buyProduct()" />
      </div>
      <div class="Gop"><SubmitButton class="buy" label="Trả góp" /></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
// eslint-disable-next-line no-undef
defineProps({
  title: Array,
  slotProps: Object,
  quantity: Object,
});
const selectedValue = ref(1);
const selectProduct = ref(4);
const buyProduct = () => {
  console.log("ssss");
};
</script>
<style scoped>
.titleSection h1 {
  color: black;
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 0;
}
.titleSection p {
  color: #6b7280;
  font-size: 25px;
  margin-top: 0;
}
.capacity {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.capacity p {
  color: #090d14;
  font-size: 18px;
}
/* .c {
  height: 50px;
  display: flex;
  gap: 10px;
  border: 1px solid #090d14;
  border-radius: 5px;
} */

.aaa {
  height: 50px;
  gap: 20px;
}

.options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 400px;
}
.options .p-selectbutton {
  flex: 1 1 45%;
  padding: 10px;
  text-align: center;
}
.colorProduct {
  display: flex;

  margin: 50px 0;
}
.colorProduct p {
  color: #090d14;
  font-size: 18px;

  width: 150px;
}
.buttonSelect {
  display: flex;
  flex-direction: column;
}
.product-item {
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  padding: 5px 8px;
}
.product-item span {
  display: flex;
  text-align: center;
}

.product-item img {
  width: 25px;
  object-fit: contain;
}
.quantityProduct {
  border: 1px solid rgb(253 230 138 / 1);
  margin-top: 30px;
  padding: 10px;
  background: var(--1, linear-gradient(180deg, #fffbeb 0, #fff 43.98%));
  border-radius: 20px;
  display: flex;

  justify-content: space-between;
}
.priceProduct {
  display: flex;
  flex-direction: column;
}
.titleQuantity {
  color: #6b7280;
  font-size: 24px;
}
.priceQuantity {
  font-size: 38px;
  line-height: 36px;
  font-weight: 700;
  color: #090d14;
  margin-top: 10px;
}
.saleSection {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.OriginalPrice {
  font-size: 20px;
  line-height: 18px;
  text-decoration: line-through;
  color: #6b7280;
}
.saleQuantity {
  color: #dc2626;
  font-size: 14px;
  line-height: 18px;
  padding-left: 10px;
  font-weight: 600;
}
.hover-bg {
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;

  padding: 5px 8px;
}
.bonusSection {
  margin-top: 10px;
  width: 150px;
  height: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: rgb(217 119 6 / 1);
  border-radius: 20px;
  border: 1px solid rgb(217 119 6 / 1);
  text-align: center;
  background: rgb(254 243 199 / 1);
}
.orPrice {
  display: flex;
  align-items: center;
}
.installmentSection {
  display: flex;
  flex-direction: column;
}
.titleInstallment {
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  color: rgb(107 114 128 / 1);
}
.installment {
  margin-top: 20px;
  font-weight: 600;
  font-size: 18px;
}
.buyProduct {
  display: flex;
  margin-top: 30px;
  gap: 20px;
  margin-bottom: 20px;
}
.icon {
  width: 70px;
  font-size: 16px;
  font-weight: 500;
  height: 3.5rem;
  line-height: 24px;
  padding: 0 0.75rem;
  border: 1px solid #dc2626;
  color: #dc2626;
  background-color: #fffbeb;
  border-radius: 20px;
}
.icon:hover {
  width: 70px;
  font-size: 16px;
  font-weight: 500;
  height: 3.5rem;
  line-height: 24px;
  padding: 0 0.75rem;
  border: 1px solid #dc2626;
  color: #1f0a0a;
  background-color: #ed2009;
  border-radius: 20px;
}
.buy {
  width: 200px;
  font-size: 16px;
  font-weight: 500;
  height: 3.5rem;
  line-height: 24px;
  padding: 0 0.75rem;
  border: 1px solid #dc2626;
  color: #dc2626;
  background-color: #fffbeb;
  border-radius: 20px;
}
.buy:hover {
  width: 200px;
  font-size: 16px;
  font-weight: 500;
  height: 3.5rem;
  line-height: 24px;
  padding: 0 0.75rem;
  border: 1px solid #dc2626;
  color: #1f0a0a;
  background-color: #ed2009;
  border-radius: 20px;
}
</style>
