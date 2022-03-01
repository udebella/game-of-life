<template>
  <div :style="{ backgroundColor: color, height: size, width: size }" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GameOfLife } from "@/domain/game-of-life";

export default defineComponent({
  name: "game-of-life",
  props: {
    game: {
      type: GameOfLife,
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
      return this.game.cell(this.x, this.y) ? "green" : "red";
    },
    size() {
      const [horizontalSize] = this.game.size();
      const size = 800 / horizontalSize;
      return `${size}px`;
    },
  },
});
</script>
