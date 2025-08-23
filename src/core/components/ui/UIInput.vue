<script setup lang="ts">
import { computed } from "vue";

type InputTypes = "text" | "password";

interface Props {
  type: InputTypes;
  placeholder: string;
  name: string;
  isPlaceholderAnimated?: boolean;
  error?: string;
}

const props = defineProps<Props>();
const model = defineModel<string>();

const placeholderType = computed(() => (props.isPlaceholderAnimated ? undefined : props.placeholder));
</script>

<template>
  <label>
    <div v-animated-placeholder class="input">
      <input v-model="model" :type="props.type" :placeholder="placeholderType" />
      <span v-if="props.isPlaceholderAnimated">{{ props.placeholder }}</span>
    </div>

    <span v-if="error" class="error">{{ props.error }}</span>
  </label>
</template>

<style scoped>
.input {
  position: relative;
  width: 100%;
  height: 44px;

  border: 1px solid #eee;

  &.placeholder-active {
    span {
      transform: translateY(0);
      font-size: 12px;
    }
  }

  span {
    position: absolute;
    left: 10px;
    height: 100%;

    font-size: 18px;
    line-height: 100%;

    transform: translateY(calc(50% - 9px));
    z-index: 1;

    transition: 0.1s linear;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    font-size: 18px;

    border: none;
    padding: 0 10px;
    z-index: 0;
  }
}
</style>
