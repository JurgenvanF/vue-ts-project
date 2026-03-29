<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import NavbarItem from "./navbarItem/NavbarItem.vue";
import "./Navbar.scss";

const isNarrow = ref(false);

const updateIsNarrow = () => {
  isNarrow.value = window.innerWidth < 801;
};

onMounted(() => {
  updateIsNarrow();
  window.addEventListener("resize", updateIsNarrow);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateIsNarrow);
});
</script>

<template>
  <nav>
    <div v-if="!isNarrow" class="navbaritems">
      <NavbarItem path="/" name="Home" />
      <NavbarItem path="/list" name="List" />
      <NavbarItem path="/counter" name="Counter" />
    </div>
    <div v-else class="hamburger" role="button" aria-label="Open menu">☰</div>
  </nav>
</template>
