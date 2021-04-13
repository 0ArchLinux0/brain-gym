<template>
  <div class="flex flex-col items-center w-full">
    Reaction time test!
    <div 
      class="flex flex-col justify-around w-full"
      style="height: 60vh"
      v-bind:style="{'backgroundColor': bgColor}"
    >
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
      setInterval(()=> {
        this.bgColor = 
          ['green','red','blue','yellow','black','orange'][parseInt(Math.random()*100)%6]
      }, 1000);
    }
  },
  mounted() {
    this.initTimeStamp = new Date();
    //startCountDown().then()// make this as promise
    this.startTest();
  },
  data() {
    return {
      assetUrl: undefined,
      initTimeStamp: undefined,
      currentTimeStamp: undefined,
      bgColor: 'blue',
    };
  },
}
</script>
