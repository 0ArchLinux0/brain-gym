<template>
  <div class="my-2">
    <div 
      class="flex flex-col justify-start items-center bg-blue-100 rounded-md pt-5 cursor-pointer overflow-hidden"
      :style="calcSize"
      @click="pushToRouter"
    >
      <img 
        v-if="assetUrl !== undefined"
        :src="assetUrl"
        :style="calcImgSize"
        @error="showDefault(err)"
      />
      <div class="mt-6 mb-5 text-lg text-black font-semibold sm:text-xl md:text-2xl sm:text-3xl lg:text-4xl "> 
        {{title}}
      </div>
      <!-- <div v-for="item in [1,2,3]"
        :key="'key'+item"
        class="w-full bg-blue-400 ml-20 text-lg mb-2"
        style="textAlign:left;"
      >
        item: {{item}}
      </div> -->
      <!-- <div class="bg-yellow-500 mb-">
        description
      </div> -->
    </div>
  </div>
</template>

<script>
const defaultImage = require("@/assets/maintainance.jpeg") //TODO : change default image to show when error occurs
export default {
  name: 'BigCategoryBox',
  props: {
    titleProp: String,
    fileName: String,
    calcSize: Object,
  },
  watch: {
    calcSize(newVal, oldVal) {
      console.log(newVal.width);
      if(newVal == oldVal) return;
      if(newVal.width=='300px') 
        this.calcImgSize = { 
          width: '128px', 
          height: '128px'
        }; 
      else {
        this.calcImgSize = { 
          width: `${newVal.width * 3 / 5}px`,
          height: `${newVal.width * 3 / 5}px`
        }; 
      }
      console.log(newVal);
    }
  },
  computed: {
    convertTitleToComponentName() {
      console.log(this.title.replace(' ',''));
      return this.title.replace(' ','');
    },
  },
  mounted() {
    this.title = this.titleProp;
    
    try {
      this.assetUrl = require(`@/assets/${this.fileName}.jpeg`);
    } catch(e) {
      // console.log(e);
      this.assetUrl = defaultImage;
      this.title = "Preparing..."
    }
    console.log(this.assetUrl);
  },
  data() {
    return {
      assetUrl: undefined,
      title: undefined,
      calcImgSize : { 
        width: '128px', 
        height: '128px'
      }, 
    };
  },
  methods: {
    showDefault(err) {
      console.log(err);
      console.log(this.assetUrl);
      this.assetUrl = defaultImage;
    },
    pushToRouter() {
      this.$router.push({
        name: this.convertTitleToComponentName,
        //params:
      });
    }
  }
}
</script>

<style scoped>

#big-caterogy {
  border: solid 0px;
  border-radius: 5rem;
  padding: 4px 1rem;
  margin-bottom: 1rem;
  background-color: rgb(226, 43, 83);
}
</style>
