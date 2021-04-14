<template>
  <div class="flex flex-col items-center w-full">
    Reaction time test!
    <div 
      class="flex flex-col justify-around w-full"
      style="height: 60vh"
      v-bind:style="{'backgroundColor': bgColor}"
      @click="startCountDown"
    >
      <div id="countdownscene" class="flex text-white text-5xl">
        <div id="card" ref="card">
          <div class="card_face face_front">{{countDownNum1}}</div>
          <div class="card_face face_back">{{countDownNum2}}</div>
        </div>
      </div>
      <div class="text-3xl font-semibold"> Click When Color Changes!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReactionTime',
  props: {
    title: String,
    fileName: String,
  },
  computed: {
  },
  methods: {
    startTest() {
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
    startCountDown() {
      this.$refs.card.style['animation-play-state'] = 'running';
      },
    rotateTest() {
    }
  },

  mounted() {
    this.initTimeStamp = new Date();
    //startCountDown().then()// make this as promise
    //window.requestAnimationFrame(this.startTest);
    const animatedEl = document.getElementById('card');
    animatedEl.addEventListener('animationiteration', () => {
      console.log('animation iterating!!!!');
      // this.countDownNum1--;

    })

// animated.addEventListener('animationend', () => {
//   console.log('Animation ended');
// });
  },
  data() {
    return {
      assetUrl: undefined,
      initTimeStamp: undefined,
      currentTimeStamp: undefined,
      bgColor: 'blue',
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
  width: 100px;
  height: 100px
}
#card {
  /* backface-visibility: visible; */
  position: relative;
  backface-visibility: hidden;
  animation: flip 2s linear infinite;
  animation-play-state: paused;
  transform-style: preserve-3d;
  display: flex;
  justify-content: space-around;
}
.card_face {
  text-align: center;
  padding: auto;
  position: absolute;
  /* opacity: 1; */
}
.face_back {
  /* position: absolute; */
  transform: rotateY(180deg);
  /* background-color: cyan; */
}
.face_front {
  /* position: absolute; */
  transform: rotateY(0deg); 
  /* background-color: red; */
}
@keyframes flip {
  from { transform: rotateY(0) }
  to { transform: rotateY(360deg) }
}
@keyframes flip0To90 {
  from { transform: rotateY(180deg) }
  to { transform: rotateY(360deg) }
}
@keyframes flip90To {
  from { transform: rotateY(0) }
  to { transform: rotateY(360deg) }
}
</style>
