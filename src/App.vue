<template>
  <div class="black-bg" v-if="modals === true">
    <div class="white-bg">
      <img :src="rooms[check].image" class="modal-image" />
      <h4>{{ rooms[check].title }}</h4>
      <p>{{ rooms[check].content }}</p>
      <p>{{ rooms[check].price }}</p>
      <button v-on:click="modals = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(data, i) in menus" :key="i">{{ data }}</a>
  </div>

  <div v-for="data in rooms" :key="data.id">
    <img :src="data.image" class="room-img" />
    <h4
      v-on:click="
        modals = true;
        check = data.id;
      "
    >
      {{ data.title }}
    </h4>
    <p>{{ data.content }}</p>
    <p>{{ data.price }} 원</p>
  </div>
</template>

<script>
import roomsData from "./data/post.js";

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

  components: {},
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  animation: showModals 0.3s ease-in-out;
}

@keyframes showModals {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.white-bg {
  width: 100%;
  max-width: 650px;
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin: auto;
}

.white-bg button {
  border: none;
  padding: 10px;
  border-radius: 55px;
  background-color: antiquewhite;
}

.room-img {
  width: 100%;
  max-width: 600px;
  margin-top: 40px;
}

.modal-image {
  width: 100%;
  max-width: 550px;
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
