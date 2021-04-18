<template>
  <div 
    class="absolute flex flex-col justify-start items-start mt-20 w-full"
  >
    <div 
      v-for="(time, idx) in timeRecord"
      :key="`record-${idx}`"
    >
      {{idx+1}}{{pre[idx]}}: {{time}}
    </div>
    <div>avg: {{avg}} </div>
  </div>
</template>

<script>
export default {
  name: 'ReactionTimeScoreBoard',
  props: {
    timeRecord: Object,
    getAvr: Object,
  },
  computed: {
    avg() {
      let avg = 0;
      for(const ele of this.timeRecord) {
        avg += ele;
      }
      console.log('len'+ this.timeRecord.length);
      // if(this.timeRecord.length == 5) 
        this.$emit('shoot-avg-val', (avg/this.timeRecord.length).toFixed(2)); 
      return this.timeRecord.length ? (avg/this.timeRecord.length).toFixed(2) : 0;
    }
  },
  methods: {
  },
  mounted() {

  },
  data() {
    return {
      pre: ['st','nd','rd','th','th'],
    };
  },
}
</script>

<style scoped>
</style>
