<template>
  <div class="black-bg" v-if="modals === true">
    <div class="white-bg">
      <img :src="rooms[check].image" class="modal-image" />
      <h4>{{ rooms[check].title }}</h4>
      <p>{{ rooms[check].content }}</p>
      <input v-model.number="month" />
      <select v-model="month">
        <option>2</option>
        <option>5</option>
        <option>8</option>
        <option>12</option>
      </select>
      <p>{{ month }} 개월 {{ rooms[check].price * month }}</p>
      <button @click="$emit('closeModal')">닫기</button>
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
  data() {
    return {
      month: 1,
    };
  },
  // watch는 데이터를 감시함.
  watch: {
    month(a) {
      if (isNaN(a) === true) {
        alert("문자입력은 금지입니다.");
        this.month = 1;
      }
    },
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
