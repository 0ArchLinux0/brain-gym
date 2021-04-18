<template>
  <div
    class="flex flex-col w-full items-center justify-center border-t bg-white py-3 md:flex-row text-plaxtextg"
  >
    <div class="flex flex-col justify-start w-full md:w-3/5">
      <div class="flex flex-col items-center">
        <div class="w-full justify-center items-center flex flex-wrap">
          <a
            href="/oppolicy1"
            class="flex px-1 whitespace-no-wrap hover:text-gray-500"
            :class="{ 'text-sm': !isMobile, 'text-xs': isMobile }"
          >
            이용약관
          </a>
          <span class="inline-block px-1">|</span>
          <a
            href="/oppolicy2"
            class="flex px-1 whitespace-no-wrap hover:text-gray-500"
            :class="{ 'text-sm': !isMobile, 'text-xs': isMobile }"
          >
            개인 정보 처리 방침
          </a>
          <span class="inline-block px-1">|</span>
          <a
            href="/oppolicy3/serviceCharge"
            class="flex px-1 whitespace-no-wrap hover:text-gray-500"
            :class="{ 'text-sm': !isMobile, 'text-xs': isMobile }"
          >
            이용 안내
          </a>
          <span class="inline-block px-1">|</span>
          <a
            href="/faq"
            class="flex px-1 whitespace-no-wrap hover:text-gray-500"
            :class="{ 'text-sm': !isMobile, 'text-xs': isMobile }"
          >
            FAQ
          </a>
          <span class="inline-block px-1">|</span>
          <a
            href="/oppolicy5"
            class="flex px-1 whitespace-no-wrap hover:text-gray-500"
            :class="{ 'text-sm': !isMobile, 'text-xs': isMobile }"
          >
            인재채용
          </a>
          <span class="inline-block px-1">|</span>
          <a
            href="mailto:help@letsplax.com"
            class="flex px-1 whitespace-no-wrap hover:text-gray-500"
            :class="{ 'text-sm': !isMobile, 'text-xs': isMobile }"
            >문의 및 제안</a
          >
        </div>
      </div>
      <div
        class="py-1 flex flex-wrap font-thin w-full justify-center items-center text-plaxtextg md:items-start"
        :style="{ 'font-size': isMobile ? '0.5rem' : '0.75rem' }"
      >
        <div class="px-1">(주)플랙스뉴럴랩스 | 공동대표 : 박창윤 유영윤</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  mounted() {
  },
  data() {
    return {
      isMobile: false,
    };
  },
};
</script>
