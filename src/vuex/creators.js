"use strict";

import { computed } from "vue";
import { forIn } from "./utils.js";

// 遍历 actions 中的所有方法, 重写放到 store._action 中
export function createActions(store, actions) {
  forIn(actions, function (actionKey, actionItem) {
    store._actions[actionKey] = function (payload) {
      actionItem.call(store, store, payload);
    };
  });
}

// 遍历 muations 中的所有方法, 重写放到 store._mutations 中
export function createMutations(store, mutations) {
  forIn(mutations, function (mutationKey, mutationItem) {
    store._mutations[mutationKey] = function (payload) {
      mutationItem.call(store, store.state, payload);
    };
  });
}

// 给 store 的 getters 上定义属性, 值是 getters 中方法的值
export function createGetters(store, getters) {
  store.getters = Object.create(null);
  forIn(getters, function (key, getterItem) {
    Object.defineProperty(store.getters, key, {
      get() {
        return computed(() => getterItem(store.state, store.getters)).value;
      },
    });
  });
}

// 创建 dispatch/commit 如果是结构出来的, this 的指向不会指向 Store 实例
// 所以必须要重新包装一下, 让 this 指向变成 store 实例
// 为什么要重新赋值, 而不是直接 bind ?
// 因为重新赋值更加利于扩展
export function createDispatch(store, dispatch) {
  store.dispatch = function (type, payload) {
    dispatch.call(store, type, payload);
  };
}

export function createCommit(store, commit) {
  store.commit = function (type, payload) {
    commit.call(store, type, payload);
  };
}
