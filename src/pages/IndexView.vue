<script setup lang="ts">
import {useCounterStore} from "../stores/counter"
import Button from "@/components/ui/button/Button.vue";

const counter = useCounterStore();
</script>

<template>
  <main>
    <h1>Счётчик: <span> {{ counter.count }} </span></h1>
    <Button @click="counter.increment()">Увеличить</Button>
    <Button @click="counter.decrement()">Уменьшить</Button>
  </main>
</template>
