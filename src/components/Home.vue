<template>
  <div class="relative w-full h-auto">
    <div v-if="mobile" class="flex flex-col px-2 pb-10 w-full justify-between items-center">
      <BigCategoryBox
        v-for="infoPair in infoData1"
        :key="`item-${infoPair.title}`"
        :calcSize="calcSize"
        :titleProp="infoPair.title"
        :fileName="infoPair.fileName"
      />
      <BigCategoryBox
          v-for="infoPair in infoData2"
          :key="`item-${infoPair.title}`"
          :calcSize="calcSize"
          :titleProp="infoPair.title"
          :fileName="infoPair.fileName"
        />
    </div>
    <div v-else>
      <div class="flex w-full h-full px-7 justify-between">
        <BigCategoryBox
          v-for="infoPair in infoData1"
          :key="`item-${infoPair.title}`"
          :calcSize="calcSize"
          :titleProp="infoPair.title"
          :fileName="infoPair.fileName"
        />
      </div>
      <div class="flex w-full h-full px-7 justify-between">
        <BigCategoryBox
          v-for="infoPair in infoData2"
          :key="`item-${infoPair.title}`"
          :calcSize="calcSize"
          :titleProp="infoPair.title"
          :fileName="infoPair.fileName"
        />
      </div>
    </div>
    
  </div>
</template>

<script>
import BigCategoryBox from "@/components/BigCategoryBox.vue"
export default {
  name: 'Home',
  components: {
    BigCategoryBox
  },
  props: {
    title: String,
    fileName: String,
    mobile: Boolean,
  },
  watch: {
    calcSize() {
      console.log("change");
    }
  },
  computed: {
  },
  methods: {
    pcResize() {
      if(window.innerWidth > 1050) {
        if(this.calcSize.width!=='300px') 
          this.calcSize =  { 
            width: '300px', 
            height: '250px'
          };
      }
      else this.calcSize = { 
        width: `${window.innerWidth * 2 / 7}px`,
        // height: `${window.innerWidth * 5 / 21}px` 
        // height: `${window.innerWidth * 7.3 / 21}px` 
      };
    },
    mobileResize() {
      console.log(window.innerWidth);
      if(window.innerWidth >  380) {
        if(this.calcSize.width!=='300px') 
          this.calcSize =  { 
            width: '300px', 
            height: '250px'
          };
      }
      else this.calcSize = { 
        width: `${window.innerWidth * 6/ 7}px`,
        // height: `${window.innerWidth * 5 / 7}px` 
        // height: `${window.innerWidth * 17 / 7}px` 
      };
    }
  },
  mounted() {
    if(this.mobile) {
      this.callback = this.mobileResize;
    } else this.callback = this.pcResize;
    window.addEventListener('resize', ()=>{
      clearTimeout(this.resizeEventId);
      this.resizeEventId = setTimeout(this.callback, 400);
    });
    this.callback();
  },
  data() {
    return {
      assetUrl: undefined,
      infoData1: [
        {
          title: 'Reaction Time',
          fileName: 'speed.png'
        },
        {
          title: 'Number Memory',
          fileName: 'numbers.png'
        },
        {
          title: 'Mental Arithmetic',
          // fileName: 'maintainance.png'
          fileName: 'black_arithmetic.png'
        },
      ],
      infoData2: [
        {
          title: 'Quickness',
          // fileName: 'maintainance.png'
          fileName: 'Quickness.png'
        },
        {
          title: 'Mental Arithmetic',
          // fileName: 'maintainance.png'
        },
        {
          title: 'Mental Arithmetic',
          // fileName: 'maintainance.png'
        },
      ],
      calcSize: { 
        width: '300px', 
        height: '250px'
      },
      resizeEventId: undefined,
      callback: undefined,
    };
  },
}
</script>
