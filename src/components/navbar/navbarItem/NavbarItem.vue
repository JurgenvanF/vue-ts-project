<script lang="ts" setup>
interface Props {
  path: string;
  name: string;
}

const props = defineProps<Props>();
</script>

<template>
  <router-link :to="path">
    {{ name }}
  </router-link>
</template>
