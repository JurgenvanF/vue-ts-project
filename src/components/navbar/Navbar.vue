<script setup lang="ts">
import NavbarItem from "./navbarItem/NavbarItem.vue";
import "./Navbar.scss";
</script>

<template>
  <nav>
    <div class="navbaritems">
      <NavbarItem path="/" name="Home" />
      <NavbarItem path="/about" name="About" />
    </div>
  </nav>
</template>
