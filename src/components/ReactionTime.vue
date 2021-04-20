<template>
    <div
      v-if="mobile"
      class="relative w-full h-full flex flex-col justify-around "
      v-bind:style="{
        'color': textColor, 
        'backgroundColor': bgColor, 
        'height': onResult ? '40vh' : '60vh'
      }"
      @touchstart="userClicked"
    > 
      <!-- style="height: 70vh" -->
      <div v-show="!onResult" class="absolute left-2 w-1/2  text-sm sm:left-6" style="top:3rem;">
        <ReactionTimeScoreBoard
          :mobile="mobile"
          :timeRecord="scoreArr"
          @shoot-avg-val="getAvg"
        />
      </div>
      <div class="absolute w-full" style="top:2rem; font-size:3rem;">
        <div style="font-size:1.5rem;" class="sm:text-lg; md:text-xl; lg:text-2xl">{{instruction}}</div>
        <div style="font-size:2rem">{{testCount}} / 5</div>
        <div class="relative text-3xl top-4 font-semibold"> 
          {{centerMessage}} 
          <div class="w-full text-lg font-semibold">{{notify}}</div>
        </div>
      </div>
      <!-- <div class="absolute w-full" style="top:8rem; font-size:2rem;">{{testCount}} / 5</div> -->
      <div id="countdownscene" style="font-size:7rem;">
        <div id="card" ref="card">
          <div class="card_face face_front">{{countDownNum1}}</div>
          <div class="card_face face_back">{{countDownNum2}}</div>
        </div>
      </div>
    </div>

    <div v-else
      class="relative flex flex-col justify-around w-full cursor-pointer"
      style="height: 60vh"
      v-bind:style="{'backgroundColor': bgColor, 'color': textColor}"
      @mousedown="userClicked"
    >
    <div v-show="!onResult" class="absolute w-1/5 h-full text-lg" style="top:3rem; marginLeft:3rem;">
      <ReactionTimeScoreBoard
        :mobile="mobile"
        :timeRecord="scoreArr"
        @shoot-avg-val="getAvg"
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
    
    <div v-show="onResult" class="z-100 mt-5 flex justify-center items-center w-full text-lg">
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
</template>

<script>
import ReactionTimeScoreBoard from "@/components/ReactionTimeScoreBoard.vue"
// import { nextTick } from 'vue'
export default {
  name: 'ReactionTime',
  components: {
    ReactionTimeScoreBoard,
  },
  props: {
    mobile: Boolean,
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
      if(currentTimeStamp - this.start >= 1000) {
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
        this.bgColor = 'white';
        this.randTimeUnder5s = undefined;
        this.userHaveToClick = true;
        console.log('end');
      }
      else window.requestAnimationFrame(this.startTest);
    },
    // shareResult() {
    //   let param = 'sendurl?msg=' + encodeURIComponent('보낼 메시지');
    //       param += '&url=' + 'http://dev.epiloum.net';
    //       param += '&type=link';
    //       param += '&apiver=2.0.1';
    //       param += '&appver=2.0';
    //       param += '&appid=dev.epiloum.net';
    //       param += '&appname=' + encodeURIComponent('Epiloum 개발노트');

    //   if(navigator.userAgent.match(/android/i))
    //   {
    //       setTimeout(function(){
    //           location.href = 'intent://' + param + '#Intent;package=com.kakao.talk;end';
    //       }, 100);
    //   }
    //   else if(navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i))
    //   {
    //       setTimeout(function(){
    //           location.href = 'itms-apps://itunes.apple.com/app/id362057947?mt=8';
    //       }, 200);
    //       setTimeout(function(){
    //           location.href = 'kakaolink://' + param;
    //       }, 100);
    //   }
    // },
    // makeKakaoShareButton() {
    //   console.log("make kakao share button")

    //   window.Kakao.Link.createCustomButton({
    //   container: '#kakao_share',
    //     templateId: 51963,
    //     templateArgs: {
    //       // 'title': '제목 영역입니다.',
    //       // 'description': '설명 영역입니다.',
    //       'avg': this.avg,
    //     },
    //     // avg: this.avg,
    //     // '${avg}': this.avg,
    //   });
    //   return;
      // window.Kakao.Link.createDefaultButton({
      //   container: '#kakao_share',
      //   objectType: 'feed',
      //   content: {
      //     title: 'Brain Gym-Reaction Time',
      //     description: `Reaction time: ${this.avg}!`,
      //     imageUrl:
      //       'https://cdn.jsdelivr.net/gh/0ArchLinux0/profileImageForCDN/Brain-Gym.png',
      //     link: {
      //       mobileWebUrl: 'https://brain-gym.netlify.app/reaction-time',
      //       // webURL: 'https://brain-gym.netlify.app/reaction-time'
      //       // androidExecParams: 'test',
      //     },
      //   },
      //   // social: {
      //   //   likeCount: 10,
      //   //   commentCount: 20,
      //   //   sharedCount: 30,
      //   // },
      //   buttons: [
      //     {
      //       title: 'Want to challenge!',
      //       link: {
      //         mobileWebUrl: 'https://brain-gym.netlify.app/reaction-time',
      //       },
      //     },
      //     // {
      //     //   title: '앱으로 이동',
      //     //   link: {
      //     //     mobileWebUrl: 'https://developers.kakao.com',
      //     //   },
      //     // },
      //   ]
      // });
    // },
    kakaotalkShare() {
      window.Kakao.Link.sendCustom({
        templateId: 51963,
        templateArgs: {
          'avg': this.avg,
        },
      });
    },
    // tryConnectionWhenRefreshed() {
    //   if(!window.Kakao || !window.Kakao.isInitialized()) {
    //     // clearTimeout(this.timeoutId);
    //     // this.timeoutId = setTimeout(this.tryConnectionWhenRefreshed, 200);
    //     // if(this.kakaoConnectionAttempt++==15) return;
    //   }
    //   else this.makeKakaoShareButton(); 
    // },
    getAvg(avg) {
      this.avg = avg;
      if(this.onResult) this.centerMessage = `Average reaction time is ${this.avg}`;
      // console.log('Average shoot~~~!: ' + this.avg);
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
        // this.sum += this.reactionTime;
        const temp  = [...this.scoreArr, this.reactionTime];
        this.scoreArr = [...temp];
        this.userHaveToClick = false;
        if(this.testCount == 5) { //All 5 attempt finished
          this.onResult = true;
          this.instruction = 'Click to try again';
          // this.makeKakaoShareButton();
          this.notify = '';
          // nextTick(this.makeKakaoShareButton());
          // this.sum = 0;
          // this.scoreArr = [];
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
            // this.$refs.card.style['animation-play-state'] = 'running';
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
    // window.addEventListener('load', this.tryConnectionWhenRefreshed);
    // this.tryConnectionWhenRefreshed();
  },
  data() {
    return {
      assetUrl: undefined,
      currentTimeStamp: undefined,
      scoreArr: [],
      scoreAverage: undefined,
      testCount: 1,
      bgColor: 'black',
      onResult: false,
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
      notify: '',
      textColor: 'white',
      avg: 0,
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
