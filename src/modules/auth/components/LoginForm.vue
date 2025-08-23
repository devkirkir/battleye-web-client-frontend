<script setup lang="ts">
import UIInput from "@core/components/ui/UIInput.vue";
import { reactive } from "vue";

const formData = reactive({
  username: "",
  password: "",
});
</script>

<template>
  <form>
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
  </form>
</template>

<style scoped>
form {
  max-width: 320px;
  width: 100%;
}
</style>
