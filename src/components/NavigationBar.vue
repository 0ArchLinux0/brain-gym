<template>
  <div class="flex w-full border-b py-1 items-center bg-blue-100 text-black">
    <div
      class="flex flex-row justify-center items-center w-full"
    >
      <div
        class="flex flex-row justify-between items-center w-full md:w-3/4 items-center"
      >
          <!-- key="back" -->
        <button
          class="flex ml-2 mb-2 text-base items-center"
          style="margin-top: 5px;"
          @click="toHome"
        >
          Home
        </button>
        <span
          class="text-sm lg:text-sm"
          >Improve yourself!</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavigationBarMobile",
  methods: {
    toHome() {
      this.$router.push({ path: '/' });
      // this.$router.push({ name: '/Home' });
        //error : 
        // runtime-core.esm-bundler.js?5c40:217 Uncaught Error: No match for
        // {"name":"Home","params":{}}
    }
  }
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
