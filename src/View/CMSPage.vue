<template>
  <div>
    <div class="Container">
      <div class="main-body">
        <div class="card flex justify-center">
          <Listbox
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            class="w-full md:w-56"
          />
        </div>
        <div class="right_side" style="width: 100%">
          <div class="Bar">appbar</div>
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const selectedCity = ref(null);
const cities = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Product",
    to: "/product",
  },
  {
    name: "Logout",
    to: "/logout",
  },
];

watch(
  selectedCity,
  (newVal) => {
    if (newVal) {
      console.log(newVal);
      router.push(newVal);
    }
  },
  { deep: true }
);
</script>
<style lang="css" scoped>
.main-body {
  padding: 10px;
  display: flex;
  gap: 20px;
}

.main-body .sidebar {
  width: 20vw;
}
.appBar {
  width: 100%;
  height: 60px;
}
.Bar {
  width: 100%;
  height: 66px;
  display: flex;
  padding: 4px 16px;
  background: #cccccc;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  align-items: center;
  border-bottom: 1px solid #666666;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
}
</style>
