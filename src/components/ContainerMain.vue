<template>
  <div class="w-full h-full text-white">
    <NavigationBar/>
    <!-- style="color:#a2ebf6"-->
    <div class="text-xl mb-2 pt-4 md:text-6xl md:pt-2 md:pb-5">
      Brain Gym
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
</style>
