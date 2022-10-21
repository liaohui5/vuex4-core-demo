"use strict";

import { reactive, inject } from "vue";
import {
  createActions,
  createMutations,
  createGetters,
  createDispatch,
  createCommit,
} from "./creators";

class Store {
  constructor(options) {
    const { state = {}, mutations = {}, actions = {}, getters = {} } = options;
    this._state = reactive({ data: state });
    this._actions = Object.create(null);
    this._mutations = Object.create(null);
    createActions(this, actions);
    createMutations(this, mutations);
    createGetters(this, getters);
    createDispatch(this, this.dispatch);
    createCommit(this, this.commit);
  }

  get state() {
    return this._state.data;
  }

  dispatch(actionType, payload) {
    this._actions[actionType](payload);
  }

  commit(mutationType, payload) {
    this._mutations[mutationType](payload);
  }

  install(app) {
    // 在所有组件的模板中可以直接使用 $store
    app.config.globalProperties.$store = this;

    // 给所有子组件提供一个store属性
    app.provide("store", this);
  }
}

// 创建一个store
export function createStore(options) {
  return new Store(options);
}

// 获取 install 提供的 store 属性, 返回
export function useStore() {
  return inject("store");
}
