<template>
  <div class="TitleProductSection">
    {{ props.quantity }}pppppppppppp {{ sumPriceProduct }}dddđ
    <div class="titleSection">
      <!-- Sử dụng phần tử đầu tiên của mảng title -->
      <h1>{{ title.name }} {{ selectedValue?.name }}</h1>
      <p>{{ title.code }}</p>
    </div>
    <div class="contentSection">
      <div class="capacity">
        <p>Dung lượng</p>

        <SelectButton
          class="aaa"
          v-model="selectedValue"
          :options="title.memoryButton"
          optionLabel="name"
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
      {{ priceProductComputed }}
      <div class="colorProduct">
        <p>Màu sắc</p>
        <div class="buttonSelect">
          <SelectButton
            class="options"
            v-model="selectProduct"
            :options="title.imgProduct"
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
        <span class="titleQuantity"> {{ quantity.instances?.[0].title }}</span>
        <span class="priceQuantity"> {{ formatVND(sumPriceProduct) }}</span>
        <div class="saleSection">
          <span class="OriginalPrice">
            {{ formatVND(quantity.instances?.[0].OriginalPrice) }}</span
          >
          <span class="saleQuantity">
            {{ quantity.instances?.[0].SalePrice }}</span
          >
        </div>
        <div class="bonusSection">
          <span>{{ quantity.instances?.[0].bonus }}</span>
        </div>
      </div>
      <div class="orPrice"><span>Hoặc</span></div>
      <div class="notificationSection">
        <div class="titleNotification">
          <span>Trả góp</span>
        </div>
        <div class="notification">
          <span>{{ quantity.instances?.[0].notification }}</span>
        </div>
      </div>
    </div>
    <div class="buyProduct">
      <div class="iconCart">
        <SubmitButton
          class="icon"
          icon="pi pi-cart-arrow-down"
          @click="addToCart"
        />
      </div>
      <div class="Buy">
        <SubmitButton class="buy" label="Mua Ngay" @click="buyProduct()" />
      </div>
      <div class="Gop"><SubmitButton class="buy" label="Trả góp" /></div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { ref, watch } from "vue";
import { useProductStore } from "@/stores/index";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useProductStoreBuy } from "@/stores/productStore"; // Đảm bảo đúng đường dẫn
const productStore = useProductStore();
const router = useRouter();
const productStoreBuy = useProductStoreBuy();
const { buyProductCart } = storeToRefs(productStoreBuy);

// eslint-disable-next-line no-undef
const props = defineProps({
  title: Object,
  quantity: Array,
});

function formatVND(amount) {
  if (typeof amount !== "number" || isNaN(amount)) {
    return "-";
  }

  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}
const selectedValue = ref();
const selectProduct = ref(4);

const addToCart = () => {
  const productCart = {
    id: props.title.id,
    name: props.title.name,
    price: sumPriceProduct,
  };
  console.log("🚀 ~ addToCart ~ productCart:", productCart);

  productStoreBuy.handleToCart(productCart); // Gọi hành động thêm vào giỏ hàng
  console.log("Sản phẩm đã được thêm vào giỏ hàng");
};

const buyProduct = () => {
  router.push({ name: "Management" });
};
const sumPriceProduct = computed(() => {
  console.log(sumPriceProduct);
  const sumPrice =
    selectedValue.value?.countPrice + props.quantity.instances?.[0].price;
  console.log("🚀 ~ sumPriceProduct ~ sumPrice:", sumPrice);

  return sumPrice;
});
// const resolveNameMemory = computed(() => {
//   // return props.title;
//   if (props && props.title && props.title.memoryButton) {
//     const a = props.title.memoryButton.find(
//       (i) => i.value === selectedValue.value
//     );
//     if (a && a.name) {
//       return a.name;
//     }
//   }

//   return "";
// });
watch(
  () => props.title, // Theo dõi sự thay đổi của props.title
  (newTitle) => {
    if (newTitle && newTitle.memoryButton) {
      const a = newTitle.memoryButton.find((i) => i.default === true);

      if (a) {
        selectedValue.value = a; // Cập nhật selectedValue với phần tử mặc định
      }
    }
  },
  { immediate: true } // Kích hoạt ngay cả khi watch được khởi tạo, tương tự như onMounted
);
</script>
<style scoped>
.titleSection h1 {
  color: #090d14;
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
.notificationSection {
  display: flex;
  flex-direction: column;
}
.titleNotification {
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  color: rgb(107 114 128 / 1);
}
.notification {
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
