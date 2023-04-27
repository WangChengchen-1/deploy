<template>
  <div class="">
    <h3 @click="store.increment() ">
      A:{{ store.count }}
    </h3>
  </div>
</template>

<script setup>
import { store } from "./store";
</script>

<style scoped lang="scss"></style>