<template>
  <div class="HomePage">
    <div class="cardBanner">
      <Galleria
        :value="images"
        :numVisible="1"
        :circular="true"
        :showItemNavigators="true"
        :showThumbnails="false"
        :showItemNavigatorsOnHover="true"
        :showIndicators="true"
      >
        <template #item="slotProps">
          <div class="banner">
            <a href="#">
              <img
                :src="slotProps.item.bannerImageSrc"
                :alt="slotProps.item.bannerAlt"
                style="width: 100%; display: block; height: 293px"
            /></a>
          </div>
          <div class="galleria-item">
            <a href="#">
              <img
                :src="slotProps.item.itemImageSrc"
                :alt="slotProps.item.alt"
                style="width: 100%; display: block"
            /></a>
          </div>
        </template>
      </Galleria>
    </div>
    <CategoryProduct></CategoryProduct>
    <div class="cardSale">
      <Carousel
        :value="products"
        :numVisible="2"
        :numScroll="2"
        :showIndicators="false"
        :autoplayInterval="3000"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div class="saleImg">
            <a href="#"
              ><img :src="slotProps.data.image" class="w-full rounded"
            /></a>
          </div>
        </template>
      </Carousel>
    </div>
    <div class="HuntingSale">
      <div class="imgGiam">
        <img
          src="../assets/giamgia.png"
          style="width: 100%; display: block"
          alt="Error img"
        />
        <div class="timeSale">
          <img src="../assets/headersale.png" alt="" />
        </div>
      </div>
      <div class="categorySale"></div>
    </div>
    <div class="sellProduct">
      <div class="titleProduct">
        <h2>Sản phẩm bán chạy</h2>
        <img src="../assets/product.png" style="width: 300px" alt="Error img" />
      </div>
      <div class="contentProduct">
        <div class="ContentTitleProduct">
          <Tabs value="0">
            <TabList
              class="tabTest"
              id="tabTest"
              :pt="{
                tabList: {
                  style: {
                    'border-top-left-radius': '20px',
                    'border-top-right-radius': '20px',
                    'background-color': '#fff',
                  },
                },
              }"
            >
              <Tab value="0" as="div" class="flex items-center gap-2">
                <!-- style="border-style: none" -->
                <img src="../assets/img1.png" alt="" />
                <span class="font-bold whitespace-nowrap">Khuyến mãi hot</span>
              </Tab>
              <Tab value="1" as="div" class="flex items-center gap-2">
                <img src="../assets/img2.png" alt="" />
                <span class="font-bold whitespace-nowrap"
                  >Điện thoại bán chạy</span
                >
              </Tab>
              <Tab value="2" as="div" class="flex items-center gap-2">
                <img src="../assets/img4.png" alt="" />
                <span class="font-bold whitespace-nowrap"
                  >Điện máy giá tốt</span
                >
              </Tab>
              <Tab value="3" as="div" class="flex items-center gap-2">
                <img src="../assets/img5.png" alt="" />
                <span class="font-bold whitespace-nowrap"
                  >Gia dụng deal ngon</span
                >
              </Tab>
              <Tab value="4" as="div" class="flex items-center gap-2">
                <img src="../assets/img6.png" alt="" />
                <span class="font-bold whitespace-nowrap"
                  >Phụ kiện giá gốc</span
                >
              </Tab>
              <Tab v-slot="slotProps" value="5" asChild>
                <div
                  :class="['flex items-center gap-2', slotProps.class]"
                  @click="slotProps.onClick"
                  v-bind="slotProps.a11yAttrs"
                >
                  <img src="../assets/img3.png" alt="" />
                  <span class="font-bold whitespace-nowrap"
                    >Laptop giảm lớn</span
                  >
                </div>
              </Tab>
            </TabList>
            <TabPanels class="tabPanelsCategory">
              <TabPanel value="0" as="p" class="m-0"
                ><TabPanelsCategory :categorys="categorys"></TabPanelsCategory>
              </TabPanel>
              <TabPanel value="1" as="p" class="m-0">
                <TabPanelsCategory :categorys="categorys2"></TabPanelsCategory>
                modi.
              </TabPanel>
              <TabPanel value="2">
                <TabPanelsCategory :categorys="categorys3"></TabPanelsCategory>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
    <div class="Advertisement">
      <Carousel
        :value="Advertisement"
        :numVisible="3"
        :numScroll="1"
        :showIndicators="false"
        :autoplayInterval="3000"
        :showNavigators="false"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div class="saleImg">
            <a href="#"
              ><img :src="slotProps.data.image" class="w-full rounded"
            /></a>
          </div>
        </template>
      </Carousel>
    </div>
    <CategoryProduct style="margin: 0; width: 100%"></CategoryProduct>
    <div class="itembanner">
      <div class="titleItemBanner">
        <span> Tết Đoàn Viên</span>
      </div>
      <div class="imgItemBanner">
        <img style="width: 100%" src="../assets/img7.png" alt="Error img" />
      </div>
    </div>
  </div>
</template>
<script setup>
import CategoryProduct from "@/components/CategoryProduct.vue";
import TabPanelsCategory from "@/components/TabPanelsCategory";
import { useProductStore } from "@/stores/index"; // Import store
import { computed, ref } from "vue";
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
function formatVND(amount) {
  if (typeof amount !== "number" || isNaN(amount)) {
    return "-";
  }

  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

// State variables using ref and reactive
const productStore = useProductStore();
productStore.fetchProducts({ _per_page: 50 });
const categorys = computed(() => productStore.products);
console.log("🚀 ~ productStore.products:", productStore.products);

const categorys1 = ref([
  {
    image: require("../assets/iphone_15_pro_max_f589ed5358.png"),
    alt: "img 1 description",
    name: "iPhone 15 Pro Max 256GB",
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
    price: 29390000,
    memoryButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
      { name: "1 TB", value: 3 },
    ],
  },
  {
    id: "123frdt",
    image: require("../assets/samsung_galaxy_s24_ultra_2f8a5ee174.png"),
    alt: "img 2 description",
    name: "Samsung Galaxy S24 Ultra 5G 256GB",
    price: 29990000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-24%",
    Discount: `Giảm ${formatVND(8000000)}`,

    memoryButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
      { name: "1 TB", value: 3 },
    ],
  },
  {
    image: require("../assets/oppo_a3_tim_5_a81a5f4bf7.jpg"),
    alt: "img 3 description",
    name: "OPPO A3 6GB 128GB",
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-18%",
    Discount: `Giảm ${formatVND(2000000)}`,

    price: 4900000,
  },
  {
    image: require("../assets/2024_5_24_638521377580663698_ag15-31p-32u6-thumb.jpg"),
    alt: "img 4 description",
    name: "Laptop Acer Aspire Go AG15-31P-32U6 i3 N305/8GB/512GB",
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-10%",
    Discount: `Giảm ${formatVND(900000)}`,
    price: 8900000,
    function: [
      {
        images: require("../assets/intel.png"),
        title: "Intel Corei5-12450HX",
        images1: require("../assets/tivi4k.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/congconnect.png"),
        title2: "Cổng kết nối Type C",
      },
      {
        images: require("../assets/intel.png"),
        title: "Intel Corei5-12450HX",
        images1: require("../assets/tivi4k.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/congconnect.png"),
        title2: "Cổng kết nối Type C",
      },
      {
        images: require("../assets/intel.png"),
        title: "Intel Corei5-12450HX",
        images1: require("../assets/tivi4k.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/congconnect.png"),
        title2: "Cổng kết nối Type C",
      },
    ],
  },
  {
    image: require("../assets/tivi.jpg"),
    alt: "img 5 description",
    name: "Smart Tivi Samsung Crystal UHD 4K 43 inch UA43AU7002",
    memoryButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
      { name: "1 TB", value: 3 },
    ],
    price: 6490000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-37%",
    Discount: `Giảm ${formatVND(1300000)}`,
  },
  {
    image: require("../assets/Quat.jpg"),
    alt: "img 6 description",
    name: "Quạt điều hòa Sunhouse SHD7744",
    price: 2190000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-37%",
    Discount: `Giảm ${formatVND(1300000)}`,
  },
  {
    image: require("../assets/poco_m6_pro_003aba177e.png"),
    alt: "img 7 description",
    name: "Xiaomi Poco M6 Pro 8GB 256GB",
    price: 5990000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-8%",
    Discount: `Giảm ${formatVND(500000)}`,
  },
  {
    image: require("../assets/maytin1.jpg"),
    alt: "img 8 description",
    name: "Laptop Asus Vivobook 15 OLED A1505VA-L1113W i5 13500H/16GB/512GB/15.6'FHD/Win11",
    price: 17890000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
    function: [
      {
        images: require("../assets/chedo.png"),
        title: "GeForce RTX 2050 4GB",
        images1: require("../assets/Tan so.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/ram.png"),
        title2: "GeForce RTX 2050 4GB",
      },
      {
        images: require("../assets/chedo.png"),
        title: "GeForce RTX 2050 4GB",
        images1: require("../assets/Tan so.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/ram.png"),
        title2: "GeForce RTX 2050 4GB",
      },
      {
        images: require("../assets/chedo.png"),
        title: "GeForce RTX 2050 4GB",
        images1: require("../assets/Tan so.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/ram.png"),
        title2: "GeForce RTX 2050 4GB",
      },
    ],
  },
  {
    image: require("../assets/honor_x9b_cam_4_99d6142e8b.jpg"),
    alt: "img 9 description",
    name: "Honor X9B 5G 12GB-256GB",
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-11%",
    Discount: `Giảm ${formatVND(2200000)}`,
    price: 2190000,
    memoryButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
    ],
  },
  {
    image: require("../assets/dienthoa.jpg"),
    alt: "img 10 description",
    name: "Samsung Galaxy A15 128GB",
    price: 7990000,
    memoryButton: [
      { name: "128 GB", value: 1 },
      { name: "256 GB", value: 2 },
    ],
  },
  {
    image: require("../assets/maytinh2.jpg"),
    alt: "img 11 description",
    name: "Laptop Lenovo Gaming LOQ - 15IAX9 i5 12450HX/AI/16GB/512GB/15.6",
    price: 19990000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-11%",
    Discount: `Giảm ${formatVND(1000000)}`,
    function: [
      {
        images: require("../assets/chedo.png"),
        title: "GeForce RTX 2050 4GB",
        images1: require("../assets/Tan so.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/ram.png"),
        title2: "GeForce RTX 2050 4GB",
      },
      {
        images: require("../assets/chedo.png"),
        title: "GeForce RTX 2050 4GB",
        images1: require("../assets/Tan so.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/ram.png"),
        title2: "GeForce RTX 2050 4GB",
      },
      {
        images: require("../assets/chedo.png"),
        title: "GeForce RTX 2050 4GB",
        images1: require("../assets/Tan so.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/ram.png"),
        title2: "GeForce RTX 2050 4GB",
      },
    ],
  },
  {
    image: require("../assets/00909923_poco_x6_blue_5e570f66db.png"),
    alt: "img 12 description",
    name: "Xiaomi POCO X6 5G 12GB-256GB",
    notification: "Trả góp 0%",
    OriginalPrice: 8900000,
    SalePrice: "-31%",
    Discount: `Giảm ${formatVND(1000000)}`,
    price: 4490000,
  },
  {
    image: require("../assets/iôiiôi.png"),
    alt: "img 13 description",
    name: "Samsung Galaxy A35 5G 128GB",
    notification: "Trả góp 0%",
    OriginalPrice: 8200000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(300000)}`,
    price: 7990000,
    memoryButton: [
      { name: "128 GB", value: 1 },
      { name: "256 GB", value: 2 },
    ],
  },
  {
    image: require("../assets/ipadđ.png"),
    alt: "img 14 description",
    name: "Samsung Galaxy Tab A9 WiFi 8GB 128GB",
    price: 7990000,
    notification: "Trả góp 0%",
    OriginalPrice: 4900000,
    SalePrice: "-24%",
    Discount: `Giảm ${formatVND(1200000)}`,
    memoryButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
      { name: "1 TB", value: 3 },
    ],
  },
  {
    image: require("../assets/wifi.jpg"),
    alt: "img 15 description",
    name: "Loa Bluetooth EDIFIER MP85",
    price: 290000,
    notification: "Trả góp 0%",
    OriginalPrice: 420000,
    SalePrice: "-31%",
    Discount: `Giảm ${formatVND(150000)}`,
  },
]);

const categorys2 = ref([
  {
    image: require("../assets/ip1.png"),
    alt: "img 1 description",
    name: "iPhone 16 Pro Max 256GB",
    price: 29390000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-10%",
    Discount: `Giảm ${formatVND(3000000)}`,
    memoryButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
      { name: "1 TB", value: 3 },
    ],
  },
  {
    id: "123frdt",
    image: require("../assets/ip2.png"),
    alt: "img 2 description",
    name: "Samsung Galaxy S24 Ultra 5G 256GB",
    price: 29990000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
    memoryButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
      { name: "1 TB", value: 3 },
    ],
  },
  {
    image: require("../assets/ip3.jpg"),
    alt: "img 3 description",
    name: "OPPO A3 6GB 128GB",
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
    memoryButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
      { name: "1 TB", value: 3 },
    ],
    price: 4900000,
  },
  {
    image: require("../assets/ip4.jpg"),
    alt: "img 4 description",
    name: "Laptop Acer Aspire Go AG15-31P-32U6 i3 N305/8GB/512GB",
    memoryButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
      { name: "1 TB", value: 3 },
    ],
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
    price: 8900000,
    function: [
      {
        images: require("../assets/intel.png"),
        title: "Intel Corei5-12450HX",
        images1: require("../assets/tivi4k.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/congconnect.png"),
        title2: "Cổng kết nối Type C",
      },
      {
        images: require("../assets/intel.png"),
        title: "Intel Corei5-12450HX",
        images1: require("../assets/tivi4k.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/congconnect.png"),
        title2: "Cổng kết nối Type C",
      },
      {
        images: require("../assets/intel.png"),
        title: "Intel Corei5-12450HX",
        images1: require("../assets/tivi4k.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/congconnect.png"),
        title2: "Cổng kết nối Type C",
      },
    ],
  },
  {
    image: require("../assets/ip5.png"),
    alt: "img 5 description",
    name: "Smart Tivi Samsung Crystal UHD 4K 43 inch UA43AU7002",
    memoryButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
      { name: "1 TB", value: 3 },
    ],
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
    price: 6490000,
  },
  {
    image: require("../assets/ip7.jpg"),
    alt: "img 6 description",
    name: "Quạt điều hòa Sunhouse SHD7744",
    price: 2190000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
    memoryButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
      { name: "1 TB", value: 3 },
    ],
  },
  {
    image: require("../assets/ip9.jpg"),
    alt: "img 7 description",
    name: "Xiaomi Poco M6 Pro 8GB 256GB",
    price: 5990000,
    memoryButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
      { name: "1 TB", value: 3 },
    ],
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
  },
  {
    image: require("../assets/ip10.jpg"),
    alt: "img 8 description",
    name: "Laptop Asus Vivobook 15 OLED A1505VA-L1113W i5 13500H/16GB/512GB/15.6'FHD/Win11",
    price: 17890000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
    memoryButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
      { name: "1 TB", value: 3 },
    ],
    function: [
      {
        images: require("../assets/intel.png"),
        title: "Intel Corei5-12450HX",
        images1: require("../assets/tivi4k.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/congconnect.png"),
        title2: "Cổng kết nối Type C",
      },
      {
        images: require("../assets/intel.png"),
        title: "Intel Corei5-12450HX",
        images1: require("../assets/tivi4k.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/congconnect.png"),
        title2: "Cổng kết nối Type C",
      },
      {
        images: require("../assets/intel.png"),
        title: "Intel Corei5-12450HX",
        images1: require("../assets/tivi4k.png"),
        title1: "GeForce RTX 2050 4GB",
        images2: require("../assets/congconnect.png"),
        title2: "Cổng kết nối Type C",
      },
    ],
  },
  {
    image: require("../assets/iphone_15_pro_max_f589ed5358.png"),
    alt: "img 9 description",
    name: "Honor X9B 5G 12GB-256GB",
    price: 2190000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
    memoryButton: [
      { name: "256 GB", value: 1 },
      { name: "512 GB", value: 2 },
    ],
  },
]);
const categorys3 = ref([
  {
    image: require("../assets/pk1.jpg"),
    alt: "img 1 description",
    name: "Ổ cắm điện tích hợp củ sạc nhanh và đèn ngủ iCORE ITS100C",
    price: 499000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
  },
  {
    id: "123frdt",
    image: require("../assets/pk2.jpg"),
    alt: "img 2 description",
    name: "Đèn pin sạc đội đầu Sunhouse SHE-5012",
    price: 79000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
  },
  {
    image: require("../assets/pk3.jpg"),
    alt: "img 3 description",
    name: "Đèn sưởi nhà tắm Benny 3 bóng BHT825W",
    price: 590000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
  },
  {
    image: require("../assets/pk4.jpg"),
    alt: "img 4 description",
    name: "Vợt muỗi Hotwell MR12H3",
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
    price: 129000,
  },
  {
    image: require("../assets/pk5.jpg"),
    alt: "img 5 description",
    name: "Bàn ủi hơi nước Sunhouse SHD2067",
    price: 329000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
  },
  {
    image: require("../assets/pk6.jpg"),
    alt: "img 6 description",
    name: "Bình đun siêu tốc 1.8L Hotwell KE18H4",
    price: 2190000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
  },
  {
    image: require("../assets/pk7.jpg"),
    alt: "img 7 description",
    name: "Bình thủy điện Kangaroo 5 lít KG5K1",
    price: 1290000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
  },
  {
    image: require("../assets/massay.jpg"),
    alt: "img 8 description",
    name: "Máy sấy tóc Sunhouse SHD2306",
    price: 209000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
  },
  {
    image: require("../assets/noilau.jpg"),
    alt: "img 9 description",
    name: "Nồi lẩu điện Goldsun 3 lít GMC3000",
    price: 489000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
  },

  {
    image: require("../assets/lovíong.jpg"),
    alt: "img 10 description",
    name: "Lò vi sóng có nướng Toshiba 23 lít ER-SGS23(S1)VN",
    price: 2790000,
    notification: "Trả góp 0%",
    OriginalPrice: 34990000,
    SalePrice: "-16%",
    Discount: `Giảm ${formatVND(5000000)}`,
  },
]);

const images = ref([
  {
    itemImageSrc: require("@/assets/desk_header_beeb2af002.png"),
    bannerImageSrc: require("../assets/desk_header_bg_3e9455a6ba.png"),
    alt: "Image 1 Description",
    bannerAlt: "Banner 1 Description",
  },
  {
    itemImageSrc: require("@/assets/desk_header_d6e6cb2d17.png"),
    bannerImageSrc: require("../assets/BG_sec5_f9383bb189.png"),
    alt: "Image 2 Description",
    bannerAlt: "Banner 2 Description",
  },
  {
    itemImageSrc: require("@/assets/desk_header_15_bf5ff95ac0.png"),
    bannerImageSrc: require("../assets/mb_header_bg_11_3863130ffb.png"),
    alt: "Image 3 Description",
    bannerAlt: "Banner 3 Description",
  },
]);
const products = ref([
  {
    image: require("../assets/H2_614x212_38c8346dce.png"),
    alt: "image 1 description",
  },
  {
    image: require("../assets/H2_614x212_34af40215b.png"),
    alt: "image 2 description",
  },
  {
    image: require("../assets/H2_614x212_1_1b08f500eb.png"),
    alt: "image 3 description",
  },
  {
    image: require("../assets/H2_614x212_58a281730e.png"),
    alt: "image 4 description",
  },
  {
    image: require("../assets/H2_614x212_77ee75811d.png"),
    alt: "image 5 description",
  },
  {
    image: require("../assets/H2_614x212_b1906ff0d1.png"),
    alt: "image 6 description",
  },
]);

const Advertisement = ref([
  {
    image: require("../assets/bannermoney.png"),
    alt: "Error img",
  },
  {
    image: require("../assets/bannermoney2.png"),
    alt: "Error img",
  },
  {
    image: require("../assets/bannermoney3.png"),
    alt: "Error img",
  },
  {
    image: require("../assets/bannermoney4.png"),
    alt: "Error img",
  },
  {
    image: require("../assets/quanglinh.png"),
    alt: "Error img",
  },
  {
    image: require("../assets/bannermoney.png"),
    alt: "Error img",
  },
]);
</script>
<style scoped>
.HomePage {
  background-color: #faf2f2 !important;
}
main[data-v-db3d4b3e] {
  padding: 0 !important;
}
.flex {
  display: flex;
  align-items: center;
  margin-left: 20px;
  background-color: #fff;
}
.flex.p-tab {
  border: none;
  border-style: none;
}
.flex,
.font-bold:hover {
  border-bottom: 1px solid #000;
}

.cardBanner {
  width: 100%;
  height: 450px;
  position: relative;
}
.p-galleria.p-component.p-galleria-hover-navigators.p-galleria-indicators-bottom {
  border: none !important;
}
.banner {
  position: relative;
  width: 100%;
}
.galleria-item {
  position: absolute;
  top: 30px;
  width: 80%;
}

.cardSale {
  position: absolute;
  top: 500px;
  margin-left: 5%;
  display: flex;
  width: 90%;
}
.saleImg {
  padding: 20px;
}
.saleImg img {
  border-radius: 20px;
}

.CategoryProduct {
  margin-top: 12%;
  margin-left: 8vw;
  justify-content: center;
  display: flex;
  width: 90%;
}
/* dien thoai */
.HuntingSale {
  margin: 30px 124px 0 124px;
  padding: 0 20px;

  min-width: 769px;
  background-color: black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}
.imgGiam {
  position: relative;
}
.timeSale {
  margin: 0 30%;
  position: absolute;
  top: -10px;
}
.categorySale {
  background-color: #fff;
  width: 100%;
  height: 530px;
  border-radius: 20px;
}

.sellProduct {
  margin: 30px 9% 0 8%;
  /* width: 100%; */
}
.titleProduct {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
}

.titleProduct h2 {
  font-size: 48px !important;
  font-weight: 800;
  line-height: 60px !important;
  color: black;
}
.contentProduct {
  width: 100%;
  height: 700px;
  border-radius: 20px;
  background-color: #fff;
  margin-bottom: 30px;
}
.tabPanelsCategory {
  background-color: #fff;
  width: 100%;
  height: 636px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.Advertisement {
  padding: 0 120px;
}
.itembanner {
  display: flex;
  flex-direction: column;

  margin: 0 124px;
}
.titleItemBanner {
  font-weight: 400;
  font-size: 24px;
  color: #000;
  margin-bottom: 30px;
}
.imgItemBanner img {
  border-radius: 20px;
  margin-bottom: 30px;
}
</style>
