<script setup lang="ts">
import { computed } from "vue";

type InputTypes = "text" | "password";

interface Props {
  type: InputTypes;
  placeholder: string;
  name: string;
  isDisabled?: boolean;
  isPlaceholderAnimated?: boolean;
  errorMsg?: string;
}

const props = defineProps<Props>();
const model = defineModel<string>();

const placeholderType = computed(() => (props.isPlaceholderAnimated ? undefined : props.placeholder));
</script>

<template>
  <label>
    <div v-animated-placeholder :class="[{ disabled: isDisabled }, 'input']">
      <input v-model="model" :type="props.type" :placeholder="placeholderType" :disabled="isDisabled" />
      <span v-if="props.isPlaceholderAnimated">{{ props.placeholder }}</span>
    </div>

    <span v-if="errorMsg" class="error-msg">{{ props.errorMsg }}</span>
  </label>
</template>

<style scoped>
.input {
  position: relative;
  width: 100%;
  height: 44px;
  background-color: var(--bg-color-secondary);

  border: 1px solid var(--bg-color-secondary);
  border-radius: var(--border-radius-md);

  transition: 0.2s linear;

  &:not(.error, .disabled):hover {
    border: 1px solid var(--outline);
  }

  &.disabled {
    cursor: default;
    user-select: none;
    opacity: 0.4;

    span {
      cursor: default;
    }
  }

  &.placeholder-active {
    span {
      transform: translateY(2px);
      font-size: 12px;
    }
  }

  &.error {
    outline: 1px solid var(--error-color);
    color: var(--error-color);
    border: 1px solid var(--error-color);

    input:focus {
      outline: none;
    }
  }

  span {
    position: absolute;
    left: 10px;
    height: 100%;

    color: var(--text-color-secondary);
    font-size: 18px;
    line-height: 100%;

    transform: translateY(calc(50% - 9px));
    z-index: 1;
    cursor: text;

    transition: 0.1s linear;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    color: var(--text-color);
    font-size: 1.1rem;

    background-color: transparent;
    border: none;
    border-radius: var(--border-radius-md);

    padding: 3px 10px 0;
    z-index: 0;
    box-sizing: border-box;
  }
}

.error-msg {
  display: block;
  color: var(--error-color);
  margin-top: 4px;
}
</style>
