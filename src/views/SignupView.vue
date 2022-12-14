<template>
  <b-form @submit.prevent="signup" class="form-container">
    <h2 class="m-3">Sign up</h2>
    <b-form-group label="Name:" class="m-1">
      <b-form-input type="text" v-model="name" required
    /></b-form-group>
    <b-form-group label="Email address:" class="m-1">
      <b-form-input type="text" v-model="email" required
    /></b-form-group>
    <b-form-group label="Password:" class="m-1">
      <b-form-input type="password" v-model="password" required
    /></b-form-group>

    <button class="m-1">Sign up</button>
    {{ error }}
  </b-form>
</template>

<script>
// @ is an alias to /src
import { api } from "../helpers/helpers";

export default {
  name: "SignupView",
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
<style scoped>
.form-container {
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
