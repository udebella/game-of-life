<template>
  <game-of-life />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GameOfLife from "@/components/game-of-life.vue";

export default defineComponent({
  name: "App",
  components: {
    GameOfLife,
  },
});
</script>
