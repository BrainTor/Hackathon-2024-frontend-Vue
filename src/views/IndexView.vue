<script setup lang="ts">
import {useCounterStore} from "../stores/counter"
const counter = useCounterStore();
</script>

<template>
  <main>
    <h1>Counter: <span> {{ counter.count }} </span></h1>
    <button @click="counter.increment()">Increment</button>
    <button @click="counter.decrement()">Decrement</button>
  </main>
</template>
