import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [], // Nơi lưu trữ danh sách sản phẩm
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        this.products = response.data; // Lưu dữ liệu vào state
        console.log(this.products);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      }
    },
  },
});
