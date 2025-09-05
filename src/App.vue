<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <div>
      <RouterLink to="login">Login</RouterLink>
      <RouterLink to="dashboard">Dashboard</RouterLink>
    </div>

    <RouterView />
  </div>
</template>

<style scoped></style>
