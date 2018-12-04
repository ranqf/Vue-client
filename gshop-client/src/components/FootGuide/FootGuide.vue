<template>
  <footer class="footer_guide border-1px">
    <!--
      动态class: 什么时候用对象方式? 类名确定, 只是不确定有没有
    -->
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/home'}" @click="goTo('/home')">
    <span class="item_icon">
      <i class="iconfont icon-shouye"></i>
    </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/classify'}" @click="goTo('/classify')">
    <span class="item_icon">
      <i class="iconfont icon-fenlei"></i>
    </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/general'}" @click="goTo('/general')">
    <span class="item_icon">
      <i class="iconfont icon-renlianshibie"></i>
    </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/shopCart'}" @click="goTo('/shopCart')">
    <span class="item_icon">
      <i class="iconfont icon-gouwuche"></i>
    </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/profile'}" @click="goTo('/profile')">
    <span class="item_icon">
      <i class="iconfont icon-personal"></i>
    </span>
      <span>个人</span>
    </a>
  </footer>

</template>

<script>
  export default {
    name: "footer-guide",
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color palevioletred
      &.on
        color red
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>

