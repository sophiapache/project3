<template>
  <form @submit.prevent="signup">
    <label>Name: <input type="text" v-model="name" /></label>
    <label>Email: <input type="text" v-model="email" /></label>
    <label>Password: <input type="password" v-model="password" /></label>
    <button>Signup</button>
    {{ error }}
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

      error: "",
    };
  },
  methods: {
    async signup() {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      try {
        const res = await api.createUser(newUser);
        console.log(res);
        this.err = "";
        this.$router.push("/users/login");
      } catch (err) {
        console.error(err.response.data.error);
        this.error = err.response.data.error;
      }
    },
  },
};
</script>
<style>
input {
  display: block;
}
</style>
