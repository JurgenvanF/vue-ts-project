<script setup lang="ts">
import NavbarItem from "./navbarItem/NavbarItem.vue";
</script>

<template>
  <nav>
    <NavbarItem path="/" name="Home" /> |
    <NavbarItem path="/about" name="About" />
  </nav>
  <router-view />
</template>
