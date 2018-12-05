<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="./images/1.jpg" alt=""></div>
      <div class="swiper-slide"><img src="./images/2.jpg" alt=""></div>
      <div class="swiper-slide"><img src="./images/3.jpg" alt=""></div>
      <div class="swiper-slide"><img src="./images/4.jpg" alt=""></div>
      <div class="swiper-slide"><img src="./images/5.jpg" alt=""></div>
      <div class="swiper-slide"><img src="./images/6.jpg" alt=""></div>
      <div class="swiper-slide"><img src="./images/7.jpg" alt=""></div>
      <div class="swiper-slide"><img src="./images/8.jpg" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import "swiper/dist/css/swiper.min.css"
  import Swiper from "swiper"
  export default {
    name: "",
    mounted() {
      new Swiper ('.swiper-container', {
        //自动切换开启
        autoplay: {
          delay: 1500,//1秒切换一次
        },
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .swiper-container
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap nowrap
        img
          display inline-block
          width: 7.50rem;
          height: 4rem;
</style>
