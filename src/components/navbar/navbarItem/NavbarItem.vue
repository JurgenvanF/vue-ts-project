<script lang="ts" setup>
import "./NavbarItem.scss";

interface Props {
  path: string;
  name: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="navbaritem">
    <router-link :to="path">
      {{ name }}
    </router-link>
  </div>
</template>
