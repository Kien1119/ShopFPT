<template>
  <div>
    <CMSPage>
      <h1>Product</h1>

      <form>
        <div class="formCms">
          <InputGroup>
            <SubmitButton
              @click="productStore.fetchProducts"
              icon="pi pi-search"
              severity="search"
            />
            <InputText
              size="small"
              placeholder="Search...."
              v-model="productStore.params.name"
              @keyup.enter="debouncedSearch()"
            />
            <SubmitButton
              icon="pi pi-times"
              severity="danger"
              @click="resetFilters"
            />
          </InputGroup>
          <div class="addProduct">
            <div class="card flex justify-content-center">
              <SelectButton
                @click="memoryButtonClick"
                v-model="memoryButtonValue"
                aria-labelledby="basic"
              />
            </div>
            <Dialog
              v-model:visible="AddDialogVisible"
              header="Thêm sản phẩm"
              modal
            >
              <Form>
                <div class="formCms">
                  <div class="name-1">
                    <div class="p-field">
                      <ValidateField class="input-vali" name="name"
                        ><label for="name">Tên sản phẩm</label>
                        <InputText
                          class="input-class"
                          v-model="name"
                          id="name"
                          v-bind="nameAttrs"
                      /></ValidateField>
                    </div>
                    <span style="color: #d81221">{{ errors.name }}</span>

                    <div class="p-field">
                      <ValidateField class="input-vali" name="name"
                        ><label for="price">Giá</label>
                        <InputNumber
                          class="input-class"
                          v-model="price"
                          type="number"
                          id="price"
                          v-bind="priceAttrs"
                        />
                      </ValidateField>
                    </div>
                    <span style="color: #d81221">{{ errors.price }}</span>
                    <div class="p-field">
                      <ValidateField class="input-vali" name="name"
                        ><label for="color">Màu</label>

                        <InputText
                          class="input-class"
                          v-model="color"
                          id="color"
                          v-bind="colorAttrs"
                      /></ValidateField>
                    </div>
                    <span style="color: #d81221">{{ errors.color }}</span>
                    <div class="p-field">
                      <ValidateField class="input-vali" name="name"
                        ><label for="SalePrice">Sale</label>

                        <InputText
                          class="input-class"
                          v-model="SalePrice"
                          v-bind="SalePriceAttrs"
                          id="SalePrice"
                      /></ValidateField>
                    </div>
                  </div>
                  <span style="color: #d81221">{{ errors.SalePrice }}</span>
                  <div class="name-2">
                    <div class="p-field">
                      <ValidateField class="input-vali" name="name"
                        ><label for="image">Hình ảnh</label>
                        <InputText
                          class="input-class"
                          v-model="image"
                          id="image"
                          v-bind="imageAttrs"
                        />
                      </ValidateField>
                    </div>
                    <span style="color: #d81221">{{ errors.image }}</span>
                    <div class="p-field">
                      <ValidateField class="input-vali" name="name">
                        <label for="OriginalPrice">Giá Gốc</label>

                        <InputNumber
                          type="number"
                          class="input-class"
                          v-bind="OriginalPriceAttrs"
                          v-model="OriginalPrice"
                          id="OriginalPrice"
                      /></ValidateField>
                    </div>
                    <span style="color: #d81221">{{
                      errors.OriginalPrice
                    }}</span>
                    <div class="p-field">
                      <ValidateField class="input-vali" name="name">
                        <label for="Discount">Giảm giá</label>

                        <InputNumber
                          class="input-class"
                          type="number"
                          v-bind="DiscountAttrs"
                          v-model="Discount"
                          id="Discount"
                      /></ValidateField>
                    </div>
                    <span style="color: #d81221">{{ errors.Discount }}</span>
                    <div class="p-field">
                      <ValidateField class="input-vali" name="name"
                        ><label for="memoryButton">Dung lượng</label>
                        <InputText
                          class="input-class"
                          v-bind="memoryButtonAttrs"
                          v-model="memoryButton"
                          id="color"
                      /></ValidateField>
                    </div>
                    <span style="color: #d81221">{{
                      errors.memoryButton
                    }}</span>
                    <div class="p-field">
                      <ValidateField class="input-vali" name="name"
                        ><label for="notification">Trả góp</label>
                        <InputText
                          class="input-class"
                          v-bind="notificationAttrs"
                          v-model="notification"
                          id="color"
                      /></ValidateField>
                    </div>
                    <span style="color: #d81221">{{
                      errors.notification
                    }}</span>
                  </div>
                </div>
              </Form>
              <template #footer>
                <SubmitButton
                  label="Cancel"
                  text
                  severity="secondary"
                  @click="visible = false"
                  autofocus
                />
                <SubmitButton
                  label="Save"
                  outlined
                  severity="secondary"
                  @click.prevent="handleAddProduct"
                  autofocus
                />
              </template>
            </Dialog>
            <SubmitButton
              label="Add Product"
              @click="AddDialogVisible = true"
            />
          </div>
        </div>
        <div>
          <Dialog
            v-model:visible="editDialogVisible"
            header="Chỉnh sửa sản phẩm"
            modal
          >
            <form>
              <div class="formUpdate">
                <div class="name-1">
                  <div class="p-field">
                    <label for="name">Tên sản phẩm</label>
                    <InputText v-model="productBeingEdited.name" id="name" />
                  </div>
                  <div class="p-field">
                    <label for="image">Giá</label>
                    <InputText
                      v-model="productBeingEdited.instances[0].price"
                      id="image"
                    />
                  </div>

                  <div class="p-field">
                    <label for="color">Màu</label>
                    <InputText
                      v-model="productBeingEdited.instances[0].color"
                      id="color"
                    />
                  </div>
                  <div class="p-field">
                    <label for="SalePrice">Sale</label>
                    <InputText
                      v-model="productBeingEdited.instances[0].SalePrice"
                      id="SalePrice"
                    />
                  </div>
                </div>
                <div class="name-2">
                  <div class="p-field">
                    <label for="image">Hình ảnh</label>
                    <InputText
                      v-model="productBeingEdited.instances[0].img"
                      id="price"
                    />
                  </div>
                  <div class="p-field">
                    <label for="OriginalPrice">Giá Gốc</label>
                    <InputText
                      v-model="productBeingEdited.instances[0].OriginalPrice"
                      id="OriginalPrice"
                    />
                  </div>
                  <div class="p-field">
                    <label for="Discount">Giảm giá</label>
                    <InputText
                      v-model="productBeingEdited.instances[0].Discount"
                      id="Discount"
                    />
                  </div>

                  <div style="gap: 10px" class="p-field">
                    <label for="memoryButton">Dung lượng</label>
                    <InputText
                      v-model="productBeingEdited.memoryButton[0].name"
                      id="color"
                    />
                    <InputText
                      v-model="productBeingEdited.memoryButton[1].name"
                      id="color"
                    />
                    <InputText
                      v-model="productBeingEdited.memoryButton[2].name"
                      id="color"
                    />
                  </div>
                </div>
              </div>
            </form>
            <template #footer>
              <SubmitButton
                label="Cancel"
                text
                severity="secondary"
                @click="visible = false"
                autofocus
              />
              <SubmitButton
                label="Save"
                outlined
                severity="secondary"
                @click.prevent="handleUpdateProduct"
                autofocus
              />
            </template>
          </Dialog>
          <DataTable
            :paginator="true"
            :loading="loading"
            :rows="productStore.params._per_page"
            lazy
            :totalRecords="productStore.total"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 36]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            selectionMode="single"
            :value="productStore.products"
            tableStyle="min-width: 50rem"
            @page="onPage"
            @sort="onSort"
          >
            <TableColumn field="stt" header="STT" page="" style="width: 10rem">
              <template #body="{ index }">
                {{ computedIndex + index + 1 }}
              </template>
            </TableColumn>
            <TableColumn
              field="name"
              header="Tên Sản Phẩm"
              sortable
            ></TableColumn>

            <TableColumn field="price" header="Màu & Giá">
              <!-- eslint-disable-next-line vue/no-unused-vars -->
              <template #body="slotProps">
                <ul>
                  <li
                    v-for="instance in slotProps.data.instances"
                    :key="instance"
                  >
                    <img
                      class="imgTable"
                      :src="require('@/assets/tivi.png')"
                      alt="Ảnh Sản Phẩm"
                    />

                    {{ instance.color }} - {{ formatVND(instance.price) }} (Giá
                    gốc: {{ formatVND(instance.OriginalPrice) }}, Giảm giá:
                    {{ instance.SalePrice }},Trả góp:
                    {{ instance.notification }})
                  </li>
                </ul>
              </template>
            </TableColumn>

            <TableColumn field="main" header="Dung lượng bộ nhớ">
              <template #body="slotProps">
                <ul>
                  <li
                    v-for="storage in slotProps.data.memoryButton"
                    :key="storage"
                  >
                    {{ storage.name }}
                  </li>
                </ul>
              </template>
            </TableColumn>

            <!-- Actions: Vẫn giữ cột Hành động để thêm nút Sửa/Xóa -->
            <TableColumn field="Actions" header="Actions" style="width: 10rem">
              <template #body="{ data }">
                <ConfirmToast />
                <div class="flex flex-wrap gap-2">
                  <SubmitButton
                    :id="data.id"
                    @click="confirmDelete(data.id)"
                    label="Delete"
                    type="button"
                    icon="pi pi-trash"
                    style="background: rgb(255, 48, 48) !important"
                    rounded
                  />

                  <SubmitButton
                    @click="editProduct(data)"
                    label="Profile"
                    type="button"
                    icon="pi pi-user"
                    rounded
                    severity="success"
                    style="background: rgb(21, 171, 21) !important"
                  />
                </div>
              </template>
            </TableColumn>
          </DataTable>
          <ConfirmDialog />
        </div>
      </form>
    </CMSPage>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import CMSPage from "@/View/CMSPage.vue";
import { useProductStore } from "@/stores/index"; // Import store
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
const confirm = useConfirm();
const toast = useToast();
// const confirm = useConfirm();
// const toast = useToast();
// Function to format currency
function formatVND(amount) {
  if (typeof amount !== "number" || isNaN(amount)) {
    return "-";
  }
  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

// State variables using ref and reactive
const productStore = useProductStore();
const loading = ref(false);
const searchQuery = ref("");
const memoryButtonValue = ref(null);
const AddDialogVisible = ref(false);

const computedIndex = computed(() => {
  return (
    productStore.params._page * productStore.params._per_page -
    productStore.params._per_page
  );
  //return lazyParams.page * lazyParams.rows - lazyParams.rows;
});
// Action functions

let timoutID;
const debouncedSearch = () => {
  clearTimeout(timoutID);
  timoutID = setTimeout(() => 300);
};
watch([productStore.params.name], () => {
  debouncedSearch();
});

const resetFilters = () => {
  productStore.params.name = "";
  memoryButtonValue.value = null;
  productStore.params._page = 1;
  productStore.params._per_page = 10;
  productStore.params.price = null;
  productStore.params.color = null;
  productStore.params.SalePrice = null;

  productStore.fetchProducts({});
};

console.log("🚀 ~ resetFilters ~ resetFilters:", resetFilters);

const memoryButtonClick = () => {
  // Handle memoryButton filter logic
  // productStore.filterByGender(memoryButtonValue.value);
};

const onPage = (event) => {
  productStore.params._page = event.page + 1 || event;
  productStore.fetchProducts({});
};

const onSort = (event) => {
  // Update sorting parameters
  // lazyParams.sortField = event.sortField;
  // lazyParams.sortOrder = event.sortOrder;
  // productStore.sortProducts(lazyParams.sortField, lazyParams.sortOrder);
};

const editDialogVisible = ref(false); // Hiển thị hộp thoại chỉnh sửa
const productBeingEdited = ref(null); // Sản phẩm hiện đang được chỉnh sửa
const productBeingEditedId = ref(null);

// Hàm editProduct
const editProduct = (product) => {
  productBeingEdited.value = { ...product }; // Lưu sản phẩm cần chỉnh sửa vào state
  productBeingEditedId.value = product.id;
  editDialogVisible.value = true; // Hiển thị hộp thoại chỉnh sửa
};

// Hàm cập nhật sản phẩm
const handleUpdateProduct = async () => {
  console.log("handleUpdateProduct::", {
    productBeingEdited: productBeingEdited.value,
    productBeingEditedId: productBeingEditedId.value,
  });
  try {
    // Gọi API cập nhật sản phẩm
    // await productStore.handleUpdateProduct()(productBeingEdited.value);
    await productStore.updateProduct(
      productBeingEditedId.value,
      productBeingEdited.value
    );

    editDialogVisible.value = false; // Đóng hộp thoại sau khi cập nhật
    await productStore.fetchProducts(); // Lấy lại danh sách sản phẩm
  } catch (error) {
    console.error("Errorr:", error);
  }
};

const confirmDelete = (id) => {
  // Trigger delete confirmation dialog
  // productStore.deleteProduct();
  productStore.deleteProduct(id);
};

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    name: yup.string().required("name is required"),
    price: yup.number().required(),
    color: yup.string().required(),
    OriginalPrice: yup.number().required(),
    SalePrice: yup.string().required(),
    Discount: yup.number().required(),
    memoryButton: yup.string().required(),
    image: yup.string().required(),
    notification: yup.string().required(),
  }),
});

const handleAddProduct = handleSubmit((values) => {
  console.log("🚀 ~ handleAddProduct ~ values:", values);
  confirm.require({
    message: "Do you want to Add this record?",
    header: "Add Employeee",
    icon: "pi pi-info-circle",
    rejectLabel: "Cancel",
    acceptLabel: "Add",
    rejectClass: "p-button-secondary p-button-outlined",
    acceptClass: "p-button-danger",
    accept: async () => {
      toast.add({
        severity: "info",
        summary: "Confirmed",
        detail: "Record deleted",
        life: 3000,
      });
      const req = {
        name: values.name,
        memoryButton: [
          {
            name: values.name,
            value: values.value,
          },
        ],
        instances: [
          {
            price: values.price,
            image: values.image,
            color: values.color,
            OriginalPrice: values.OriginalPrice,
            SalePrice: values.SalePrice,
            Discount: values.Discount,
            notification: values.notification,
          },
        ],
      };

      if (req) {
        try {
          await productStore.addProduct(req);

          AddDialogVisible.value = true;
        } catch (error) {
          console.error("lỗi data", { error });
        }
        AddDialogVisible.value = false;
      } else {
        alert("Add Thất bại");
      }
    },
    reject: () => {
      toast.add({
        severity: "error",
        summary: "Rejected",
        detail: "You have rejected",
        life: 3000,
      });
    },
  });
});

const [name, nameAttrs] = defineField("name");
const [price, priceAttrs] = defineField("price");
const [color, colorAttrs] = defineField("color");
const [OriginalPrice, OriginalPriceAttrs] = defineField("OriginalPrice");
const [SalePrice, SalePriceAttrs] = defineField("SalePrice");
const [Discount, DiscountAttrs] = defineField("Discount");
const [memoryButton, memoryButtonAttrs] = defineField("memoryButton");
const [image, imageAttrs] = defineField("image");
const [notification, notificationAttrs] = defineField("notification");
// const handleAddProduct = handleSubmit((values) => {
//   AddDialogVisible.value = false;
//   console.log(
//     "🚀 ~ handleAddProduct ~ AddDialogVisible:",
//     AddDialogVisible.value
//   );
// });

// On component mount, fetch initial product list
onMounted(async () => {
  onPage(1, 10);
});
</script>

<style scoped>
.formCms {
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
}
.imgTable {
  width: 5%;
  object-fit: contain;
}
ul li {
  list-style-type: none;
}
.formUpdate {
  display: flex;
  gap: 30px;
}
.name-1 {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.name-1 .p-field {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.name-1 .p-field .input-vali {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.name-2 {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.name-2 .p-field {
  width: 100%;
  display: flex;

  flex-direction: column;
}
.name-2 .p-field .input-vali {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
