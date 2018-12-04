<template>
  <div id="app">
    <router-view/>
    <FootGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FootGuide from "./components/FootGuide/FootGuide.vue"
  export default {
  name: 'App',
    components:{   // 局部注册, 只能在当前组件中使用
      FootGuide
    },
}
</script>

<style lang="stylus">

</style>
