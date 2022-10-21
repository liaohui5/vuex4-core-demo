<template>
  <div>
    <!-- <div>点击了 {{ store.getters.hits }} 次</div> -->
    <button @click="handleClick">click</button>
  </div>
</template>

<script setup>
import { useStore } from "@/vuex";
const store = useStore();

function handleClick() {
  store.dispatch("setHitsAsync", {
    hits: store.state.hits + 1,
  });

  // store.commit("setHits", {
  //   hits: store.state.hits + 1,
  // });
}
</script>

<style lang="scss" scoped></style>
