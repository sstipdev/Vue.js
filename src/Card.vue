<template>
  <div>
    <img :src="data.image" class="room-img" />
    <h4 v-on:click="check = data.id">
      {{ data.title }}
    </h4>
    <p>{{ data.content }}</p>
    <p>{{ data.price }} 원</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: Object,
  },
};
</script>

<style></style>
