<template>
  <div class="w-full h-full">
    <NavigationBar/>
    <div class="flex flex-col w-full justify-center items-center text-white " style="height:80%">
      <!-- <div v-if="mobile" class="flex flex-col px-2 w-full justify-between items-center">
        Login view
      </div>
      <div v-else class="flex w-full h-full px-7 justify-between">
        Login view
      </div> -->
      Restration page!
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue"
import AccountService from "@/services/AccountService.js"
export default {
  name: 'Login',
  components: {
    NavigationBar,
  },
  props: {
    mobile: Boolean,
  },
  computed: {
  },
  methods: {
    focusTriggered(index) {
      // console.log(index);
      console.log('called' + index);
      // this[`inputRapper${index}Onfocus`] = true;
      this[`inputRapper${index}Onfocus`] = !this[`inputRapper${index}Onfocus`];
      // console.log(this.inputRapper1Onfocus);
      // console.log(this.inputRapper2Onfocus);
    },
    login() {
      console.log(this.user_id + ", " + this.user_pw);
      AccountService.login({ id: this.user_id, pw: this.user_pw }).then((result) => {
        console.log(result);
      }).catch((err) => console.log(err));
    },
    goRegisteration() {
      this.$router.push({ name: "Registration "});
    }
  },
  mounted() {
  },
  data() {
    return {
      inputRapper1Onfocus: false,
      inputRapper2Onfocus: false,
      user_id: '',
      user_pw: '',
    };
  },
}
</script>

<style scoped>
.inputbox {
  text-align: center;
}
.buttonbox:hover {
  cursor: pointer;
  color: greenyellow;
}
</style>