<script setup lang="ts">
import UIButton from "@core/components/ui/UIButton.vue";
import UIInput from "@core/components/ui/UIInput.vue";
import { reactive } from "vue";

const formData = reactive({
  username: "",
  password: "",
});
</script>

<template>
  <form>
    <h3>Login</h3>

    <UIInput
      v-model="formData.username"
      type="text"
      name="username"
      placeholder="username"
      :is-placeholder-animated="true" />

    <UIInput
      v-model="formData.password"
      type="password"
      name="password"
      placeholder="password"
      :is-placeholder-animated="true" />

    <UIButton type="submit">Login</UIButton>

    <button type="button" class="forgot">I forgot my username or password</button>
  </form>
</template>

<style scoped>
form {
  width: 360px;

  display: flex;
  flex-direction: column;
  gap: var(--gap-md);

  border: 1px solid var(--bg-color-secondary);

  padding: 20px;

  h3 {
    color: var(--text-color);
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  .forgot {
    width: fit-content;

    color: var(--text-color-secondary);
    font-size: 0.9rem;

    background: none;
    border: none;
    border-bottom: 1px solid var(--text-color-secondary);

    transition: border 0.2s linear;
    cursor: pointer;

    &:hover {
      border-bottom-color: transparent;
    }
  }
}
</style>
