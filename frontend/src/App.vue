<script setup lang="ts">
import { onMounted, ref } from "vue";
import api from "@/utils/api";

const word = ref("");

onMounted(async () => {
  word.value = await api.getRandomWordByLength(5);
});
</script>

<template>
  <main>
    <div>{{ word }}</div>
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
