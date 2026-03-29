<script setup lang="ts">
import Navbar from "./components/navbar/Navbar.vue";
</script>

<template>
  <div class="navbar">
    <Navbar />
  </div>
  <div class="content">
    <router-view />
  </div>
</template>
