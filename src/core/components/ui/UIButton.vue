<script setup lang="ts">
interface Props {
  type?: "submit" | "button";
}

const { type = "button" } = defineProps<Props>();
</script>

<template>
  <button :type>
    <slot />
  </button>
</template>

<style scoped></style>
