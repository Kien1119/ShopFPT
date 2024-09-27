<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="Cart" style="height: 600px">
    <div class="disCart">
      <div>
        <div class="imgContent">
          <img
            src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2024_3_19_638464460387523551_macbook-air-m3-15-2024-xam-1.jpg"
            alt="Không có ảnh
            "
            class="imgCategorry"
          />

          <!-- <div class="iconDisCart" v-if="slotProps.data.function">
            <img :src="slotProps.data.function[0].images" alt="" />
            <span>{{ slotProps.data.function[0].title }}</span>
            <img :src="slotProps.data.function[0].images1" alt="" />
            <span>{{ slotProps.data.function[0].title1 }}</span>
            <img :src="slotProps.data.function[0].images2" alt="" />
            <span>{{ slotProps.data.function[0].title2 }}</span>
          </div> -->
        </div>
      </div>

      <div class="contentCart">
        <div
          class="textCard"
          style="color: black; font-size: 24px; font-weight: 400px"
        >
          <div class="notification">
            <span>{{ slotProps.data?.instances?.[0]?.notification }}</span>
          </div>
          <div class="Original">
            <div class="OriginalPrice">
              {{ formatVND(slotProps.data?.instances?.[0]?.OriginalPrice) }}
            </div>

            <div class="SalePrice">
              {{ slotProps.data?.instances?.[0]?.SalePrice }}
            </div>
          </div>

          <div class="price">
            {{ formatVND(slotProps.data?.instances?.[0]?.price) }}
          </div>
          <div class="Discount">
            {{ formatVND(slotProps.data?.instances?.[0]?.Discount) }}
          </div>
        </div>
        <div class="textCard" style="color: black">
          {{ slotProps.data.name }}
        </div>

        <span class="buttonCategory">
          <div class="buttonRam" v-if="slotProps.data.memoryButton">
            <SelectButton
              class="aaa"
              v-model="selectedValue"
              :options="slotProps.data.memoryButton"
              optionLabel="name"
              optionValue="value"
              item-content-class="hover-bg"
            >
              <template #option="slotProps">
                <div :class="slotProps.data ? 'active hover-bg' : ''">
                  {{ slotProps.option.name }}
                  {{ slotProps.data }}
                </div>
              </template>
            </SelectButton>
          </div>
        </span>
      </div>
    </div>
    <div style="border: 1px solid #ccc; margin: 30px"></div>

    <div class="bankHover">
      <div class="bankItem bankOne">
        <img src="../assets/HpL-1706257898463.jpeg" alt="Error data" />
        <p>Chủ thẻ Home Credit: Giảm thêm 400,000đ</p>
      </div>
      <div class="bankItem bankTwo">
        <img src="../assets/krevo.jpg" alt="Error data" />
        <p>Chủ thẻ OCB: Giảm thêm 500,000đ</p>
      </div>
      <div class="bankItem bankThree">
        <img src="../assets/vnpay.jpg" alt="Error data" />
        <p>Giảm ngay 800.000đ khi mở thẻ tín dụng VPBank</p>
      </div>
      <div class="bankItem bankFour">
        <img src="../assets/vpbank.jpeg" alt="Error data" />
        <p>Giảm đến 700.000đ khi thanh toán trả góp qua Kredivo</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// const props =
// eslint-disable-next-line no-undef
defineProps({
  slotProps: Object,
});
const selectedValue = ref(1);

function formatVND(amount) {
  if (typeof amount !== "number" || isNaN(amount)) {
    return "-";
  }

  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}
</script>

<style lang="css" scoped>
.disCart {
  color: black !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.imgContent {
  display: flex;
  align-items: center;
}
.iconDisCart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.imgCategorry {
  height: 200px;
  width: 80%;
  object-fit: contain;
}
.iconDisCart img {
  object-fit: contain;
  margin: 10px 3px;
}
.iconDisCart span {
  font-size: 9px;
}
.notification {
  margin-top: 20px;
  height: 22px;
  width: 100%;
  text-align: center;
  display: flex;
  right: 0;
}
.notification span {
  background: #e5e7eb;
  color: #6b7280;
  font-size: 15px;
  border-radius: 100px;
}
.textCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 30px;
  margin-top: 20px;
  right: 0;
}
.Original {
  margin-top: 10px;
  display: flex;
  align-items: center;

  width: 100%;
  left: 0;
}
.OriginalPrice {
  font-size: 12px;
  line-height: 18px;
  text-decoration: line-through;
  color: #6b7280;
}
.price {
  display: flex;
  width: 100%;
  left: 0;
  color: #090d14;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
}
.SalePrice {
  color: #dc2626;
  font-size: 14px;
  line-height: 18px;
  padding-left: 10px;
  font-weight: 600;
}
.Discount {
  width: 100%;
  display: flex;
  left: 0;
  font-size: 14px !important;
  line-height: 18px !important;
  color: #059669;
}

.contentCart {
  display: flex;
  flex-direction: column;
}
.buttonCategory {
  display: flex;
  width: 70%;
  margin-left: 30px;
  color: #000 !important;
}

.aaa {
  gap: 10px;
  width: 200px;
}
.buttonRam hr {
  border: none;
  border-top: 1px solid #000; /* Màu của dòng kẻ */
  margin: 10px 0; /* Khoảng cách giữa dòng kẻ và các div */
}

.bankHover {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  gap: 7px;
  align-items: center;
  justify-content: space-around;
}

.bankItem {
  text-align: center;
  cursor: pointer;
}

.bankItem img {
  width: 40px;
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
.Cart:hover {
  border-radius: 20px;
  border: 0.1px solid #ccc;
  cursor: pointer;
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
.active {
  border: 1px solid #dc2626;
}
</style>
