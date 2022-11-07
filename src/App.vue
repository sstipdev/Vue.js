<template>
  <div class="menu">
    <a v-for="(data, i) in menus" :key="i">{{ data }}</a>
  </div>
  <div v-for="(data, i) in products" :key="i">
    원룸샵
    <h4>{{ data }}</h4>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menus: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      price: [50, 70, 90],
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
  cursor: pointer;
}
</style>
