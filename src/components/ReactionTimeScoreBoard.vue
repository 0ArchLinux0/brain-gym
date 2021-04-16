<template>
  <div 
    class="absolute flex flex-col justify-start items-start mt-20 w-full h-full"
    style="marginLeft: 8rem;">
    
    <div 
      v-for="(time, idx) in timeRecord"
      :key="`record-${idx}`"
    >
      {{idx}}st : {{time}}
    </div>
    <div> average : {{avg}} </div>
  </div>
</template>

<script>
export default {
  name: 'ReactionTimeScoreBoard',
  props: {
    timeRecord: Object,
  },
  computed: {
    avg() {
      let avg = 0;
      for(const ele of this.timeRecord) {
        avg += ele;
        console.log(ele);
      }
      console.log(avg);
      return this.timeRecord.length ? (avg/this.timeRecord.length).toFixed(2) : 0;
    }
  },
  watch: {
    timeRecord(newVal) {
      console.log("fuck");
      console.log(newVal);
      console.log(newVal.Target);
    }
  },
  methods: {
  },
  mounted() {
  },
  data() {
    return {
    };
  },
}
</script>

<style scoped>
</style>
