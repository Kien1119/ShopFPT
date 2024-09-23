<template>
  <div>
    <CMSPage>
      <h1>Product</h1>
      <form>
        <div class="formCms">
          <InputGroup>
            <SubmitButton
              @click="handleSearch"
              icon="pi pi-search"
              severity="search"
            />
            <InputText
              size="small"
              placeholder="Search...."
              v-model="searchQuery"
              @keyup.enter="debouncedSearch"
            />
            <SubmitButton
              icon="pi pi-times"
              severity="danger"
              @click="resetFilters"
            />
          </InputGroup>
          <div class="addEmployee">
            <div class="card flex justify-content-center">
              <SelectButton
                @click="genderClick"
                v-model="genderValue"
                aria-labelledby="basic"
              />
            </div>
            <SubmitButton label="Add Employment" @click="visible = true" />
          </div>
        </div>
        <div>
          <DataTable
            :paginator="true"
            :loading="loading"
            :rows="lazyParams.rows"
            lazy
            :totalRecords="totalRecords"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 25]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            selectionMode="single"
            scrollable
            scrollHeight="600px"
            :value="filteredData"
            tableStyle="min-width: 50rem"
            @page="onPage"
            @sort="onSort"
          >
            <TableColumn
              field="title"
              header="Tên Sản Phẩm"
              sortable
            ></TableColumn>

            <TableColumn header="Màu & Giá" v-slot="slotProps">
              <ul>
                <li
                  v-for="instance in slotProps.data.intances"
                  :key="instance.color"
                >
                  <img
                    :src="instance.img"
                    alt="Ảnh Sản Phẩm"
                    style="width: 50px"
                  />
                  {{ instance.color }} - {{ formatPrice(instance.price) }} (Giá
                  gốc: {{ formatPrice(instance.original) }}, Giảm giá:
                  {{ instance.sale }})
                </li>
              </ul>
            </TableColumn>

            <TableColumn header="Dung lượng bộ nhớ" v-slot="slotProps">
              <ul>
                <li v-for="storage in slotProps.data.storages" :key="storage">
                  {{ storage }}
                </li>
              </ul>
            </TableColumn>

            <!-- Actions: Vẫn giữ cột Hành động để thêm nút Sửa/Xóa -->
            <TableColumn header="Hành động">
              <SubmitButton label="Sửa" @click="editProduct(slotProps.data)" />
              <SubmitButton
                label="Xóa"
                class="p-button-danger"
                @click="confirmDelete(slotProps.data)"
              />
            </TableColumn>
            <!-- <TableColumn field="stt" header="STT" style="width: 10rem">
              <template #body="{ index }">
                {{ computedIndex + index + 1 }}
              </template>
            </TableColumn>
            <TableColumn sortable field="title" header="Title" />
            <TableColumn sortable field="lastName" header="Last Name" />
            <TableColumn sortable field="email" header="Email" />
            <TableColumn sortable field="phone" header="Phone" />
            <TableColumn sortable field="gender" header="Gender" />
            <TableColumn sortable field="height" header="Height" />
            <TableColumn sortable field="weight" header="Weight" />
            <TableColumn sortable field="age" header="Age" />
            <TableColumn field="Actions" header="Actions" style="width: 10rem">
              <template #body="{ data }">
                <ConfirmToast />
                <div class="flex flex-wrap gap-2">
                  <SubmitButton
                    :id="data.id"
                    @click="deleData(data.id)"
                    label="Delete"
                    type="button"
                    icon="pi pi-trash"
                    rounded
                  />
                  <SubmitButton
                    @click="submitProfile(data)"
                    label="Profile"
                    type="button"
                    icon="pi pi-user"
                    rounded
                    severity="success"
                    style="background: rgb(21, 171, 21) !important"
                  />
                </div>
              </template>
            </TableColumn> -->
          </DataTable>
          <ConfirmDialog />
        </div>
      </form>
    </CMSPage>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import CMSPage from "@/View/CMSPage.vue";
import { useProductStore } from "@/stores/index"; // Import store
import axios from "axios";

// Biến reactive và ref
const productStore = useProductStore();
const loading = ref(false);
const totalRecords = ref(100); // Tổng số bản ghi
const searchQuery = ref("");
const genderValue = ref(null);
const visible = ref(false);
const products = ref([]);

const lazyParams = reactive({
  page: 0,
  rows: 5,
  sortField: null,
  sortOrder: null,
});

// Các hàm xử lý
const handleSearch = () => {
  console.log("Tìm kiếm:", searchQuery.value);
};

const debouncedSearch = () => {
  // Logic tìm kiếm debounce
  console.log("Đã gọi tìm kiếm debounce:", searchQuery.value);
};

const resetFilters = () => {
  searchQuery.value = "";
  genderValue.value = null;
  console.log("Đã reset bộ lọc");
};

const genderClick = () => {
  console.log("Chọn giới tính:", genderValue.value);
};

const onPage = (event) => {
  lazyParams.page = event.page;
  lazyParams.rows = event.rows;
  console.log("Chuyển trang:", event);
};

const onSort = (event) => {
  lazyParams.sortField = event.sortField;
  lazyParams.sortOrder = event.sortOrder;
  console.log("Sắp xếp:", event);
};

const editProduct = (id) => {
  console.log("Xóa dữ liệu có ID:", id);
};

const confirmDelete = (data) => {
  console.log("Hiển thị profile:", data);
};
onMounted(async () => {
  await productStore.fetchProducts(); // Gọi API từ store
  products.value = productStore.products; // Lưu dữ liệu vào biến products
});
</script>

<style scoped>
.formCms {
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
}
</style>
