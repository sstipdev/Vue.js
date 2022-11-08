<template>
  <div class="black-bg" v-if="modals === true">
    <div class="white-bg">
      <img :src="rooms[check].image" class="modal-image" />
      <h4>{{ rooms[check].title }}</h4>
      <p>{{ rooms[check].content }}</p>
      <p>{{ rooms[check].price }}</p>
      <!-- <button v-on:click="modals = false">닫기</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    rooms: Array,
    check: Number,
    modals: Boolean,
  },
};
</script>

<style>
@keyframes showModals {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.black-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  animation: showModals 0.3s ease-in-out;
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

.modal-image {
  width: 100%;
  max-width: 550px;
}
</style>
