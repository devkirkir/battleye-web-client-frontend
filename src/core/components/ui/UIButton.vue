<script setup lang="ts">
interface Props {
  type?: "submit" | "button";
  appearance?: "primary";
}

const { type = "button", appearance = "primary" } = defineProps<Props>();
</script>

<template>
  <button :type :class="appearance">
    <slot />
  </button>
</template>

<style scoped>
button {
  &:disabled {
    cursor: default;
    opacity: 0.4;
  }
}

.primary {
  height: 44px;
  background-color: var(--bg-color-secondary);
  color: var(--text-color);
  font-size: 1rem;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--bg-color-secondary);
  cursor: pointer;

  transition: 0.2s linear;

  &:not(:disabled):hover {
    background-color: var(--bg-color-hover);
    border-color: var(--outline);
  }

  &:focus {
    border-color: var(--bg-color-secondary);
  }

  &:active {
    border: 1px solid var(--bg-color-secondary);
  }
}
</style>
