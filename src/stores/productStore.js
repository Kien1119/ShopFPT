import { defineStore } from "pinia";

export const useProductStoreBuy = defineStore("productStoreBuy", {
  state: () => ({
    adminProduct: [], // Giỏ hàng
  }),
  getters: {
    buyProductCart: (state) => {
      if (state.adminProduct.length > 0) {
        return state.adminProduct; // Trả về sản phẩm trong giỏ hàng
      } else {
        console.error("Không có gì trong giỏ hàng");
        return [];
      }
    },
  },
  actions: {
    handleToCart(product) {
      const existingProduct = this.adminProduct.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1; // Nếu đã có sản phẩm trong giỏ thì tăng số lượng
      } else {
        this.adminProduct.push({
          ...product,
          quantity: 1, // Nếu chưa có thì thêm mới với số lượng 1
        });
      }
    },
  },
});
