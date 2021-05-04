<template>
  <div class="relative w-full text-white">
    <NavigationBar/>
    <!-- style="color:#a2ebf6"-->
    <div class="flex justify-center">
      <div 
        class="text-xl mb-1 mt-2 md:text-6xl md:pt-2 md:pb-5"
      >
        {{title}}
      </div>
    </div>
    <router-view
     :mobile="mobile"
    />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue"
// import BigCategoryBox from "@/components/BigCategoryBox.vue"
export default {
  name: 'HelloWorld',
  components: {
    NavigationBar,
    // BigCategoryBox,
  },
  props: {
    mobile: Boolean,
  },
  watch: {
    '$route' (to, from) {
      // console.log(to);
      if(to.path == from.path) return;
      else {
        switch(to.name) {
          case 'Home':
            this.title = "Brain Gym";
            break;
          case 'NumberMemory':
            this.title = 'Number Memory';
            break;
          case 'ReactionTime':
            this.title = "Reaction Time";
            break;
          default:
            this.title = "Brain Gym";
            break;
        }
      }
    }
  },
  data() {
    return {
      title: "Brain Gym",
    }
  },
  mounted() {
    // if(this.$router.)
    // console.log(this.$route);
  }
}
</script>


<style scoped>
/* div {
  font-family: 'ZenDots';
  text-align: center;
} */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
li {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  /* Column | row */
} 
a {
  color: #42b983;
}
#big-caterogy {
  border: solid 0px;
  border-radius: 5rem;
  padding: 4px 1rem;
  margin-bottom: 1rem;
  background-color: rgb(226, 43, 83);
}
/* #ContainerMain {
  background-color: yellowgreen;
} */
</style>
