<script lang="ts" setup>
import { ref } from "vue";
import "./NavbarItem.scss";

interface Props {
  path: string;
  name: string;
}

defineProps<Props>();

const isHovered = ref(false);
</script>

<template>
  <div class="navbaritem">
    <router-link
      :to="path"
      :class="{ 'is-hovered': isHovered }"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      {{ name }}
    </router-link>
  </div>
</template>
