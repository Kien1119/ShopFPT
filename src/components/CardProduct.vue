<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="Cart" v-if="slotProps" @click="gotoProductDetail(slotProps.id)">
    <div class="disCart">
      <img
        :src="slotProps.instanceSelected.img"
        alt="Không có ảnh"
        class="imgCategorry"
      />

      <div class="contentCart">
        <div
          class="textCard"
          style="color: black; font-size: 24px; font-weight: 400px"
        >
          <div class="notification">
            <span>{{ slotProps?.instanceSelected?.notification }}</span>
          </div>
          <div class="Original">
            <div class="OriginalPrice">
              {{ formatVND(slotProps?.instanceSelected?.OriginalPrice) }}
            </div>

            <div class="SalePrice">
              {{ slotProps?.instanceSelected?.SalePrice }}
            </div>
          </div>

          <div class="price">
            {{ formatVND(slotProps?.instanceSelected?.price) }}
          </div>
          <div class="Discount">
            {{ formatVND(slotProps?.instanceSelected?.Discount) }}
          </div>
        </div>
        <div class="textCard" style="color: black; min-height: 100px">
          {{ slotProps.name }}
    </div>

        <span class="buttonCategory">
          <div class="buttonRam" v-if="slotProps.memoryButton">
            <SelectButton
              class="memorySelect"
              v-model="slotProps.memorySelected"
              :options="slotProps.memoryButton"
              :modelValue="slotProps.memorySelected"
              :optionValue="(val) => val"
              option-label="name"
              item-content-class="hover-bg"
            >
            </SelectButton>
          </div>
        </span>
      </div>
    </div>

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
const props = defineProps({
  slotProps: Object,
});

function formatVND(amount) {
  if (typeof amount !== "number" || isNaN(amount)) {
    return "-";
  }

  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}
import { useRouter } from "vue-router";

const router = useRouter();

const gotoProductDetail = (id) => {
  if (id) {
    router.push({ name: "product-detail", params: { id } });
  } else {
    console.error("Không có dữ liệu hợp lệ được chọn.");
  }
};
</script>

<style lang="css" scoped>
.disCart {
  color: black !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.iconDisCart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.imgCategorry {
  width: 100%;
  height: 180px;
  overflow: hidden;
  object-fit: cover;
}
.iconDisCart img {
  object-fit: contain;
  margin: 10px 3px;
}
.iconDisCart span {
  font-size: 9px;
}
.notification span {
  background: #e5e7eb;
  color: #6b7280;
  padding: 6px 15px;
  font-size: 15px;
  border-radius: 100px;
}
.textCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  text-align: left;
  gap: 5px;
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
  justify-content: center;
  flex-direction: column;
}
.buttonCategory {
  display: flex;
  justify-content: center;
  color: #000 !important;
}

.memorySelect {
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
  width: 100%;
  min-height: 100px;
  justify-content: center;
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
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
}

.bankItem:hover > p {
  display: block;
}
.Cart {
  padding: 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  gap: 15px;
  margin: 7px;
}
.Cart:hover {
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
