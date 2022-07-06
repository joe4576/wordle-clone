<script setup lang="ts">
import { onMounted, reactive } from "vue";
import api from "@/utils/api";
import Board from "@/components/Board.vue";

export interface GameState {
  word: string;
  currentRow: number;
  currentGuesses: string[];
  numberOfRows: number;
}

const state = reactive<GameState>({
  word: "",
  currentRow: -1,
  currentGuesses: [],
  numberOfRows: 6,
});

onMounted(async () => {
  state.word = await api.getRandomWordByLength(5);
  state.currentRow = 0;
});

const confirmWord = () => {
  const guessedWord = state.currentGuesses.join("");

  if (guessedWord === state.word) {
    // win
  }
};

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (key === "enter" && state.currentGuesses.length === state.word.length) {
    confirmWord();
    return;
  }

  if (key === "backspace" && state.currentGuesses.length) {
    state.currentGuesses.pop();
    return;
  }

  const regex = new RegExp(/^[a-zA-Z]*$/);

  if (
    regex.test(key) &&
    key.length === 1 &&
    state.currentGuesses.length !== state.word.length
  ) {
    state.currentGuesses.push(key);
  }
});
</script>

<template>
  <main>
    <Board :game-state="state" />
  </main>
</template>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
