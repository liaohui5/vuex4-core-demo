<template>
  <div>
    <div>点击了 {{ store.getters.hits }} 次</div>
  </div>
</template>

<script setup>
import { useStore } from "@/vuex";
const store = useStore();
</script>
