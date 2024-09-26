import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    params: {
      _page: 1,
      _per_page: 5,
      _field: "id",
      _title: "",
    },
    products: [], // Nơi lưu trữ danh sách sản phẩm
    total: 0, // Tổng số sản phẩm
    first: 0,
  }),
  actions: {
    async fetchProducts(params) {
      console.log("🚀 ~ fetchProducts ~ params:", params);
      try {
        const response = await axios.get(`http://localhost:3000/products`, {
          params: {
            ...this.params,
            _per_page: params._per_page,
          },
        });

        this.products = response.data.data; // Lưu dữ liệu vào state
        this.total = response.data.items; // Lưu dữ liệu vào state
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      }
    },

    async deleteProduct(id) {
      try {
        const deleteData = await axios.delete(
          `http://localhost:3000/products/${id}`
        );
        console.log("Sản phẩm đã xóa thành công:", deleteData.data);
        //Gọi lại fetchProducts để làm mới danh sách sản phẩm
        await this.fetchProducts({}); // Lấy lại danh sách sản phẩm sau khi xóa
      } catch (error) {
        console.error("Lỗi khi xóa sản phẩm:", error);
      }
    },
    async updateProduct(id, data) {
      console.log("store updt prod", { id, data });
      try {
        const response = await axios.patch(
          `http://localhost:3000/products/${id}`,
          data
        );
        await this.fetchProducts({});
        console.log("Sản phẩm đã cập nhật thành công:", response);
      } catch (error) {
        console.error("Lỗi khi cập nhật sản phẩm:", error);
      }
    },
    async addProduct(req) {
      try {
        const { data } = await axios.post(
          `http://localhost:3000/products`,
          req
        );

        data.id = Math.round(Math.random() * 1000000);
        await this.fetchProducts({});
        console.log({ data });
        return data;
      } catch (error) {
        console.error(error);

        return error;
      }
    },
  },
});
