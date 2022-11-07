<template>
  <div class="black-bg" v-if="modals === true">
    <div class="white-bg">
      <h4>상세페이지 입니다</h4>
      <p>상세페이지 내용입니다.</p>
      <button v-on:click="modals = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(data, i) in menus" :key="i">{{ data }}</a>
  </div>

  <div>
    <img src="./assets/room0.jpg" class="room-img" />
    <h4 v-on:click="modals = true">{{ products[0] }} 원룸</h4>
    <p>50 만원</p>
    <button v-on:click="reports[0] += 1">허위매물 신고</button> <span>신고수 : {{ reports[0] }}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img" />
    <h4>{{ products[1] }} 원룸</h4>
    <p>60 만원</p>
    <button v-on:click="reports[1] += 1">허위매물 신고</button> <span>신고수 : {{ reports[1] }}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img" />
    <h4>{{ products[2] }} 원룸</h4>
    <p>70 만원</p>
    <button v-on:click="reports[2] += 1">허위매물 신고</button> <span>신고수 : {{ reports[2] }}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
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
  background: white;
  border-radius: 8px;
  padding: 20px;
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
