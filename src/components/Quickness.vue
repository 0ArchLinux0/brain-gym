<template>
<div class="relative w-full h-auto">
  <div 
    class="relative flex flex-col justify-center text-3xl items-center w-full h-full overflow-hidden"
    v-bind:style="{
        'height': mobile ? result ? '70vh' : '70vh' : '60vh',
        'backgroundColor': bgColor, 
      }"
    @click="userClicked"
  >
    <div class = "absolute w-1/2 flex flex-col justify-start items-center" style="height:20px; top:8%">
      <div class="text-center text-4xl">Stage {{stage}}</div>
      <div v-show="!mobile||!result" class="flex w-full my-5 justify-between items-center" >
        <span class="text-xs mr-2">0%</span>
        <div ref="progressbarWrapper" class="relative flex-grow border-2 border-white" style="height:20px;">
          <div class="h-full progressbar" :style="{'width':`${progressBarWid}px`}"/>
        </div>
        <span class="relative left-2 text-xs">100%</span>
      </div>
    </div>

    <!-- <div v-show="!inputTime" class="absolute">
      <div>{{result}}</div>
    </div> -->
    <!-- <div class="grid-item"></div> -->
    
    <div class="grid-container">
      <div 
        v-for="number in numbers"
        class="grid-item"
        :key="number"
      >
        <div
          class="number"
        >
          {{ number }}
        </div>
      </div>
    </div>
  
    <div id="countdownscene" style="font-size:7rem;">
      <div id="card" ref="card">
        <div class="card_face face_front">{{countDownNum1}}</div>
        <div class="card_face face_back">{{countDownNum2}}</div>
      </div>
    </div>
  </div>
  
  <div v-show="result" class="z-100 mt-5 flex justify-center items-center w-full text-lg">
    Share your reaction time!
    <button 
      id="kakao_share" 
      class="ml-6 cursor-pointer" 
      style="width:50px; height:50px;"
      @click="kakaotalkShare"
    >
      <img src="@/assets/kakaotalk_logo-256px.png"/>
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'NumberMemory',
  components: {
  },
  props: {
    mobile: Boolean,
  },
  computed: {
  },
  methods: {
    kakaotalkShare() {
      window.Kakao.Link.sendCustom({
        templateId: 53052,
        templateArgs: {
          'stage': `${this.stage - 1}`,
        },
      });
    },
    userClicked() {
      if(!this.testRunning) {
        console.log("start test!!!");
        this.bgColor = 'black';
        this.countDownNum1 = 3;
        this.countDownNum2 = 2;
        this.result = undefined;
        this.$refs.card.classList.value = 'flip0to270';
        this.testRunning = true;
        this.animationRunning = true;
      } 
      else if(this.testRunning && this.animationRunning) {
        console.log('jump')
        this.$refs.card.classList.value = '' 
        this.countDownNum1 = '';
        this.countDownNum2 = '';
        this.animationRunning = false;
        this.progressBarWid = 0;
        this.startTest();
      }
    },
    startTest() {
      this.progressbarWrapperWid = this.$refs.progressbarWrapper.clientWidth;
    },
    progressBar() {
      const currentTimeStamp = new Date();
      if(!this.timeStamp) this.timeStamp = currentTimeStamp;
      const elapsed = (currentTimeStamp - this.timeStamp) / 1000;
      this.progressBarWid = elapsed / this.timeLimit * this.progressbarWrapperWid;
      if(elapsed >= this.timeLimit) {
        this.timeStamp = undefined;
        this.progressBarWid = 0;
        if(this.inputTime) {
          return this.showResult();
        } else return this.inputAnswer();                           
      } else window.requestAnimationFrame(this.progressBar);
    },
    showResult() {
      this.animationRunning = false;
      this.result = `You've passed through to level ${this.stage - 1}.`
      this.bgColor = '#1F618D';
      this.testRunning = false;
    },
    createNumbers() {
      const arr = [];
      for(let i = 1; i <= 25; i++) arr.push(i);
      console.log(arr);
      for(let i = 0; i < 60; i++) {
        let rand1 = parseInt(Math.random() * 25);
        let rand2 = parseInt(Math.random() * 25);
        while(rand1 == rand2) rand2 = (rand2 + parseInt(Math.random() * 24)) % 25;
        const tmp = arr[rand1];
        arr[rand1] = arr[rand2];
        arr[rand2] = tmp;
      }
      this.numbers = arr;
    }
  },
  mounted() {
    this.createNumbers();
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
        this.animationRunning = false;
        this.startTest();
      }
      this.is0To270 = !this.is0To270;
    })

    document.addEventListener('keypress', (e) => {
      console.log(e);
      e = e || window.event;
      if (e.key === 'Enter')
        this.userClicked();
    });

  },
  data() {
    return {
      countDownNum1: '',
      countDownNum2: '',
      bgColor: 'black',
      is0To270: true,
      timeLimit: 60,
      progressbarWrapperWid: undefined,
      testRunning: false,
      inputTime: false,
      progressBarWid: 0,
      canSubmit: false,
      answer: '',
      timeStamp: undefined,
      result: undefined,
      numbers: new Array(25)
    };
  },
}
</script>
<style scoped>
.grid-container {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  /* grid-template-columns: 20px 20px 20px 20px 20px; */
  /* grid-template-columns: repeat(5, minmax(20px, auto));
  grid-template-rows: repeat(5, minmax(20px, auto)); */
  grid-gap: 10px 10px; 
  /* = 10px */
  width: min(70vw, 40vh);
  height: min(70vw, 40vh);
  min-width: 200px;
  min-height: 200px;
  margin-top: 15vh;
  /* row-gap: 10px;
  column-gap: 10px; */
}
.grid-item {
  position: relative;
  background-color: white;
  color: black;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.number {
  position: relative;
  top: 50%;
  font-size: 1.5rem;
  transform: translateY(-50%);
}
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
  animation-play-state: animationRunning;
}
.flip270to630 {
  animation: flip270to630 2s linear infinite;
  animation-play-state: animationRunning;
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
.progressbar {
  background: lightgreen;
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
  outline: none;
}
</style>
