<template>
  <div>
    <ul class="links-container">
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>
    </ul>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scope>
html,
body,
#app,
.links-container {
  margin: 0;
  padding: 0;
}

.links-container {
  display: flex;
  list-style: none;
  li {
    list-style: none;
    margin-right: 20px;
  }
}

.links-container,
.main-content {
  padding: 10px 20px;
}
</style>
