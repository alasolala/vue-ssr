import Vue from 'vue'
import Vuex from 'vuex'
import { top20 } from '../api'

Vue.use(Vuex)

export function createStore () {
  const store = new Vuex.Store({
    state: {
      topList: null
    },
    mutations: {
      setTopList (state, list) {
        state.topList = list
      }
    },
    actions: {
      getTopList (store) {
        return top20().then((res) => {
          store.commit('setTopList', res.data.subjects)
        })
      }
    }
  })
  return store
}

