/*
包含n个用来直接更新状态数据的方法的对象
 */
import Vue from "vue"

import {RECEIVE_KINGKONGLIST} from "./mutation-types"

export default {
  [RECEIVE_KINGKONGLIST](state, {kingKongList}){
    state.kingKongList = kingKongList
  }
}
