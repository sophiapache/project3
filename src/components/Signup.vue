<template>
  <form>
    <label>Name: <input type="text" v-model="name" /></label>
    <label>Email: <input type="text" v-model="email" /></label>
    <label>Password: <input type="password" v-model="password" /></label>
    <button @click="signup">Signup</button>
  </form>
</template>

<script>
import { api } from "../helpers/helpers";
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      const res = await api.createUser(newUser);
    },
  },
};
</script>
<style>
input {
  display: block;
}
</style>
