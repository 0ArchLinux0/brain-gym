<template>
  <div v-if="mobile" class="relative w-full h-full" style="max-height: 100vh;max-width:100vw;" ref="content">
    <!-- <div class="w-full h-full bg-red-300">asdf</div> -->
    <router-view
      :mobile="mobile"
    />
  </div>
  <div v-else class="relative w-full h-full overflow-hidden" style="max-height:100vh; min-width:100vw;" ref="content">
    <!-- <div class="w-full h-full bg-red-300">asdf</div> -->
    <router-view
      :mobile="mobile"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ContainerMain from './components/ContainerMain.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // ContainerMain,
  },
  metaInfo: {
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
    ],
  },
  methods: {
    // onWindowSizeChange() {
    //   if (this.$refs.content.clientWidth < 600) {
    //     this.mobile = true;
    //     // OnMobileModeSignal.notify(this.mobile);
    //   } else if (this.$refs.content.clientWidth >= 600) {
    //     this.mobile = false;
    //     // OnMobileModeSignal.notify(this.mobile);
    //   }
    //   // console.log(this.mobile);
    // },
  },
  mounted() {
    console.log('app.vue mounted');
    const filter = "hp-ux|linux i686|linux armv7l|mac68k|macppc|macintel|sunos|win16|win32|wince";
    console.log(navigator.platform);
    if (navigator.platform) this.mobile = filter.indexOf(navigator.platform.toLowerCase()) < 0;
    // this.mobile = true;
    console.log(this.mobile);
    const kakoapiscript = document.createElement('script');
    kakoapiscript.setAttribute('src', 'https://developers.kakao.com/sdk/js/kakao.js');
    kakoapiscript.addEventListener('load', () => {
      console.log(window.Kakao);
      
      window.Kakao.init('306dc74315e55a8ab89e3af2a60e4c47');
      console.log("kako api successfully initialized: " + window.Kakao.isInitialized());
    })
    document.head.appendChild(kakoapiscript);
  },
  data() {
    return {
      mobile: false,
    };
  },
}
</script>
<style>
  @font-face {
    font-family: 'ZenDots';
    /* font-style: normal; */
    /* font-weight: 400; */
    /* font-display: swap; */
    src: url(./assets/ZenDots-Regular.ttf) format('truetype'); 
    /* With local('ZenDots-Regular.ttf') Font doens't work Also with format('ttf')*/
  }
  html,body {
    height: 100%;
    background-color: black; 
  }
  #app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'ZenDots';
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /* height: 100vh; */
  /* margin-top: 0 px; */
  }
  * {
    user-select: none;
    outline: 0;
    border: 0;
  }
</style>
