<template>
  <div class="cell" :style="{ backgroundColor: color }"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "game-of-life",
  props: {
    board: {
      type: Object,
      required: true,
    },
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  },
  computed: {
    color() {
      return this.board[this.y][this.x] ? "green" : "red";
    },
  },
});
</script>

<style scoped>
.cell {
  width: 10px;
  height: 10px;
}
</style>
