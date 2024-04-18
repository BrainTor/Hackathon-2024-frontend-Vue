<script setup lang="ts">
import {useCounterStore} from "../stores/counter"
import Button from "@/components/ui/button/Button.vue";

const counter = useCounterStore();
</script>

<template>
  <main>
    <h1>Counter: <span> {{ counter.count }} </span></h1>
    <Button @click="counter.increment()">Increment</Button>
    <Button @click="counter.decrement()">Decrement</Button>
  </main>
</template>
