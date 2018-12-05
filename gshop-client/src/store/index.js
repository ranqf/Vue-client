import Vue from "vue"
import Vuex from "vuex"
import actions from "./actions"
import getters from "./getters"
import mutationgs from "./mutations"
import state from "./state"

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  mutationgs,
  state
})
