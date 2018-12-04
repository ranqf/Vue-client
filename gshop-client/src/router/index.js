import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../pages/Home/Home.vue"    //首页
import Classify from "../pages/Classify/Classify.vue"   //分类
import General from "../pages/General/General.vue"   //识物
import ShopCart from "../pages/ShopCart/ShopCart.vue"  //购物车
import Profile from "../pages/Profile/Profile.vue"    //个人
import Login from "../pages/Login/Login.vue"



Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta:{
        isShow: true  //标识显示底部导航
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta:{
        isShow: true  //标识显示底部导航
      }
    },
    {
      path: '/general',
      component: General,
      meta:{
        isShow: true  //标识显示底部导航
      }
    },
    {
      path: '/shopCart',
      component: ShopCart,
      meta:{
        isShow: true  //标识显示底部导航
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        isShow: true  //标识显示底部导航
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: "/home"  //默认停留在首页
    }
  ]
})
