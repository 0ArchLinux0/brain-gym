<template>
  <div>
    <div 
      class="flex flex-col justify-start items-center bg-blue-100 rounded-md pt-5 cursor-pointer"
      style="width:300px;height:250px"
      @click="pushToRouter"
    >
      <img 
        v-if="assetUrl !== undefined"
        :src="assetUrl"
        @error="showDefault(err)"
      />
      <div class="mt-6 mb-5 text-4xl text-black font-semibold"> 
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
  },
  computed: {
    convertTitleToComponentName() {
      console.log(this.title.replace(' ',''));
      return this.title.replace(' ','');
    }
  },
  mounted() {
    this.title = this.titleProp;
    console.log(this.titleProp);
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
      title: undefined
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
