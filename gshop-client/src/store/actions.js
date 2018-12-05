

import {RECEIVE_KINGKONGLIST} from "./mutation-types"

import {reqKingKongList} from "../api"

export default {
  // 异步获取商家商品列表
  async getKingKongList({commit}, callback){
    const result = await reqKingKongList();
    if (result.code === 200) {
     const kingKongList = result.data
    }
  }
}
