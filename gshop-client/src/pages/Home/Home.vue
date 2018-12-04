<template>
  <div class="g-row m-index">
  <div class="m-indexHd">
    <div class="line">
      <a class="logo" href=""></a>
      <div class="m-topSearchIpt ipt">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共19932款好物</span>
      </div>
      <div class="loginBtn">登录</div>
    </div>
    <div class="tabWrap">
      <header>
        <div class="list">
          <div class="tab active">
            <span class="text">推荐</span>
          </div>
          <div class="tab">
            <span class="text">居家</span>
          </div>
          <div class="tab">
            <span class="text">鞋包配饰</span>
          </div>
          <div class="tab">
            <span class="text">服装</span>
          </div>
          <div class="tab">
            <span class="text">电器</span>
          </div>
          <div class="tab">
            <span class="text">洗护</span>
          </div>
          <div class="tab">
            <span class="text">饮食</span>
          </div>
          <div class="tab">
            <span class="text">餐厨</span>
          </div>
          <div class="tab">
            <span class="text">婴童</span>
          </div>
          <div class="tab">
            <span class="text">文体</span>
          </div>
          <div class="tab">
            <span class="text">特色区</span>
          </div>
        </div>
      </header>
    </div>
  </div>
  <div class="slideWarp">
    <div class="swiper-slide swiper-slide-prev">
      <img src="./images/1.jpg" alt="">
    </div>
    <div class="swiper-slide swiper-slide-prev">
      <img src="./images/2.jpg" alt="">
    </div>
    <div class="swiper-slide swiper-slide-prev">
      <img src="./images/3.jpg" alt="">
    </div>
    <div class="swiper-slide swiper-slide-prev">
      <img src="./images/4.jpg" alt="">
    </div>
    <div class="swiper-slide swiper-slide-prev">
      <img src="./images/5.jpg" alt="">
    </div>
    <div class="swiper-slide swiper-slide-prev">
      <img src="./images/6.jpg" alt="">
    </div>
    <div class="swiper-slide swiper-slide-prev">
      <img src="./images/7.jpg" alt="">
    </div>
    <div class="swiper-slide swiper-slide-prev">
      <img src="./images/8.jpg" alt="">
    </div>

  </div>
</div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .m-indexHd
    background-color #fff
    .line
      position: relative;
      z-index: 2;
      display: flex;
      flex-flow: row nowrap;
      -webkit-box-align: center;
      align-items: center;
      background: #fff;
      padding: .21333rem .4rem;
      .logo
        width: 1.38rem;
        height: .4rem;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        display: inline-block;
        margin-right: .2rem;
        background-size: cover;
        background-position: center;
      .m-topSearchIpt
        display: flex;
        flex-flow: row nowrap;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center
        justify-content: center;
        flex-grow 1
        height: .56rem;
        font-size: .28rem;
        background-color: #ededed;
        border-radius: .08rem;
        .icon
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .28rem;
          height: .28rem;
          margin-right: .13333rem;
          font-size: .28rem;
        .placeholder
          color: #666;
      .loginBtn
        width: .74rem;
        height: .4rem;
        line-height: .4rem;
        text-align: center;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: .08rem;
        margin-left: .16rem;
        font-size: .25rem;
    .tabWrap
      position: relative;
      z-index: 2;
      background: #fff;
      margin-top: .11333rem;
      overflow hidden
      .list
        display: flex;
        flex-flow: row nowrap;
        flex-shrink: 0;
        padding: 0 .4rem;
        background: #fff;
        .tab
          flex-shrink: 0;
          position: relative;
          display: flex;
          flex-flow: row nowrap;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          z-index: 1;
          text-align: center;
          margin-right 0.55rem
          font-size 0.28rem
  .slideWarp
    position: relative;
    width: 24rem;
    height: 4.93333rem;
    margin: 0 auto;
    .swiper-slide
      position: relative;
      width: 24rem;
      height: 1.6rem;
      flex-shrink: 0;
      >img
        width: 7.50rem;
        height: 4rem;
        position: absolute;
        left: 0;
        top .23rem
        float right
        background-size 100% 100%
</style>
