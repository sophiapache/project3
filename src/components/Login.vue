<template>
  <form>
    <input type="text" v-model="email" />
    <input type="password" v-model="password" />
    <button @click="login">Login</button>
  </form>
</template>
<script>
import { api } from "../helpers/helpers";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      const res = await api.loginUser(user);
      console.log(res);
    },
  },
};
</script>
