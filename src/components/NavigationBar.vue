<template>
  <div class="flex w-full border-b py-1 items-center bg-blue-100">
    <div
      class="flex flex-row justify-center items-center w-full"
    >
      <div
        class="flex flex-row justify-between items-center w-full md:w-3/4 items-center"
      >
        <button
          key="back"
          class="flex ml-2 mb-2 text-base items-center"
          style="color: #021222; margin-top: 5px;"
        >
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
          > -->
            <!-- <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg> -->
          Brain Training!
        </button>
        <span
          class="text-gray-400 text-xs lg:text-sm"
          >Train your brain!</span
        >

        <!-- <div class="flex items-center" >
          <div
            class="flex flex-row items-center overflow-visible justify-center"
          >
            <div
              class="flex justify-center items-center overflow-visible relative"
            >
                <div
                  class="flex flex-col p-2 shadow-xl items-center justify-center absolute bg-white top-0 right-0 rounded shadow-lg"
                  style="width: 15rem"
                >
                  <button
                    class="flex flex-row justify-center text-gray-600 items-center w-full transition-all duration-200 hover:bg-indigo-100"
                    style="height: 2rem"
                  >
                    내 프로필
                  </button>
                  <button
                    class="flex flex-row justify-center text-gray-600 items-center w-full transition-all duration-200 hover:bg-indigo-100"
                    style="height: 2rem"
                  >
                    코인:
                    <span class="px-2 text-plaxb">0개</span>
                  </button>
                  <button
                    class="flex flex-row justify-center text-gray-600 items-center w-full transition-all duration-200 hover:bg-indigo-100"
                    style="height: 2rem"
                  >
                    내 보관함
                  </button>
                  <button
                    class="flex flex-row font-semibold justify-center text-plaxb items-center w-full transition-all duration-200 hover:bg-indigo-100"
                    style="height: 2rem"
                  >
                    로그아웃
                  </button>
                </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavigationBarMobile",
}
</script>

<style scoped>
button:focus {
  outline: 0 !important;
  box-shadow: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.plaxlogo {
  font-family: "Futura", Helvetica, Arial;
  font-size: 24px;
  width: 69px;
  height: 31px;
  font-family: Futura;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #021222;
}
.category {
  font-family: "KumbhSans", Helvetica, Arial;
  color: #292e64;
  font-weight: 600;
}
</style>
// Look into https://github.com/Akryum/vue-resize?
