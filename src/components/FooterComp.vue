<template>
  <div
    class="fixed b-0 flex flex-col w-full items-center justify-center border-t bg-white py-1 md:flex-row"
  >
    <div class="flex flex-col justify-start w-full md:w-3/5">
      <div class="flex flex-col items-center">
        <div class="w-full justify-center items-center flex flex-wrap">
          <span class="inline-block px-1">@</span>
            <!-- href="/about" -->
          <a
            class="flex px-1 whitespace-no-wrap"
            :class="{ 'text-sm': !isMobile, 'text-xs': isMobile }"
          >
            copyright: minjun_park
          </a>
          <span class="inline-block px-1">@</span>
          <a
            href="https://0archlinux0.github.io/posts/Contact/"
            class="flex px-1 whitespace-no-wrap"
            :class="{ 'text-sm': !isMobile, 'text-xs': isMobile }"
          >
            contact
          </a>
          <span class="inline-block px-1">@</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterComp",
  mounted() {
  },
  data() {
    return {
      isMobile: false,
    };
  },
};
</script>
<style scoped>
  a:hover {
    color: lightgreen;
  }
</style>
