<template>
  <div id="app">
    <div class="app-page">
      <div class="home-layout">
        <navigation></navigation>
        <hr />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/navigation.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Navigation
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  /* font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #6c757d;
  font-weight: 400;
  line-height: 1.5;
  font-size: 16px;
}
.cta-300 {
  min-width: 300px;
}
ul {
  list-style: none;
  padding: 0;
}
h1,
h2,
h3 {
  font-weight: 700;
  line-height: 1.2;
  color: #343a40;
}
p {
  font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
