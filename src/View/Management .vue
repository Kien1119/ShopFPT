<template>
  <div class="body">
    <div class="Management">
      <div class="contenManagent">
        <div class="checkedProduct">
          <div class="checkAll">
            <Checkbox
              v-model="pizza"
              inputId="ingredient1"
              name="pizza"
              value="Cheese"
            />
            <label for="ingredient1" class="ml-2">
              {{ `Chọn tất cả ($})` }}
            </label>
          </div>
          <div class="rusbish">
            <button style="border: none; background: #fff; cursor: pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="var(--neutral-gray-5)"
              >
                <path
                  d="M8.5 4H11.5C11.5 3.17157 10.8284 2.5 10 2.5C9.17157 2.5 8.5 3.17157 8.5 4ZM7.5 4C7.5 2.61929 8.61929 1.5 10 1.5C11.3807 1.5 12.5 2.61929 12.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H16.4456L15.2521 15.3439C15.0774 16.8576 13.7957 18 12.2719 18H7.72813C6.20431 18 4.92256 16.8576 4.7479 15.3439L3.55437 5H2.5C2.22386 5 2 4.77614 2 4.5C2 4.22386 2.22386 4 2.5 4H7.5ZM5.74131 15.2292C5.85775 16.2384 6.71225 17 7.72813 17H12.2719C13.2878 17 14.1422 16.2384 14.2587 15.2292L15.439 5H4.56101L5.74131 15.2292ZM8.5 7.5C8.77614 7.5 9 7.72386 9 8V14C9 14.2761 8.77614 14.5 8.5 14.5C8.22386 14.5 8 14.2761 8 14V8C8 7.72386 8.22386 7.5 8.5 7.5ZM12 8C12 7.72386 11.7761 7.5 11.5 7.5C11.2239 7.5 11 7.72386 11 8V14C11 14.2761 11.2239 14.5 11.5 14.5C11.7761 14.5 12 14.2761 12 14V8Z"
                  fill="inherit"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="checkItem">
          <div class="productCheck">
            <div class="userCheck">
              <div class="check">
                <Checkbox
                  v-model="pizza"
                  inputId="ingredient1"
                  name="pizza"
                  value="Cheese"
                />
              </div>
              <div class="imgItem">
                <img src="../assets/a1.jpg" alt="" />
              </div>
            </div>
            <div class="contentProduct">
              <div class="titleItem">
                <span>iPhone 15 Pro 128GB Titan Tự nhiên MTUX3VN/A</span>

                <Select
                  v-model="selectedCity"
                  :options="colors"
                  showClear
                  optionLabel="name"
                  class="colorTel"
                  placeholder="Màu sắc"
                >
                </Select>
              </div>
              <div class="priceItem">
                <div class="priceBuy">
                  <div class="buy">
                    <span>{{ formatVND(24990000) }}</span>
                  </div>
                  <div class="original">
                    <span>{{ formatVND(28990000) }}</span>
                  </div>
                </div>
                <div class="countItem">
                  <InputGroup>
                    <SubmitButton icon="pi pi-plus" severity="success" />
                    <InputText placeholder="1" />
                    <submitButton icon="pi pi-minus" severity="danger" />
                  </InputGroup>
                </div>
                <div class="rush">
                  <button
                    style="border: none; background: #fff; cursor: pointer"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="var(--neutral-gray-5)"
                    >
                      <path
                        d="M8.5 4H11.5C11.5 3.17157 10.8284 2.5 10 2.5C9.17157 2.5 8.5 3.17157 8.5 4ZM7.5 4C7.5 2.61929 8.61929 1.5 10 1.5C11.3807 1.5 12.5 2.61929 12.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H16.4456L15.2521 15.3439C15.0774 16.8576 13.7957 18 12.2719 18H7.72813C6.20431 18 4.92256 16.8576 4.7479 15.3439L3.55437 5H2.5C2.22386 5 2 4.77614 2 4.5C2 4.22386 2.22386 4 2.5 4H7.5ZM5.74131 15.2292C5.85775 16.2384 6.71225 17 7.72813 17H12.2719C13.2878 17 14.1422 16.2384 14.2587 15.2292L15.439 5H4.56101L5.74131 15.2292ZM8.5 7.5C8.77614 7.5 9 7.72386 9 8V14C9 14.2761 8.77614 14.5 8.5 14.5C8.22386 14.5 8 14.2761 8 14V8C8 7.72386 8.22386 7.5 8.5 7.5ZM12 8C12 7.72386 11.7761 7.5 11.5 7.5C11.2239 7.5 11 7.72386 11 8V14C11 14.2761 11.2239 14.5 11.5 14.5C11.7761 14.5 12 14.2761 12 14V8Z"
                        fill="inherit"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="guaranteeProduct">
            <div class="guaranteeItem">
              <div class="titleGuarantee">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Shield Keyhole">
                    <path
                      id="Shape"
                      d="M8.27735 0.0839749C8.1094 -0.0279916 7.8906 -0.0279916 7.72265 0.0839749C5.78446 1.3761 3.68833 2.1823 1.42929 2.50503C1.18296 2.54021 1 2.75117 1 3V7.5C1 11.3913 3.30699 14.2307 7.82051 15.9667C7.93605 16.0111 8.06395 16.0111 8.17949 15.9667C12.693 14.2307 15 11.3913 15 7.5V3C15 2.75117 14.817 2.54021 14.5707 2.50503C12.3117 2.1823 10.2155 1.3761 8.27735 0.0839749ZM9.5 7C9.5 7.65311 9.0826 8.20873 8.5 8.41465V10.5C8.5 10.7761 8.27614 11 8 11C7.72386 11 7.5 10.7761 7.5 10.5V8.41465C6.9174 8.20873 6.5 7.65311 6.5 7C6.5 6.17157 7.17157 5.5 8 5.5C8.82843 5.5 9.5 6.17157 9.5 7Z"
                      fill="url(#paint0_linear_95_14735)"
                    ></path>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_95_14735"
                      x1="8"
                      y1="0"
                      x2="8"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E10202"></stop>
                      <stop offset="1" stop-color="#FF9B9B"></stop>
                    </linearGradient>
                  </defs>
                </svg>

                <span style="margin: 0">Chọn gói bảo hành</span>
              </div>
              <div class="title">
                <div class="title1">
                  <Checkbox
                    v-model="pizza"
                    inputId="ingredient1"
                    name="pizza"
                    value="Cheese"
                  />
                  <label for="ingredient1" class="ml-2">
                    Đặc quyền bảo hành 1 đổi 1 (BT)
                  </label>
                  <span class="priceGuarantee">{{ formatVND(1500000) }}</span>
                  <span class="priceOriginal">{{ formatVND(1300000) }}</span>
                </div>
                <div class="title2">
                  <Checkbox
                    v-model="pizza"
                    inputId="ingredient1"
                    name="pizza"
                    value="Cheese"
                  />
                  <label for="ingredient1" class="ml-2">
                    Đặc quyền bảo hành 1 đổi 1 (BT)
                  </label>
                  <span class="priceGuarantee">{{ formatVND(1500000) }}</span>
                  <span class="priceOriginal">{{ formatVND(1300000) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="payProduct">
        <div class="presentProduct">
          <div class="present">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="var(--neutral-gray-900)"
            >
              <path
                d="M12 2C13.3807 2 14.5 3.11929 14.5 4.5C14.5 5.06324 14.3137 5.58297 13.9995 6.00097L16 6C16.5523 6 17 6.44772 17 7V10C17 10.5523 16.5523 11 16 11V15.5C16 16.8807 14.8807 18 13.5 18H6.5C5.11929 18 4 16.8807 4 15.5V11C3.44772 11 3 10.5523 3 10V7C3 6.44772 3.44772 6 4 6L6.00055 6.00097C5.68626 5.58297 5.5 5.06324 5.5 4.5C5.5 3.11929 6.61929 2 8 2C8.81839 2 9.54493 2.39323 10.001 3.00106C10.4551 2.39323 11.1816 2 12 2ZM9.5 11H5V15.5C5 16.3284 5.67157 17 6.5 17H9.5V11ZM15 11H10.5V17H13.5C14.3284 17 15 16.3284 15 15.5V11ZM9.5 7H4V10H9.5V7ZM16 7H10.5V10H16V7ZM12 3C11.1716 3 10.5 3.67157 10.5 4.5V6H12C12.8284 6 13.5 5.32843 13.5 4.5C13.5 3.67157 12.8284 3 12 3ZM8 3C7.17157 3 6.5 3.67157 6.5 4.5C6.5 5.2797 7.09489 5.92045 7.85554 5.99313L8 6H9.5V4.5L9.49313 4.35554C9.42045 3.59489 8.7797 3 8 3Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Quà tặng</span>
          </div>
          <div class="seenProduct">
            <p class="seen">xem quà(1)</p>
          </div>
        </div>
        <div class="payCategory">
          <div class="contentPay">
            <p style="font-size: 16px; font-weight: 700; color: #090d14">
              Thông tin đơn hàng
            </p>

            <div class="Total">
              <p>Tổng tiền</p>
              <span>{{ formatVND(289000000) }}</span>
            </div>
            <div class="sale">
              <p>Tổng khuyến mại</p>
              <span>{{ formatVND(4000000) }}</span>
            </div>
            <div class="transport">
              <p>Phí vận chuyển</p>
              <span style="color: #090d14; font-size: 12px">Miễn phí</span>
            </div>
            <div class="payment">
              <p>Cần thanh toán</p>
              <span>{{ formatVND(24800000) }}</span>
            </div>
            <div class="diem">
              <p>Điểm thưởng</p>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1280_11158)">
                    <path
                      d="M8 16.0545C12.4183 16.0545 16 12.5725 16 8.27723C16 3.98199 12.4183 0.5 8 0.5C3.58172 0.5 0 3.98199 0 8.27723C0 12.5725 3.58172 16.0545 8 16.0545Z"
                      fill="url(#paint0_linear_1280_11158)"
                    ></path>
                    <path
                      d="M8.00056 14.7583C11.6824 14.7583 14.6671 11.8566 14.6671 8.27733C14.6671 4.698 11.6824 1.79639 8.00056 1.79639C4.31871 1.79639 1.33398 4.698 1.33398 8.27733C1.33398 11.8566 4.31871 14.7583 8.00056 14.7583Z"
                      fill="url(#paint1_linear_1280_11158)"
                    ></path>
                    <path
                      opacity="0.5"
                      d="M8.00056 14.7583C11.6824 14.7583 14.6671 11.8566 14.6671 8.27733C14.6671 4.698 11.6824 1.79639 8.00056 1.79639C4.31871 1.79639 1.33398 4.698 1.33398 8.27733C1.33398 11.8566 4.31871 14.7583 8.00056 14.7583Z"
                      fill="url(#paint2_linear_1280_11158)"
                      style="mix-blend-mode: multiply"
                    ></path>
                    <g opacity="0.7" style="mix-blend-mode: overlay">
                      <path
                        d="M12.7745 3.75661C13.9442 4.92424 14.6661 6.51845 14.6661 8.27709C14.6661 11.8566 11.6813 14.758 7.99957 14.758C6.19028 14.758 4.55068 14.0565 3.34961 12.919C4.56057 14.1278 6.25179 14.8795 8.12479 14.8795C11.8068 14.8795 14.7914 11.9778 14.7914 8.39856C14.7914 6.57798 14.0181 4.93385 12.7747 3.75635L12.7745 3.75661Z"
                        fill="white"
                      ></path>
                    </g>
                    <path
                      d="M1.70908 8.52025C1.70908 4.94076 4.69391 2.03931 8.37565 2.03931C9.65526 2.03931 10.85 2.39034 11.8649 2.99792C10.7745 2.24219 9.44162 1.79639 8.00056 1.79639C4.31854 1.79639 1.33398 4.6981 1.33398 8.27733C1.33398 10.6128 2.60535 12.6593 4.5113 13.7999C2.81569 12.6248 1.70908 10.6988 1.70908 8.52051V8.52025Z"
                      fill="url(#paint3_linear_1280_11158)"
                      style="mix-blend-mode: multiply"
                    ></path>
                    <path
                      opacity="0.9"
                      d="M8.00005 8.88468C10.5516 8.88468 12.8766 8.39429 14.629 7.58972C14.2759 4.3335 11.4429 1.7959 8.00005 1.7959C4.5572 1.7959 1.72422 4.33376 1.37109 7.58998C3.12355 8.39456 5.4488 8.88468 8.00005 8.88468Z"
                      fill="url(#paint4_radial_1280_11158)"
                      style="mix-blend-mode: overlay"
                    ></path>
                    <path
                      opacity="0.9"
                      d="M14.223 12.7945C14.5992 13.6332 13.2762 15.0034 11.2681 15.8547C9.25969 16.706 7.32683 16.7162 6.95063 15.8774C6.57444 15.0387 7.89743 13.6684 9.90553 12.8171C11.9139 11.9659 13.8468 11.9554 14.223 12.7945Z"
                      fill="url(#paint5_radial_1280_11158)"
                      style="mix-blend-mode: overlay"
                    ></path>
                    <path
                      opacity="0.9"
                      d="M3.21573 2.94487C3.86926 2.31007 4.40828 1.68408 4.75647 1.18115C3.0842 1.90218 1.7148 3.1635 0.880859 4.73795C1.43828 4.47982 2.31835 3.81699 3.21573 2.94487Z"
                      fill="url(#paint6_radial_1280_11158)"
                      style="mix-blend-mode: overlay"
                    ></path>
                    <path
                      d="M4.21416 11.9496C4.05819 11.8086 4.03568 11.7806 3.91211 11.6292C4.07275 11.0932 4.6115 10.6162 4.77351 10.0807C4.86742 9.77048 4.95447 9.45789 5.06293 9.1525C5.25624 8.60793 5.64891 8.26811 6.22501 8.1301C6.3818 8.09272 6.54189 8.09432 6.70198 8.09432C7.76712 8.09486 8.87319 7.78547 9.93943 7.77746C9.95371 7.77746 9.97238 7.76731 9.98199 7.77746C10.1212 7.92348 10.1816 7.97607 10.2961 8.09699C10.2961 8.09699 10.2975 8.09486 10.2956 8.15038C10.2824 8.53158 10.1731 8.88475 9.95536 9.20242C9.63463 9.67091 9.18842 9.96322 8.62111 10.0751C8.50276 10.0983 8.38002 10.1087 8.25892 10.1098C7.82781 10.1138 7.39642 10.1119 6.96531 10.1103C6.92742 10.1103 6.91369 10.1221 6.90353 10.1562C6.81758 10.4475 6.72916 10.7379 6.64184 11.0286C6.54518 11.3497 6.34034 11.59 6.05366 11.7675C5.80296 11.9229 5.52617 12.0064 5.23208 12.0401C4.90504 12.0777 4.58322 12.0491 4.26579 11.9664C4.24958 11.9621 4.23393 11.956 4.21389 11.9496H4.21416Z"
                      fill="url(#paint7_linear_1280_11158)"
                    ></path>
                    <path
                      d="M12.3891 5.43215C12.3397 5.5392 12.2947 5.63744 12.2491 5.7354C12.12 6.01276 12.0014 6.29519 11.8597 6.56614C11.5739 7.11392 11.1189 7.45614 10.4953 7.57547C10.3909 7.59549 10.2827 7.60403 10.1762 7.6043C8.66702 7.60617 7.15758 7.60563 5.64842 7.60563H5.60091C5.60091 7.55518 5.29529 7.33201 5.29886 7.2853C5.33593 6.79038 5.81702 6.52717 6.15312 6.15184C6.47165 5.796 6.86926 5.56883 7.34458 5.47219C7.49396 5.44176 7.64553 5.43242 7.79793 5.43242C9.30984 5.43215 10.5754 5.11182 12.0874 5.11182C12.103 5.11182 12.3647 5.43215 12.3894 5.43215H12.3891Z"
                      fill="url(#paint8_linear_1280_11158)"
                    ></path>
                    <path
                      d="M3.91266 11.6292C3.93902 11.5403 3.96401 11.4541 3.98982 11.3681C4.15046 10.8321 4.30999 10.2958 4.47201 9.76029C4.56592 9.4501 4.65296 9.1375 4.76143 8.83211C4.95474 8.28754 5.34741 7.94772 5.92351 7.80971C6.0803 7.77233 6.24039 7.77394 6.40047 7.77394C7.47963 7.77447 8.55905 7.77447 9.6382 7.77474C9.7387 7.77474 9.8392 7.7742 9.93971 7.7742C9.99517 7.7742 9.99572 7.7742 9.9938 7.82973C9.98062 8.21093 9.87133 8.5641 9.65358 8.88177C9.33286 9.35026 8.88664 9.64256 8.31933 9.75442C8.20098 9.77764 8.07824 9.78805 7.95714 9.78912C7.52603 9.79312 7.09465 9.79125 6.66353 9.78965C6.62564 9.78965 6.61191 9.8014 6.60175 9.83557C6.5158 10.1268 6.42738 10.4172 6.34006 10.7079C6.24341 11.0291 6.03856 11.2693 5.75188 11.4469C5.50118 11.6022 5.22439 11.6858 4.9303 11.7194C4.60326 11.7571 4.28144 11.7285 3.96401 11.6457C3.94781 11.6415 3.93215 11.6353 3.91211 11.6289L3.91266 11.6292Z"
                      fill="#FFF8AB"
                    ></path>
                    <path
                      d="M12.0863 5.11182C12.0369 5.21886 11.9918 5.3171 11.9462 5.41507C11.8172 5.69243 11.6986 5.97486 11.5569 6.24581C11.271 6.79358 10.816 7.13581 10.1924 7.25513C10.0881 7.27515 9.97988 7.2837 9.87334 7.28396C8.36418 7.28583 6.85501 7.2853 5.34557 7.2853H5.29807C5.29807 7.23485 5.29505 7.18786 5.29862 7.14115C5.33569 6.64623 5.51417 6.20683 5.85028 5.83151C6.1688 5.47567 6.56641 5.24849 7.04174 5.15186C7.19111 5.12143 7.34269 5.11208 7.49509 5.11208C9.007 5.11182 10.5189 5.11208 12.0308 5.11208C12.0465 5.11208 12.0618 5.11208 12.0866 5.11208L12.0863 5.11182Z"
                      fill="#FFF8AB"
                    ></path>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1280_11158"
                      x1="-2.22915"
                      y1="15.4071"
                      x2="19.4269"
                      y2="-0.56462"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#CDA837"></stop>
                      <stop offset="0.2" stop-color="#F4BB19"></stop>
                      <stop offset="0.35" stop-color="#FBE370"></stop>
                      <stop offset="0.52" stop-color="#FED71A"></stop>
                      <stop offset="0.82" stop-color="#DE9827"></stop>
                      <stop offset="1" stop-color="#FCCF1A"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1280_11158"
                      x1="-1.27136"
                      y1="14.7401"
                      x2="16.7753"
                      y2="1.43029"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FCCF1A"></stop>
                      <stop offset="0.18" stop-color="#DE9827"></stop>
                      <stop offset="0.48" stop-color="#FED71A"></stop>
                      <stop offset="0.65" stop-color="#FBE370"></stop>
                      <stop offset="0.8" stop-color="#F4BB19"></stop>
                      <stop offset="1" stop-color="#CDA837"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1280_11158"
                      x1="-1.41964"
                      y1="1.08978"
                      x2="13.9279"
                      y2="13.4805"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FBE370" stop-opacity="0"></stop>
                      <stop
                        offset="0.39"
                        stop-color="#FAE26F"
                        stop-opacity="0"
                      ></stop>
                      <stop
                        offset="0.53"
                        stop-color="#F9E06D"
                        stop-opacity="0.04"
                      ></stop>
                      <stop
                        offset="0.63"
                        stop-color="#F6DD6A"
                        stop-opacity="0.1"
                      ></stop>
                      <stop
                        offset="0.71"
                        stop-color="#F2D865"
                        stop-opacity="0.18"
                      ></stop>
                      <stop
                        offset="0.78"
                        stop-color="#EDD15F"
                        stop-opacity="0.29"
                      ></stop>
                      <stop
                        offset="0.84"
                        stop-color="#E7CA57"
                        stop-opacity="0.42"
                      ></stop>
                      <stop
                        offset="0.9"
                        stop-color="#E0C04E"
                        stop-opacity="0.58"
                      ></stop>
                      <stop
                        offset="0.95"
                        stop-color="#D7B544"
                        stop-opacity="0.76"
                      ></stop>
                      <stop
                        offset="0.99"
                        stop-color="#CEAA38"
                        stop-opacity="0.97"
                      ></stop>
                      <stop offset="1" stop-color="#CDA837"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_1280_11158"
                      x1="-2.35573"
                      y1="13.0533"
                      x2="15.2003"
                      y2="0.105473"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FCCF1A"></stop>
                      <stop offset="0.18" stop-color="#DE9827"></stop>
                      <stop offset="0.48" stop-color="#FED71A"></stop>
                      <stop offset="0.65" stop-color="#FBE370"></stop>
                      <stop offset="0.8" stop-color="#F4BB19"></stop>
                      <stop offset="1" stop-color="#CDA837"></stop>
                    </linearGradient>
                    <radialGradient
                      id="paint4_radial_1280_11158"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(8.00005 18.0188) scale(14.8753 14.4611)"
                    >
                      <stop stop-color="white"></stop>
                      <stop
                        offset="1"
                        stop-color="white"
                        stop-opacity="0"
                      ></stop>
                    </radialGradient>
                    <radialGradient
                      id="paint5_radial_1280_11158"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(10.5145 14.6033) rotate(-22.9728) scale(3.91664 1.63254)"
                    >
                      <stop stop-color="white"></stop>
                      <stop
                        offset="0.88"
                        stop-color="white"
                        stop-opacity="0"
                      ></stop>
                    </radialGradient>
                    <radialGradient
                      id="paint6_radial_1280_11158"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(2.48031 2.6312) rotate(-41.6154) scale(2.77513 0.857768)"
                    >
                      <stop stop-color="white"></stop>
                      <stop
                        offset="1"
                        stop-color="white"
                        stop-opacity="0"
                      ></stop>
                    </radialGradient>
                    <linearGradient
                      id="paint7_linear_1280_11158"
                      x1="9.01707"
                      y1="11.7315"
                      x2="3.64611"
                      y2="6.20667"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FCCF1A"></stop>
                      <stop offset="0.18" stop-color="#DE9827"></stop>
                      <stop offset="0.48" stop-color="#FED71A"></stop>
                      <stop offset="0.65" stop-color="#FBE370"></stop>
                      <stop offset="0.8" stop-color="#F4BB19"></stop>
                      <stop offset="1" stop-color="#CDA837"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_1280_11158"
                      x1="11.6164"
                      y1="9.05275"
                      x2="6.24546"
                      y2="3.52794"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FCCF1A"></stop>
                      <stop offset="0.18" stop-color="#DE9827"></stop>
                      <stop offset="0.48" stop-color="#FED71A"></stop>
                      <stop offset="0.8" stop-color="#F4BB19"></stop>
                      <stop offset="1" stop-color="#CDA837"></stop>
                    </linearGradient>
                    <clipPath id="clip0_1280_11158">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.5)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                +6,247
              </span>
            </div>
            <div class="Detail">
              <p>Xem chi tiết</p>
              <svg
                height="17"
                viewBox="0 0 16 17"
                xmlns="http://www.w3.org/2000/svg"
                fill="var(--textOnWhiteHyperLink)"
              >
                <path
                  d="M3.20041 6.40641C3.48226 6.10288 3.95681 6.0853 4.26034 6.36716L8 9.89327L11.7397 6.36716C12.0432 6.0853 12.5177 6.10288 12.7996 6.40641C13.0815 6.70995 13.0639 7.18449 12.7603 7.46635L8.51034 11.4663C8.22258 11.7336 7.77743 11.7336 7.48967 11.4663L3.23966 7.46635C2.93613 7.18449 2.91856 6.70995 3.20041 6.40641Z"
                  fill="inherit"
                ></path>
              </svg>
            </div>
            <div class="submitItem">
              <SubmitButton>
                <span style="color: #fff; font-size: 18px; font-weight: 600"
                  >Xác nhận đơn</span
                >
              </SubmitButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js" setup>
import { ref } from 'vue';
function formatVND(amount) {
  if (typeof amount !== "number" || isNaN(amount)) {
    return "-";
  }

  return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}
const pizza = ref()
const colors = ref([
    { name: 'Titan đen', code: 'NY' },
    { name: 'Titan trắng', code: 'RM' },
    { name: 'Titan xanh', code: 'LDN' },
    { name: 'Titan tự nhiên', code: 'IST' },

]);
</script>
<style lang="css" scoped>
.body {
  background-color: #f3f4f6;
}
.Management {
  display: flex;
  gap: 30px;
}
.contenManagent {
  margin-bottom: 30px;
  width: 60%;
}
.checkAll {
  padding-left: 10px;
  display: flex;
  align-items: center;
}
.rusbish {
  margin-right: 10px;
}
.checkedProduct {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.625rem;
  padding-top: 0.625rem;
  border-radius: 20px;
  background-color: #fff;
}
.checkItem {
  display: flex;
  flex-direction: column;
  background: #fff;
  margin-top: 20px;
  border-radius: 12px;
  padding-bottom: 0.625rem;
  padding-top: 0.625rem;
  width: 820px;
}
.productCheck {
  display: flex;
}
.contentProduct {
  display: flex;
  gap: 20px;
}
.userCheck {
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 10px;
}
.imgItem {
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: 40px;
  height: 50px;
  border: 1px solid #6b7280;
}
.imgItem img {
  width: 100%;
  object-fit: contain;
}
.titleItem {
  display: flex;
  flex-direction: column;
  padding: 0.357rem 0.625rem;
}
.colorTel {
  width: 155px;
  margin-top: 10px;
}
.buy {
  font-size: 18px;
  line-height: 36px;
  font-weight: 700;
  color: #dc2626;
}
.original {
  font-size: 16px;
  line-height: 18px;
  text-decoration: line-through;
  color: #6b7280;
}

.priceItem {
  display: flex;
  padding-top: 10px;
  gap: 30px;
}

.countItem {
  margin-left: 10px;
  display: flex;
  align-items: center;
}
.countItem .p-inputtext {
  width: 50px;
}
.rush {
  display: flex;
  align-items: center;
}
.guaranteeProduct {
  padding: 16px 16px 16px 132px;
  display: flex;
  flex-direction: column;

  border-radius: 20px;
}
.guaranteeItem {
  border-radius: 20px;
  display: flex;
  border: 1px solid #6b7280;
  flex-direction: column;
  height: 120px;
}

.titleGuarantee {
  background: #6b7280;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  height: 40px;
  display: flex;
  padding: 5px;
  padding-left: 20px !important;
  gap: 10px;
}
.title1,
.title2 {
  gap: 10px;
  padding: 10px;
}
.payProduct {
  width: 100%;
}
.presentProduct {
  background: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.present {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.contentPay {
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 30px 0;
  border-radius: 20px;
  padding: 30px;
}
.Total,
.sale,
.transport,
.payment,
.diem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
.Total {
  border-bottom: 1px solid #6b7280;
}
.transport {
  border-bottom: 1px dashed #6b7280;
}
.Total,
.sale,
.transport,
.payment,
.diem p {
  font-size: 14px;
  color: #6b7280;
}
.Total,
.sale span {
  font-size: 24px;
  color: #090d14;
}
.payment span {
  font-size: 24px;
  color: #dc2626;
}
.diem span {
  display: flex;
  color: burlywood;
  gap: 10px;
  font-size: 18px;
}
.Detail {
  display: flex;
  align-items: center;
  color: #1250dc;
}
.Detail svg {
  width: 30px;
  color: #1250dc;
}
.submitItem {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}
.submitItem .p-button {
  width: 47%;
  height: 60px;
  background: #dc2626 !important;
}
</style>
