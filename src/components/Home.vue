<template>
  <div class="flex w-full h-full justify-between">
    <BigCategoryBox
      v-for="infoPair in infoData"
      :key="`item-${infoPair.title}`"
      :titleProp="infoPair.title"
      :fileName="infoPair.fileName"
    />
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
  },
  computed: {
  },
  mounted() {
  },
  data() {
    return {
      assetUrl: undefined,
      infoData: [
        {
          title: 'Reaction Time',
          fileName: 'speed'
        },
        {
          title: 'Number Memory',
          fileName: ''
        },
        {
          title: 'Aim Trainer',
          fileName: ''
        },
      ],
    };
  },
  methods: {
  }
}
</script>
