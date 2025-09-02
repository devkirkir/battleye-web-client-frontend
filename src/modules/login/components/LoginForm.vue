<script setup lang="ts">
import UIButton from "@core/components/ui/UIButton.vue";
import UIInput from "@core/components/ui/UIInput.vue";
import { useUser } from "@user";
import { reactive } from "vue";

import useLogin from "../composables/useLogin";

const formData = reactive({
  username: "",
  password: "",
});

const { errors, submit } = useLogin();

const onSubmit = async () => {
  const success = await submit(formData);

  if (success) {
    const { setUserData } = useUser();

    setUserData({ isAuth: true, userId: success.userId });
  }
};
</script>

<template>
  <form :class="[{ error: errors['form'] }]" @submit.prevent="onSubmit">
    <h3>Login</h3>

    <UIInput
      v-model="formData.username"
      type="text"
      name="username"
      placeholder="username"
      :error-msg="errors.username"
      :is-placeholder-animated="true" />

    <UIInput
      v-model="formData.password"
      type="password"
      name="password"
      placeholder="password"
      :error-msg="errors.password"
      :is-placeholder-animated="true" />

    <UIButton type="submit">Login</UIButton>

    <span v-if="errors['form']" class="error-msg">{{ errors["form"] }}</span>

    <button type="button" class="forgot">I forgot my username or password</button>
  </form>
</template>

<style scoped>
form {
  width: 360px;

  display: flex;
  flex-direction: column;
  gap: var(--gap-md);

  border: 2px solid var(--bg-color-secondary);

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
