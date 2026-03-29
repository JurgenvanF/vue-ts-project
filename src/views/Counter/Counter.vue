<script setup lang="ts">
import "./Counter.scss";
import { ref } from "vue";

// reactive counter variable
const count = ref(0);

// functions to increment and decrement
function increment() {
  count.value++;
}

function decrement() {
  count.value--;
}

function clear() {
  count.value = 0;
}
</script>

<template>
  <h1>Counter</h1>

  <div class="counter">
    <div class="counter__value">
      <button class="counter__value__remove" @click="decrement">-</button>
      <span class="counter__value__count">{{ count }}</span>
      <button class="counter__value__add" @click="increment">+</button>
    </div>
    <button class="counter__reset" @click="clear">Reset to 0</button>
  </div>
</template>
