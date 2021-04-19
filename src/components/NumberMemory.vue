<template>
  <div 
    class="relative flex flex-col justify-center items-center w-full h-full overflow-hidden"
    style="height:60vh"
    @click="userClicked"
  >
    <div class="absolute">{{testNumber}}</div>
    <input 
      v-show="inputTime"
      ref="inputRef"
      type="text"
      class="block text-black bg-white border-2 border-white"
      v-model="answer"
    />
      <!-- style="width: 300px; height: 300px " -->
    <div id="countdownscene" style="font-size:7rem;">
      <div id="card" ref="card">
        <div class="card_face face_front">{{countDownNum1}}</div>
        <div class="card_face face_back">{{countDownNum2}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { nextTick } from 'vue'
export default {
  name: 'NumberMemory',
  components: {
  },
  props: {
    mobile: Boolean,
    title: String,
    fileName: String,
  },
  computed: {
  },
  methods: {
    userClicked() {
      // return new Promise((resolve, reject) => {
        if(this.init) {
          console.log("start test!!!");
          this.testNumber = 'start test!'
          this.countDownNum1 = 3;
          this.countDownNum2 = 2;
          this.$refs.card.classList.value = 'flip0to270';
          this.init = false;
        } else this.startTest();
        
        // setTimeout(() => {
        //   this.testNumber = '!'
        //   const a = true;
        //   if(a) resolve();
        //   else reject();
        // }, 3000)
      // })
    },
    startTest() {
      this.inputTime = false;
      console.log("start test");
      let tempStr = '';
      for(let i=0; i < this.stage; i++) {
        tempStr += Math.floor(Math.random() * 100) % 10;
      }
      this.testNumber = tempStr;
      this.stage++;
      setTimeout(() => { this.inputAnswer() }, 3000);
    },
    inputAnswer() {
      this.inputTime = true;
      this.$refs.inputRef.focus();
      setTimeout(() => { this.startTest() }, 3000);
    },
  },
  mounted() {
    const animatedEl = document.getElementById('card');
    animatedEl.addEventListener('animationiteration', () => {
      console.log('animation iterating!!!!');
      this.countDownNum1 -= 2;
      this.countDownNum2 = 'Start';
      if(this.is0To270) this.$refs.card.classList.value = 'flip270to630';
      else {
        this.$refs.card.classList.value = '' 
        this.countDownNum1 = '';
        this.countDownNum2 = '';
        this.startTest();
      }
      this.is0To270 = !this.is0To270;
    })
  },
  data() {
    return {
      testNumber: 'number to display',
      countDownNum1: '',
      countDownNum2: '',
      is0To270: true,
      stage: 1,
      init: true,
      inputTime: false,
    };
  },
}
</script>

<style scoped>
#countdownscene {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 1000px;
  display: flex;
}
#card {
  /* backface-visibility: visible; */
  position: relative;
  width: 1px;
  height: 1px;
  transform-style: preserve-3d;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.flip0to270 {
  animation: flip0to270 2s linear infinite;
  animation-play-state: running;
}
.flip270to630 {
  animation: flip270to630 2s linear infinite;
  animation-play-state: running;
}
.card_face {
  backface-visibility: hidden;
  text-align: center;
  color: lightgreen;
  padding: auto;
  position: absolute;
}
.face_back {
  transform: rotateY(180deg);
}
.face_front {
  transform: rotateY(0deg); 
}
@keyframes flip270to630 {
  from { transform: rotateY(270deg) }
  to { transform: rotateY(630deg);}
}
@keyframes flip0to270 {
  from { transform: rotateY(0) }
  to { transform: rotateY(270deg) }
}
* {
  user-select: none;
  border: none;
  outline: none;
}
</style>
