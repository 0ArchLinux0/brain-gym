<template>
  <div class="w-full text-white">
    <NavigationBar/>
    <!-- <div class="w-full h-12 bg-blue-300"/> -->
    <div class="text-7xl bg-blue-600 mb-6">Brain Training</div>

    
    
    <router-view/>
   
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
    msg: String
  }
}
</script>

<style scoped>
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
</style>
