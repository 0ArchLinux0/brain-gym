<template>
  <div id="countdownscene" style="font-size:7rem;" class="w-10 h-10 bg-red-200">
    <div id="card" ref="card">
      <div class="card_face face_front flip0to270">{{countDownNum1}}</div>
      <div class="card_face face_back flip0to270">{{countDownNum2}}</div>
    </div>
  <!-- </div> -->
</template>

<script>
// import { nextTick } from 'vue'
export default {
  name: 'CountDown',
  props: {
    mobile: Boolean,
    title: String,
    fileName: String,
  },
  computed: {
  },
  methods: {
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
        this.bgColor = 'white';
        this.randTimeUnder5s = undefined;
        this.userHaveToClick = true;
        console.log('end');
      }
      else window.requestAnimationFrame(this.startTest);
    },
    userClicked () {
      console.log("clicked ~~~~");
      console.log(this.testCount);
      if(this.userHaveToClick) {  //get time diff 
        this.reactionTime = new Date() - this.colorChangedTimeStamp;
        this.centerMessage = `${this.reactionTime} ms !`;
        this.bgColor = '#1F618D';
        this.textColor = 'black'
        this.notify = 'click again';
        const temp  = [...this.scoreArr, this.reactionTime];
        this.scoreArr = [...temp];
        this.userHaveToClick = false;
        if(this.testCount == 5) { //All 5 attempt finished
          this.onResult = true;
          this.instruction = 'Click to try again';
          this.notify = '';
        } 
      } else {  // start count down
        this.textColor = 'white'
        this.onResult = false;
        if (this.randTimeUnder5s) { //When countdown 
          this.centerMessage = 'Too early!';
          return;
        } else if(this.countDownNum1 == ''){ //execute test for next attempt
          this.notify = '';
          if(this.testCount == 5 || this.init) {
            this.scoreArr = [];
            console.log('click');
            this.init = false;
            this.testCount = 1;
            this.countDownNum1 = 3;
            this.countDownNum2 = 2;
            this.$refs.card.classList.value = 'flip0to270';
            this.centerMessage = '';
            this.instruction = 'Wait for White';
          } else if(!this.init) {
            this.testCount++;
            this.centerMessage = 
            this.startTest();
          } 
        }
      this.bgColor = 'black';
      }
    }
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
      countDownNum1: 3,
      countDownNum2: 2,
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
