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
      <div @click="goRegisteration" class="buttonbox"> register </div>
      <div 
        class="h-10 border-2 border-white my-3 flex justify-center items-center"
        :class="{'w-1/3': mobile, 'w-1/4': !mobile}"
        :style="{'border-color': inputRapper1Onfocus ? 'lightgreen' : 'white'}"
      >
        <input 
          @keypress.enter="moveFocus" 
          @focusin="focusTriggered(1)"
          @focusout="focusTriggered(1)"
          v-model="user_id"
          placeholder="Enter Id"
          type="text"
          class="block w-10/12 inputbox bg-black "
          style="spellcheck:false;"
        />
      </div>
      <div 
        class="h-10 border-2 border-white my-3 flex justify-center items-center"
        :class="{'w-1/3': mobile, 'w-1/4': !mobile}"
        :style="{'border-color': inputRapper2Onfocus ? 'lightgreen' : 'white'}">
        <input 
          ref="pw"
          @keypress.enter="login" 
          @focusin="focusTriggered(2)"
          @focusout="focusTriggered(2)"
          v-model="user_pw"
          placeholder="Enter password"
          type="password"
          class="block w-10/12 inputbox bg-black "
          style="spellcheck:false;"
        />
      </div>
      <div @click="login" class="buttonbox"> Login </div>
      <div v-if="loginerror" style="color:lightgreen;"> Wrong password or not registered email </div>
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
    mobile: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
  },
  methods: {
    moveFocus() {
      this.$refs.pw.focus();
    },
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
        this.$router.push({ name : "Home" })
      }).catch((err) => {
        console.log(err)
        this.loginerror = true;
      });
    },
    goRegisteration() {
      this.$router.push({ name: "Register" });
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
      loginerror: false,
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