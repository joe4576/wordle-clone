<script lang="ts" setup>
import type { GameState } from "@/App.vue";
import { h, type VNode } from "vue";
import Tile from "@/components/Tile.vue";
import "@/styles/main.css";

interface BoardProps {
  gameState: GameState;
}

const props = defineProps<BoardProps>();

const generateRows = (
  numberOfRows: number,
  wordLength: number,
  currentGuesses: string[],
  currentRow: number
): VNode[][] => {
  const arr: VNode[][] = [];
  for (let i = 0; i < numberOfRows; i++) {
    arr[i] = [];
    for (let j = 0; j < wordLength; j++) {
      arr[i].push(
        h(Tile, {
          x: i,
          y: j,
          letter: i === currentRow ? currentGuesses[j] ?? "" : "",
          correctGuess: true,
        })
      );
    }
  }
  return arr;
};

const board = (): VNode =>
  h(
    "div",
    {
      class: "board",
    },
    generateRows(
      props.gameState.numberOfRows,
      props.gameState.word.length,
      props.gameState.currentGuesses,
      props.gameState.currentRow
    ).map((row) =>
      h(
        "div",
        {
          class: "row",
        },
        row
      )
    )
  );
</script>

<template>
  <board class="board" />
</template>
