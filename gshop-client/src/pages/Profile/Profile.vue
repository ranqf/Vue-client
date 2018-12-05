<template>
  <div class="m-hd">
    <div class="m-topBar">
      <div class="bd">
        <div class="row">
          <i class="u-icon u-icon-home"></i>
          <div class="logo">
            <img src="./logo.png" alt="">
          </div>
          <div class="right">
            <img class="sou" src="./ce.png" alt="">
            <img class="cart" src="./ce.png" alt="">
          </div>
        </div>
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
  .m-hd
    position: fixed!important;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
    .m-topBar
      position: relative;
      .bd
        position: relative;
        height: 1.16rem;
        background-color: #fafafa;
        .row
          z-index: 1;
          width: 10rem;
          margin: auto;
          overflow: hidden;
          position: relative;
          padding: 0 .21333rem 0 .32rem;
          height: 1.17333rem;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: justify;
          justify-content: space-between;
          .u-icon-home
            width: .64rem;
            height: .58667rem;
            background-position: 0 -.98667rem;
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
            background-repeat: no-repeat;
            background-size: 2.29333rem 5.6rem;
          .logo
            position: absolute;
            top: 0.3rem;
            left: 2.6rem;
            >img
              width: 2.29333rem;
              height: .62rem;
              display: inline-block;
              background-repeat: no-repeat;
          .right
            margin-left: auto;
            margin-right: .06667rem;
            .sou
              position: absolute;
              width: .64rem;
              height: .58667rem;
              top: 0.01rem;
              right: 1.1rem;
            .cart
              position: absolute;
              bottom -.07rem
              right: 2.3rem;
</style>
