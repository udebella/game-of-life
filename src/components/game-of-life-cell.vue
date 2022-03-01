<template>
  <span>
    {{ board[y][x] }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "game-of-life",
  props: {
    board: {
      type: Array,
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
});
</script>
