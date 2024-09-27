<template>
  <div>
    <div class="product-item">
      <router-link to="/"
        ><img src="../assets/fptshop_logo_c5ac91ae46.png" alt="Product Image"
      /></router-link>

      <div class="content-header">
        <SubmitButton
          class="sidebarSubmit"
          label="Danh mục"
          icon="pi pi-align-left"
        />
        <div class="iconSearch">
          <IconField class="iconContent">
            <InputText
              class="searchContent"
              @keyup.enter="debouncedSearch()"
              placeholder="Nhập tên điện thoại, máy tính, phụ kiện...cần tìm"
            />
            <InputIcon />
          </IconField>
        </div>
      </div>

      <div class="content-footer">
        <SubmitButton
          class="userLogin"
          icon="pi pi-user"
          severity="info"
          rounded
          aria-label="User"
        />
        <SubmitButton
          class="addCart"
          label="Giỏ hàng"
          icon="pi pi-cart-arrow-down"
        />
      </div>
      <div class="listProducts">
        <ul class="ulList">
          <li><router-link to="#">laptop</router-link></li>
          <li>
            <router-link to="/iphone16">iphone16</router-link>
          </li>
          <li><router-link to="#">iphone</router-link></li>
          <li><router-link to="#">hyperword</router-link></li>
          <li><router-link to="#">samsung</router-link></li>
          <li><router-link to="#">macbook</router-link></li>
          <li><router-link to="#">a15</router-link></li>
          <li><router-link to="#">iphone13</router-link></li>
          <li><router-link to="#">dell</router-link></li>
        </ul>
      </div>
    </div>
    <div class="SaleDefault">
      <a to="#">
        <div>
          <img src="../assets/Live_dcc0f0e59e.png" alt="Error img" />
        </div>
        <div>
          <span>Săn ngay iPhone 15 Pro Max từ 28,58 triệu</span>
        </div>
      </a>

      <a to="#">
        <div>
          <img src="../assets/6_dac_quyen_81f00d4dc1.png" alt="Error img" />
        </div>

        <div>
          <span> 1 điểm đến 6 đặc quyền</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.product-item {
  background: linear-gradient(5deg, #cb1c22 67.61%, #d9503f 95.18%);
  padding: 20px 40px 40px 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
}
.content-header {
  display: flex;
  align-items: center;
}
.iconSearch {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-footer {
  width: 245px;
  height: 44px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.sidebarSubmit {
  width: 142px;
  height: 44px;
  background-color: #090d1466;
  border-radius: 1.5rem;
  font-weight: 500;
  padding: 0.625rem 1rem;
  display: flex;
  justify-content: space-around;
  color: white;
}
.sidebarSubmit:hover {
  background-color: #090d1466 !important;
  color: white !important;
}
.searchContent {
  background: whitesmoke;
  width: 360px;
  height: 44px;
  border-radius: 20px;
  align-items: center;
  padding-left: 5px;
  color: #a9a9a9;
  font-size: 14px;
}
.iconContent {
  margin-left: 50px;
  background: whitesmoke;
  width: 360px;
  height: 44px;
  border-radius: 20px;
  align-items: center;
}
.p-inputicon {
  top: 50% !important;
}
.p-button.p-component.p-button-icon-only.p-button-warn {
  border-radius: 50%;
}
.userLogin {
  background: #7d161c;
  border: 0;
  border-radius: 50%;
  padding: 10px;
  color: aliceblue;
  height: 2.75rem;
  width: 2.75rem;
}
.addCart {
  width: 142px;
  height: 44px;
  border-radius: 1.5rem;
  font-weight: 500;
  padding: 0.625rem 1rem;
  display: flex;
  justify-content: space-around;
  color: white;
  background: #090d14;
}

.listProducts {
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 40%;
}

.ulList {
  column-gap: 0.75rem !important;
  display: flex;
  align-items: center;
  list-style-type: none;
  padding-left: 0;
}
.ulList li a {
  padding: 5px 0;
  text-decoration: none;
  color: aliceblue;
}
.ulList li a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.SaleDefault {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  background-color: aliceblue;
}

.SaleDefault a {
  height: 44px;
  align-items: center;
  text-decoration: none;
  color: #090d14;
  display: flex;
}
</style>
