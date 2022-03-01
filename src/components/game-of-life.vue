<template>
  <div class="board" v-for="(_, y) in gameOfLife.board.length" :key="y">
    <game-of-life-cell
      v-for="(_, x) in gameOfLife.board[y]?.length"
      :key="`${x}.${y}`"
      :x="x"
      :y="y"
      :board="gameOfLife.board"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GameOfLife } from "@/domain/game-of-life";
import GameOfLifeCell from "@/components/game-of-life-cell.vue";

export default defineComponent({
  name: "game-of-life",
  data: () => ({
    gameOfLife: new GameOfLife([
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]),
  }),
  created() {
    setInterval(() => {
      this.gameOfLife.nextTick();
    }, 1000);
  },
  components: {
    GameOfLifeCell,
  },
});
</script>

<style scoped>
.board {
  display: flex;
}
</style>
