<script setup lang="ts">
import { onMounted } from "vue";

onMounted(async () => {
  console.log("mounted");

  const res = await fetch("http://localhost:3030");
  console.log(res);

  const data = await res.json();
  console.log(data);
});
</script>

<template>
  <main>
    <div>init</div>
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
