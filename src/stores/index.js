import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    params: {
      _page: 1,
      _per_page: 5,
      _field: "id",
      _title: "",
    },
    products: [], // Nơi lưu trữ danh sách sản phẩm
    product: {}, // Nơi lưu trữ danh sách sản phẩm
    total: 0, // Tổng số sản phẩm
    first: 0,
    admin: {},
    memoryOptions: [
      {
        id: 1,
        memory: "256GB",
        countPrice: 5000000,
      },
      {
        id: 2,
        memory: "521GB",
        countPrice: 10000000,
      },
      {
        id: 3,
        memory: "1TB",
        countPrice: 15000000,
      },
    ],
  }),
  getters: {
    // priceProductOption: (state) => {
    //   console.log(
    //     "🚀 ~ state:",
    //     state.products.instances[0].price +
    //       state.product.memoryButton[0].countPrice
    //   );
    //   return (
    //     state.products.instances[0].price +
    //     state.product.memoryButton[0].countPrice
    //   );
    // },
  },
  actions: {
    async fetchProducts(params) {
      try {
        const response = await axios.get(`http://localhost:3000/products`, {
          params: {
            ...this.params,
            _per_page: params._per_page,
          },
        });

        this.products = response.data.data.map((e, i) => {
          console.log(e.instances?.[0] ? i : "");
          return {
            ...e,
            memorySelected: e.memoryButton.find((i) => i.default),
            instanceSelected: e.instances?.[0] ?? null,
          };
        }); // Lưu dữ liệu vào state

        this.total = response.data.items; // Lưu dữ liệu vào state
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      }
    },
    async fetchProductById(id) {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/products/${id}`
        );

        this.product = {
          ...data,
          memorySelected: data.memoryButton.find((i) => i.default),
          instanceSelected: data.instances[0],
        };
        return data;
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

        return data;
      } catch (error) {
        console.error(error);

        return error;
      }
    },
  },
});
function getRandomNumber(x) {
  return Math.floor(Math.random() * x) + 1;
}
