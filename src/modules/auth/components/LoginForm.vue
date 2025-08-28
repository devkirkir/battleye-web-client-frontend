<script setup lang="ts">
import UIButton from "@core/components/ui/UIButton.vue";
import UIInput from "@core/components/ui/UIInput.vue";
import { reactive, ref } from "vue";
import api from "@core/services";

interface Errors {
  [x: string]: string;
}

const formData = reactive({
  username: "admin",
  password: "",
});

const errors = ref<Errors>({});

const onSubmit = async () => {
  const res = await api({
    url: "/auth/login",
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data)
    .then((data) => console.log(data));

  // await res.json().then((data: ResponseError) => {
  //   if (!data.success) {
  //     errors.value.form = data.msg;

  //     if (data.errors?.length) {
  //       data.errors.forEach((error) => {
  //         errors.value[error.property!] = error.message;
  //       });
  //     }
  //   }
  // });
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
