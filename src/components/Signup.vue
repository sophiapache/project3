<template>
  <form>
    <label>Name: <input type="text" v-model="name" /></label>
    <label>Email: <input type="text" v-model="email" /></label>
    <label>Password: <input type="password" v-model="password" /></label>
    <button @click="signup">Signup</button>
  </form>
</template>
<script>
import axios from "axios";
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
    signup(e) {
      e.preventDefault();
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      axios.post("");
    },
  },
};
</script>
<style>
input {
  display: block;
}
</style>
