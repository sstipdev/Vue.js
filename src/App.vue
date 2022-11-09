<template>
  <transition name="fade">
    <Modal :rooms="rooms" :check="check" :modals="modals" @closeModal="modals = false" />
  </transition>

  <div class="menu">
    <a v-for="(data, i) in menus" :key="i">{{ data }}</a>
  </div>

  <Discount v-if="showCount === true" :count="count" />

  <button @click="priceLowSort">가격 낮은순</button>
  <button @click="priceHighSort">가격 높은순</button>
  <button @click="sortBack">되돌리기</button>

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
      count: 30,
      showCount: true,
      roomsBase: [...roomsData],
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
    sortBack() {
      this.rooms = [...this.roomsBase];
    },
    priceLowSort() {
      this.rooms.sort((a, b) => a.price - b.price);
    },
    priceHighSort() {
      this.rooms.sort((a, b) => b.price - a.price);
    },
  },

  mounted() {
    setInterval(() => {
      if (this.count !== 0) {
        return (this.count -= 1);
      }
      return (this.showCount = false);
    }, 1000);
  },

  components: {
    Discount,
    Modal,
    Card,
  },
};
</script>

<style>
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0);
}

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
