<template>
  <div v-if="slotProps.data.isColumn" class="MoreProduct">
    <a href="#" style="text-decoration: none; color: black">
      <h3>{{ slotProps.data.items[0].title }}</h3>
      <img :src="slotProps.data.items[0].img" />
    </a>
  </div>

  <div v-else class="itemInclude">
    <div v-for="item in slotProps.data.items" :key="item.id" class="itemlager">
      <a href="#">
        <h3>{{ item.title }}</h3>
        <img :src="item.img" :alt="item.title" />
      </a>
    </div>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-undef
defineProps({
  slotProps: Object,
});
</script>
<style scoped>
.MoreProduct {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 251.2px;

  border-radius: 20px;
}
.MoreProduct a h3 {
  font-size: 16px !important;
  line-height: 24px !important;
  font-weight: 600 !important;
  padding: 1rem;
  padding-bottom: 0;
  margin-bottom: 12px;
}
.itemInclude {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 251.2px;
  padding: 10px 0 0 0.5rem;
  border-radius: 20px;
  margin-left: 10px;
}
.itemInclude img {
  height: 100px;
}
.itemlager {
  top: 0;
  width: 216px;
  background-color: #fff;
  border-radius: 1rem;
  margin-top: 20px;
  padding-bottom: 0.625rem;
  padding-top: 0;
}
.itemlager:first-child {
  padding-top: 0;
}
.itemlager a {
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 16px;
}
.itemlager a h3 {
  max-height: 84px !important;
  padding: 16px 16px 0 16px;
}
.itemSmall {
  width: 216px;
  background-color: #fff;
  border-radius: 1rem;
  padding-bottom: 0.625rem;
}
.itemSmall a {
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 16px;
}
.itemSmall a h3 {
  max-height: 84px !important;
  padding: 16px 16px 0 16px;
}
</style>
