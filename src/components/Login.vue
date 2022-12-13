<template>
  <form @submit.prevent="login">
    <input type="text" v-model="email" />
    <input type="password" v-model="password" />
    <button>Login</button>
    {{ error }}
  </form>
</template>
<script>
import { api } from "../helpers/helpers";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      try {
        const res = await api.loginUser(user);
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          console.log("success");
          this.$router.push("/users/landing");
        }
      } catch (err) {
        console.error(err.response);
        this.error = err.response.data.error;
      }
    },
  },
};
</script>
