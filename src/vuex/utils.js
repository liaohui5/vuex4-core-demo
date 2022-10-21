"use strict";

export function forIn(obj, callback) {
  for (const [key, value] of Object.entries(obj)) {
    callback(key, value);
  }
}
