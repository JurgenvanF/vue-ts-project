<script setup lang="ts">
import { ref } from "vue";

const newItem = ref("");
const items = ref<string[]>([]);

function addItem() {
  if (newItem.value.trim() !== "") {
    items.value.push(newItem.value.trim());
    newItem.value = "";
  }
}

function removeItem(index: number) {
  items.value.splice(index, 1);
}
</script>

<template>
  <h1>List</h1>

  <input
    v-model="newItem"
    @keyup.enter="addItem"
    placeholder="Type something"
  />
  <button @click="addItem">Add</button>

  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
      <button @click="removeItem(index)">✖</button>
    </li>
  </ul>
</template>
