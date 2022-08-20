<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="logout">Cerra Sesión</button>
  </div>
</template>

<script>
import { auth } from "../utils/firebase";

export default {
  name: "HomeView",
  setup() {
    const logout = () => {
      auth.signOut();
    };

    return { logout };
  },
};
</script>
