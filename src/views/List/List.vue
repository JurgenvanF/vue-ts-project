<script setup lang="ts">
import "./List.scss";
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

  <div class="list">
    <div class="list__add">
      <input
        v-model="newItem"
        @keyup.enter="addItem"
        placeholder="Type something"
        class="list__add__input"
      />
      <button @click="addItem" class="list__add__btn">Add</button>
    </div>

    <ul class="list__items">
      <li v-for="(item, index) in items" :key="index" class="list__items__item">
        {{ item }}
        <button @click="removeItem(index)" class="list__items__item__remove">
          ✖
        </button>
      </li>
    </ul>
  </div>
</template>
