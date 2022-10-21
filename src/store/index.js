"use strict";

import { createStore } from "@/vuex";

export default createStore({
  state: {
    hits: 0,
  },
  actions: {
    setHitsAsync({ commit }, payload) {
      console.log('actions:', payload);
      commit("setHits", payload);
    },
  },
  mutations: {
    setHits(state, { hits }) {
      console.log('mutations:', hits);
      state.hits = hits;
    },
  },
  getters: {
    hits(state){
      return state.hits;
    }
  }
});
