<template>
  <div class="menu">
    <a v-for="(data, i) in menus" :key="i">{{ data }}</a>
  </div>

  <Modal :rooms="rooms" :check="check" :modals="modals" @showModal="modals = false" />

  <Discount />

  <Card
    @showModal="
      modals = true;
      check = $event;
    "
    v-for="data in rooms"
    :key="data.id"
    :data="data"
  />
</template>

<script>
import roomsData from "./data/post.js";
import Discount from "./Discount.vue";
import Modal from "./Modal.vue";
import Card from "./Card.vue";

export default {
  name: "App",
  data() {
    return {
      check: 0,
      rooms: roomsData,
      modals: false,
      reports: [0, 0, 0],
      menus: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },

  methods: {
    addReports() {
      this.reports += 1;
    },
  },

  components: {
    Discount,
    Modal,
    Card,
  },
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.room-img {
  width: 100%;
  max-width: 600px;
  margin-top: 40px;
}

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
