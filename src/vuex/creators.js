"use strict";

import { computed } from "vue";
import { forIn } from "./utils.js";

export function createActions(store, actions) {
  forIn(actions, function (actionKey, actionItem) {
    store._actions[actionKey] = function (payload) {
      actionItem.call(store, store, payload);
    };
  });
}

export function createMutations(store, mutations) {
  forIn(mutations, function (mutationKey, mutationItem) {
    store._mutations[mutationKey] = function (payload) {
      mutationItem.call(store, store.state, payload);
    };
  });
}

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
