<script setup lang="ts">
import Navbar from "./components/navbar/Navbar.vue";
import Footer from "./components/footer/Footer.vue";
</script>

<template>
  <div class="app">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer-container">
      <Footer />
    </div>
  </div>
</template>
