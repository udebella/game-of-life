<template>
  <div class="board" v-for="(_, y) in verticalSize" :key="y">
    <game-of-life-cell
      v-for="(_, x) in horizontalSize"
      :key="`${x}.${y}`"
      :x="x"
      :y="y"
      :game="gameOfLife"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GameOfLife } from "@/domain/game-of-life";
import GameOfLifeCell from "@/components/game-of-life-cell.vue";

const createRandomStart = (size: number) => {
  return [...new Array(size)].map(() =>
    [...new Array(size)].map(() => Math.round(Math.random()))
  );
};

export default defineComponent({
  name: "game-of-life",
  data: () => ({
    gameOfLife: new GameOfLife(createRandomStart(40)),
  }),
  created() {
    setInterval(() => {
      this.gameOfLife.nextTick();
    }, 1000);
  },
  computed: {
    horizontalSize() {
      const [x] = this.gameOfLife.size();
      return x;
    },
    verticalSize() {
      const [, y] = this.gameOfLife.size();
      return y;
    },
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
