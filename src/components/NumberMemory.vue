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
      <button 
        v-show="inputTime"
        class="text-lg rounded-lg" 
        style="backgroundColor:lightgreen; width: 90px; height: 30px"
        @click.stop="submit"
      >
        submit
      </button>
    </div>

    <div v-show="!inputTime" class="absolute">
      {{testNumber}}
      <div>{{result}}</div>
    </div>
    <!-- <div 
      class="absolute w-full bg-blue-200 flex justify-center items-center"
      style="height:20%"
    > -->
      <input 
        v-show="inputTime"
        @keydown.enter="submit"
        ref="inputRef"
        type="text"
        class="absolute w-1/2 block text-white text-center bg-black border-2 border-white"
        style="opacity: 1"
        v-model="answer"
      />
    <!-- </div> -->
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
      <!-- @click="kakaotalkShare" -->
      <!-- @mouseover="kakaotalkShare" -->
      <img src="@/assets/kakaotalk_logo-256px.png"/>
    </button>
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
  },
  computed: {
    timeIncrement() {
      let result = undefined;
      if(this.stage == 1) result =  1.2;
      else if (this.stage < 5) result =  this.stage * 0.3;
      else if (this.stage < 8) result =  1 + this.stage * 0.2;
      else if (this.stage < 10) result =  1 + this.stage * 0.3;
      else if (this.stage < 13) result =  1 + this.stage * 0.2;
      // else if (this.stage < 15) result =  this.stage * 1;
      // else if (this.stage < 18) result =  this.stage * 1.1;
      // else if (this.stage < 20) result =  this.stage * 1.3;
      // else if (this.stage < 24) result =  this.stage * 1.5;
      // else if (this.stage < 30) result =  this.stage * 1.7;
      // else if (this.stage < 40) result =  this.stage * 1.8;
      // else if (this.stage < 50) result =  this.stage * 1.9;
      // else if (this.stage < 50) result =  this.stage * 2.2;
      else result = 2;
      return result;
    }
  },
  methods: {
    kakaotalkShare() {
      window.Kakao.Link.sendCustom({
        templateId: 53052,
        // templateId: 52162,
        templateArgs: {
          'stage': `${this.stage - 1}`,
        },
      });
    },
    userClicked() {
      // return new Promise((resolve, reject) => {
        if(this.init) {
          console.log("start test!!!");
          this.stage = 1;
          this.bgColor = 'black';
          this.countDownNum1 = 3;
          this.countDownNum2 = 2;
          this.result = undefined;
          this.testNumber = '';
          this.$refs.card.classList.value = 'flip0to270';
          this.init = false;
          this.running = true;
          this.preventClickEvent = true;
        } else if(!this.isFirstStage && !this.canSubmit) {
          this.jumpToInput();
        }
        // setTimeout(() => {
        //   this.testNumber = '!'
        //   const a = true;
        //   if(a) resolve();
        //   else reject();
        // }, 3000)
      // })
    },
    startTest() {
      console.log(this.stage);
      this.answer = '';
      this.canSubmit = false;
      this.inputTime = false;
      let tempStr = '';
      if(this.isFirstStage) this.isFirstStage = false;
      else {
        this.stage++;
        this.timeLimit -= 4;
      }
      for(let i=0; i < this.stage; i++) {
        tempStr += Math.floor(Math.random() * 100) % 10;
      }
      this.testNumber = tempStr;
      // this.$refs.inputRef.focus();
      // setTimeout(() => { return this.inputAnswer() }, 3000);
      this.timeLimit += this.timeIncrement;
      this.progressbarWrapperWid = this.$refs.progressbarWrapper.clientWidth;
      this.animationID = window.requestAnimationFrame(this.progressBar);
    },
    inputAnswer() {
      this.canSubmit = true;
      this.inputTime = true;
      this.$nextTick(() => {
        this.$refs.inputRef.focus();
      }) 
      this.timeLimit += 4;
      this.animationID = window.requestAnimationFrame(this.progressBar)
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
            if(this.testNumber == this.answer) return this.startTest();
            else return this.showResult();
          } else return this.inputAnswer();                           
      } else this.animationID = window.requestAnimationFrame(this.progressBar);
    },
    submit(event) {
      console.log(event);
      event.preventDefault();
      if(!this.canSubmit) return;
      this.timeStamp = undefined;
      
      window.cancelAnimationFrame(this.animationID);
      this.animationID = undefined;
      this.progressBarWid = 0;
      if(this.testNumber == this.answer) return this.startTest();
      else {
        // window.cancelAnimationFrame(this.animationID);
        return this.showResult();
      }
    },
    jumpToInput() {
      if(this.canSubmit  || this.inputTime) return;
      console.log('jump!!!!!!!')
      this.timeStamp = undefined;
      
      window.cancelAnimationFrame(this.animationID);
      this.animationID = undefined;
      this.progressBarWid = 0;
      return this.inputAnswer();
    },
    showResult() {
      this.running = false;
      this.canSubmit = false;
      this.inputTime = false;
      this.testNumber = "game over";
      this.isFirstStage = true;
      this.result = `You've passed through to level ${this.stage - 1}.`
      this.bgColor = '#1F618D';
      this.timeLimit = 0;
      this.init = true;
      this.preventClickEvent = false;
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
    
    document.addEventListener('keypress', (e) => {
      e = e || window.event;
      if (e.key === 'Enter')
        this.userClicked();
    });
  },
  data() {
    return {
      running: false,
      testNumber: '',
      countDownNum1: '',
      countDownNum2: '',
      animationID: undefined,
      bgColor: 'black',
      preventClickEvent: false,
      isFirstStage: true,
      is0To270: true,
      stage: 1,
      timeLimit: 0,
      progressbarWrapperWid: undefined,
      init: true,
      inputTime: false,
      progressBarWid: 0,
      canSubmit: false,
      answer: '',
      timeStamp: undefined,
      result: undefined,
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
