<template>
  <div>
    <div v-if="mobile" class="flex flex-col px-2 w-full justify-between items-center">
      Login view
    </div>
    <div v-else class="flex w-full h-full px-7 justify-between">
      Login view
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
  props: {
  },
  computed: {
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
