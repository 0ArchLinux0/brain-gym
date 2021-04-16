<template>
  <div 
    class="relative flex flex-col justify-around w-full cursor-pointer"
    style="height: 60vh"
    v-bind:style="{'backgroundColor': bgColor}"
    @click="userClicked "
  >
  <div class="absolute w-1/5 h-full text-lg" style="top: 3rem">
    <ReactionTimeScoreBoard
     :timeRecord="scoreArr"
    />
  </div>
    <div class="absolute w-full" style="top:2rem; font-size:3rem;">{{instruction}}</div>
    <div class="absolute w-full" style="top:8rem; font-size:2rem;">{{testCount}} / 5</div>
    <div id="countdownscene" style="font-size:10rem; color:#56ae6e;">
      <div id="card" ref="card">
        <div class="card_face face_front">{{countDownNum1}}</div>
        <div class="card_face face_back">{{countDownNum2}}</div>
      </div>
    </div>
    <div class="relative text-3xl font-semibold"> 
      {{centerMessage}} 
      <div class="absolute w-full text-lg font-semibold"> {{notify}} </div>
    </div>
  </div>
</template>

<script>
import ReactionTimeScoreBoard from "@/components/ReactionTimeScoreBoard.vue"
export default {
  name: 'ReactionTime',
  components: {
    ReactionTimeScoreBoard,
  },
  props: {
    title: String,
    fileName: String,
  },
  computed: {
  },
  methods: {
    changeBgColor() {
      const currentTimeStamp = new Date();
      if(this.start == undefined) {
        this.start = currentTimeStamp;
        window.requestAnimationFrame(this.startTest);
      }
      const elapsed = currentTimeStamp - this.start;
      if(elapsed >= 1000) {
        this.bgColor = ['green','red','blue','yellow','black','orange'][parseInt(Math.random()*100)%6];
        this.start = currentTimeStamp;
      }
      window.requestAnimationFrame(this.startTest);
    },
    startTest() {
      if(!this.randTimeUnder5s) { //When countdown ended
        this.randTimeUnder5s = Math.random() * 7 + 0.2; 
        this.timeStamp = new Date();
      } 
      console.log(this.randTimeUnder5s);
      const currentTimeStamp = new Date();
      if(currentTimeStamp - this.timeStamp > this.randTimeUnder5s * 1000) {
        this.colorChangedTimeStamp = currentTimeStamp; 
        this.timeStamp = null;
        this.bgColor = '#f5b40f';
        this.randTimeUnder5s = undefined;
        this.userHaveToClick = true;
        console.log('end');
      }
      else window.requestAnimationFrame(this.startTest);
    },
    userClicked () {
      if(this.userHaveToClick) {  //get time diff 
        this.reactionTime = new Date() - this.colorChangedTimeStamp;
        this.centerMessage = `${this.reactionTime} ms !`;
        this.bgColor = '#1F618D';
        this.notify = 'click again';
        this.sum += this.reactionTime;
        const temp  = [...this.scoreArr, this.reactionTime];
        this.scoreArr = [...temp];
        this.userHaveToClick = false;
        if(this.testCount == 5) {
          this.instruction = 'Click to try again';
          this.centerMessage = `Average reaction time is ${this.sum/5}`;
          this.notify = '';
          this.sum = 0;
        } 
      } else {  // start count down
        if (this.randTimeUnder5s) { //When countdown 
          this.centerMessage = 'Too early!';
          return;
        } else if(this.countDownNum1 == ''){ //everything end start test againg
          this.notify = '';
          if(this.testCount == 5 || this.init) {
            console.log('click');
            this.init = false;
            this.testCount = 1;
            this.countDownNum1 = 3;
            this.countDownNum2 = 2;
            // this.$refs.card.style['animation-play-state'] = 'running';
            this.$refs.card.classList.value = 'flip0to270';
            this.centerMessage = '';
            this.instruction = 'Click when color change';
          } else if(!this.init) {
            this.testCount++;
            this.centerMessage = 
            this.startTest();
          } 
        }
      this.bgColor = '#a2ebf6';
      }
    }
  },
  mounted() {
    this.initTimeStamp = new Date();
    //userClicked ().then()// make this as promise
    //window.requestAnimationFrame(this.startTest);
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
    // animatedEl.addEventListener('animationend', () => {
      // console.log('Animation ended');
      // this.$refs.card.style['animation-play-state'] = 'paused';
    // });
  },
  data() {
    return {
      assetUrl: undefined,
      initTimeStamp: undefined,
      currentTimeStamp: undefined,
      scoreArr: [],
      scoreAverage: undefined,
      testCount: 1,
      bgColor: '#a2ebf6',
      countDownNum1: '',
      userHaveToClick: false,
      countDownNum2: '',
      reactionTime: undefined,
      is0To270: true,
      instruction: '',
      centerMessage: 'Click to Start Test',
      randTimeUnder5s: undefined,
      timeStamp: undefined,
      init: true,
      sum: 0,
      notify: '',
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
}
</style>
