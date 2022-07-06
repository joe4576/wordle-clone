<template>
  <div :class="{ tile: true, correct: correctGuess }">{{ letter }}</div>
</template>

<script lang="ts" setup>
defineProps<{
  x: number;
  y: number;
  letter: string;
  correctGuess: boolean;
}>();
</script>

<style scoped>
.tile {
  border: 1px solid black;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.correct {
  background-color: aquamarine;
}
</style>
