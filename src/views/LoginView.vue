<template>
  <b-form @submit.prevent="login" class="form-container">
    <h2 class="m-3">Sign in</h2>
    <b-form-group
      id="email-group-1"
      label="Email address:"
      label-for="email-input-1"
      class="m-1"
    >
      <b-form-input
        id="email-input-1"
        type="text"
        v-model="email"
        required
        placeholder="Enter email"
      />
    </b-form-group>

    <b-form-group
      class="m-1"
      id="password-group-1"
      label="Password:"
      label-for="password-input-1"
    >
      <b-form-input
        id="password-input-1"
        type="password"
        v-model="password"
        required
        placeholder="enter password"
    /></b-form-group>
    <button class="m-1">Login</button>
    {{ error }}
  </b-form>
</template>

<script>
import { api } from "../helpers/helpers";

export default {
  name: "LoginView",
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
<style scoped>
.form-container {
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
